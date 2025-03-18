#!/usr/bin/env python3
"""
mutation_pipeline_deterministic.py
----------------------------------
Generates mutated HTML test cases using a deterministic fractal approach enhanced to
prevent loss of complexity over mutation cycles. Enhancements include:
  - Progressive retention during crossover (coverage-weighted harvesting)
  - Layered mutation stages that compound (base, interactive, semantic,
    coverage-guided, and progressive complexity phases)
  - Structural sanitization and smart comment injection to preserve functionality
  - Robust, exception-aware JavaScript try/catch event handlers that surface errors
  - Resource-aware mutation with memory monitoring and safe JavaScript mutation
  - **New:** Dynamic mutation targeting using coverage gaps from previous rounds
    to progressively focus on under-covered HTML elements/attributes.
  
Usage:
    python3 mutation_pipeline_deterministic.py [num_mutations]

Environment Variables:
    MUTATION_SEED_A, MUTATION_SEED_B  : Force specific seeds if valid
    MUTATION_OUT_DIR                  : Directory to store mutated HTML
    RECENT_MEMORY_CRASH, RECENT_DOM_CRASH, OVERALL_COVERAGE
    COVERAGE_DATA_JSON                : JSON file with coverage data
    COVERAGE_GAPS                     : JSON string with coverage gap information
    HISTORICAL_COVERAGE               : JSON string with aggregated coverage data
"""

import os
import sys
import json
import copy
import random
import logging
import time
import uuid
import gc
import tracemalloc
import re
import contextlib
from collections import defaultdict
from typing import Any, Dict, List, Optional, Tuple
from esprima import parseScript

from bs4 import BeautifulSoup, Doctype

# Additional imports for JavaScript mutation enhancements
import esprima
import jsbeautifier

try:
    from estree import mutate_ast, generate_code
except ModuleNotFoundError:
    # Fallback dummy implementations if estree module is not installed
    def mutate_ast(ast, config):
        return ast
    def generate_code(ast):
        return "// Placeholder generated code; original AST unchanged"

# Shared config for environment, logging, RNG seeding
from config import (
    BASE_DIR, SEEDS_BASE, CLASSIFICATIONS_JSON, MUTATION_FOLDER,
    init_global_seed, logger as base_logger
)

# --- New: Round-Specific Seed Function ---
def get_round_specific_seed():
    """Get a seed specific to this round of mutation."""
    round_seed = os.environ.get("MUTATION_ROUND_SEED")
    if round_seed:
        try:
            return int(round_seed)
        except ValueError:
            pass
    return int(time.time())

# Use round-specific seeding
round_seed = get_round_specific_seed()
random.seed(round_seed)
logger = logging.getLogger("mutation-deterministic")
logger.setLevel(base_logger.level)
logger.info(f"Using round-specific seed: {round_seed}")
tracemalloc.start()

###############################################################################
# Complexity Validation & Structural Sanitization Parameters
###############################################################################
COMPLEXITY_FACTORS = {
    'element_diversity': 0.5,
    'interaction_density': 0.3,
    'nesting_depth': 4
}

def validate_complexity(soup: BeautifulSoup) -> bool:
    tags = [tag.name for tag in soup.find_all(True)]
    diversity = (len(set(tags)) / len(tags)) if tags else 0
    events = len(soup.find_all(lambda t: any(a.startswith('on') for a in t.attrs)))
    text_length = len(soup.get_text())
    interaction_density = events / text_length if text_length else 0
    depths = [len(list(tag.parents)) for tag in soup.find_all(True)]
    avg_depth = sum(depths) / len(depths) if depths else 0
    return (diversity >= COMPLEXITY_FACTORS['element_diversity'] and
            interaction_density >= COMPLEXITY_FACTORS['interaction_density'] and
            avg_depth >= COMPLEXITY_FACTORS['nesting_depth'])

def _validate_structure(soup: BeautifulSoup) -> BeautifulSoup:
    titles = soup.find_all('title')
    if len(titles) > 1:
        for title in titles[1:]:
            title.decompose()
    if soup.body and soup.head:
        metas = soup.body.find_all('meta')
        for meta in metas:
            soup.head.append(meta.extract())
    for style in soup.find_all('style'):
        if style.find(True):
            style.clear()
            style.string = "/* Corrupted CSS */\n.invalid { color: inherit; }"
    if not soup.find('html'):
        soup = BeautifulSoup('<html>' + str(soup) + '</html>', 'html.parser')
    if not soup.find('body'):
        if soup.html:
            soup.html.append(soup.new_tag('body'))
        else:
            html_tag = soup.new_tag('html')
            body = soup.new_tag('body')
            html_tag.append(body)
            soup.append(html_tag)
    return soup

###############################################################################
# Seed, Classification & Coverage Helpers
###############################################################################
def load_html_content(file_path: str) -> Optional[str]:
    try:
        with open(file_path, "r", encoding="utf-8", errors="replace") as f:
            return f.read()
    except Exception as e:
        logger.error("Error loading HTML from %s => %s", file_path, e)
        return None

def load_classifications() -> Dict[str, Any]:
    if not os.path.exists(CLASSIFICATIONS_JSON):
        return {}
    try:
        with open(CLASSIFICATIONS_JSON, "r", encoding="utf-8") as f:
            return json.load(f)
    except Exception as e:
        logger.error("Error loading classification JSON => %s", e)
        return {}

def get_forced_seeds() -> Tuple[Optional[str], Optional[str]]:
    envA = os.environ.get("MUTATION_SEED_A")
    envB = os.environ.get("MUTATION_SEED_B")
    if envA and envB and os.path.exists(envA) and os.path.exists(envB):
        return envA, envB
    return None, None

def load_coverage_data() -> Dict[str, Any]:
    coverage_file = os.environ.get("COVERAGE_DATA_JSON")
    if coverage_file and os.path.exists(coverage_file):
        try:
            with open(coverage_file, "r", encoding="utf-8") as f:
                return json.load(f)
        except Exception as e:
            logger.error("Error loading coverage data: %s", e)
    return {
        'element_coverage': {},
        'attribute_coverage': {},
        'event_coverage': {}
    }

###############################################################################
# Grammar-Based & Bitwise Mutation Helpers
###############################################################################
HTML_TAGS = [
    "<div>", "<span>", "<script>", "<style>", "<canvas>", "<video>", "<audio>",
    "<iframe>", "<object>", "<ul>", "<li>", "<p>", "<form>", "<input>", "<select>"
]

JS_SNIPPETS = [
    """try { 
        const res = %s; 
        console.debug('Mutation success:', res); 
    } catch(e) { 
        console.warn('Mutation error:', e); 
        document.dispatchEvent(new CustomEvent('mutationFailed')); 
    }""",
    """try {
        %s
    } finally {
        window.lastMutation = performance.now();
    }"""
]

def bitwise_corrupt_string(s: str, intensity: float) -> str:
    if not s:
        return s
    if re.match(r'^\s*(function|var|let|const|class|try|catch|<script>)', s):
        return s
    arr = bytearray(s, 'utf-8', 'replace')
    flips = max(1, int(len(arr) * 0.05 * intensity))
    for _ in range(flips):
        idx = random.randint(0, len(arr) - 1)
        bit = 1 << random.randint(0, 7)
        arr[idx] ^= bit
    return arr.decode('utf-8', 'replace')

def bitwise_corrupt_safe(s: str, intensity: float) -> str:
    if len(s) > 10000:
        s = s[:10000]
    return bitwise_corrupt_string(s, intensity)

def insert_grammar_snippet(soup: BeautifulSoup, intensity: float) -> None:
    if not soup.body:
        return
    for _ in range(int(1 + (3 * intensity))):
        rand_tag = random.choice(HTML_TAGS)
        if rand_tag == "<script>" and soup.find_parent('script'):
            continue
        new_element = soup.new_tag('mutation-marker')
        new_element['data-original-tag'] = rand_tag.strip('<>')
        if random.random() < 0.8:
            new_element.string = f"Active {rand_tag} insertion"
        else:
            script = soup.new_tag('script')
            script.string = f"console.log('Mutation: {rand_tag}');"
            new_element.append(script)
        insertion_index = random.randint(0, len(soup.body.contents))
        soup.body.insert(insertion_index, new_element)

###############################################################################
# Revised Harvest: Progressive Retention with Coverage Weighting
###############################################################################
def harvest(s: BeautifulSoup, step: int) -> List[BeautifulSoup]:
    all_elems = s.find_all(True)
    retention_rate = min(0.2 + (step * 0.15), 0.8)
    prioritized = sorted(
        all_elems,
        key=lambda x: len(x.find_all()) * 10 + random.random(),
        reverse=True
    )
    return prioritized[:int(len(prioritized) * retention_rate)]

###############################################################################
# New: Coverage-Aware Mutation Targeting
###############################################################################
class CoverageAwareMutator:
    def __init__(self, coverage_gaps: Dict[str, Any]):
        self.gaps = coverage_gaps
        self.mutation_weights = {
            'element': 0.4,
            'attribute': 0.3,
            'event': 0.3
        }
        
    def adjust_weights(self, soup: BeautifulSoup):
        present_elements = {tag.name for tag in soup.find_all(True)}
        gap_elements = set(self.gaps.get("elements", []))
        intersection = gap_elements & present_elements
        if intersection:
            self.mutation_weights['element'] = min(0.8, self.mutation_weights['element'] * 1.5)
        
    def get_target_element(self, soup: BeautifulSoup) -> Optional[BeautifulSoup]:
        gap_elements = self.gaps.get("elements", [])
        existing_elements = [tag for tag in soup.find_all(True) if tag.name in gap_elements]
        if existing_elements:
            return random.choice(existing_elements)
        candidate_elements = []
        for tag in soup.find_all(True):
            if self.gaps.get("attributes") and any(attr not in tag.attrs for attr in self.gaps["attributes"]):
                candidate_elements.append(tag)
            if self.gaps.get("events") and any(evt not in tag.attrs for evt in self.gaps["events"]):
                candidate_elements.append(tag)
        return random.choice(candidate_elements) if candidate_elements else None

###############################################################################
# Advanced Anomaly Engine with Layered Mutation Strategy
###############################################################################
class AdvancedAnomalyEngine:
    def __init__(self, step: int, coverage_feedback: Dict[str, Any]) -> None:
        self.fuzz_definitions = [
            "function triggerFuzz() { console.log('Fuzz triggered'); }",
            "window.triggerFuzz = () => { try { document.dispatchEvent(new Event('fuzz')); } catch(e) {} };",
            "const triggerFuzz = () => fetch('/fuzz-safe').catch(() => {});"
        ]
        self.step = min(step, 5)
        base_intensity = 0.1 + (self.step * 0.1)
        if coverage_feedback.get("recent_memory_crash", False):
            base_intensity += 0.2
        if coverage_feedback.get("recent_dom_crash", False):
            base_intensity += 0.1
        if coverage_feedback.get("overall_coverage", 0) > 500:
            base_intensity -= 0.1
        self.intensity = max(min(base_intensity, 1.0), 0.1)
        self.coverage_feedback = coverage_feedback

    def mutate(self, soup: BeautifulSoup) -> None:
        self._base_mutations(soup)
        self._interactive_mutations(soup)
        self._semantic_mutations(soup)
        self._coverage_guided_mutations(soup)
        self._entangle_dom(soup)
        self._propagate_mutations(soup)
        self._amplify_coverage_gaps(soup)
        self._inject_meaningful_comments(soup)
        self._event_entanglement(soup)

    def _base_mutations(self, soup: BeautifulSoup) -> None:
        insert_grammar_snippet(soup, self.intensity)
        tags = soup.find_all(True)
        if tags:
            subset_size = max(1, int(len(tags) * 0.1 * self.intensity))
            chosen = random.sample(tags, min(subset_size, len(tags)))
            for el in chosen:
                for attr, val in list(el.attrs.items()):
                    if isinstance(val, str):
                        el.attrs[attr] = bitwise_corrupt_string(val, self.intensity)

    def _interactive_mutations(self, soup: BeautifulSoup) -> None:
        tags = soup.find_all(True)
        for el in tags:
            if random.random() < 0.02 * self.intensity:
                ev = random.choice(['click', 'mouseover', 'load'])
                el[ev] = f"alert('Interactive mutation at step {self.step}');"

    def _semantic_mutations(self, soup: BeautifulSoup) -> None:
        tags = soup.find_all(True)
        if not tags:
            return
        sample_sz = max(2, int(len(tags) * 0.15 * self.intensity))
        chosen = random.sample(tags, min(sample_sz, len(tags)))
        for el in chosen:
            el['data-mut-step'] = str(self.step)
            if random.random() < 0.7:
                el['data-fractal-id'] = ''.join(random.choices('abcdef0123456789', k=8))
            if random.random() < 0.5:
                mutant_tag = soup.new_tag("mutation-container")
                mutant_tag['class'] = 'fractal-mutation'
                if random.random() < 0.6:
                    mutant_tag.string = f" Mutation {self.step}.{random.randint(1,100)}"
                else:
                    invalid_el = soup.new_tag("invalid_element")
                    invalid_el['data-fractal'] = '1'
                    mutant_tag.append(invalid_el)
                el.append(mutant_tag)
            if random.random() < 0.3:
                corrupt_attr = f"data-corrupted-{random.choice(['a','b','c'])}"
                el[corrupt_attr] = bitwise_corrupt_string(str(time.time()), self.intensity)

    def _coverage_guided_mutations(self, soup: BeautifulSoup) -> None:
        for el in soup.find_all(True):
            if el.name not in self.coverage_feedback.get('attributes', {}):
                el['data-uncovered-attr'] = "fuzz"
            undercovered_events = [
                evt for evt in ['onblur', 'onerror', 'onabort']
                if self.coverage_feedback.get('events', {}).get(evt, 0) < 3
            ]
            if undercovered_events:
                el[random.choice(undercovered_events)] = "triggerFuzz()"
            if el.name == 'form' and 'form-coverage' not in self.coverage_feedback.get('elements', {}):
                el.append(self._create_malformed_input(soup))

    def _create_malformed_input(self, soup: BeautifulSoup) -> BeautifulSoup:
        inp = soup.new_tag('input')
        inp['type'] = random.choice(['invalid', 'text', 'number'])
        inp['name'] = bitwise_corrupt_string("input", 0.8)
        return inp

    def _entangle_dom(self, soup: BeautifulSoup) -> None:
        all_tags = soup.find_all(True)
        if not all_tags:
            return
        sample_count = int(len(all_tags) * 0.3)
        for el in random.sample(all_tags, k=sample_count):
            clone = copy.copy(el)
            clone['data-entangled'] = str(uuid.uuid4())
            if random.random() < 0.7:
                el.insert_after(clone)
            if random.random() < 0.4:
                wrapper = soup.new_tag("entanglement-wrapper")
                el.wrap(wrapper)

    def _propagate_mutations(self, soup: BeautifulSoup) -> None:
        mutated_elements = soup.find_all(attrs={"data-mut-step": True})
        for el in mutated_elements:
            if el.get('data-corrupted-a'):
                new_attr = f"dep-{hash(el['data-corrupted-a'])}"
                el[new_attr] = bitwise_corrupt_string(el.text, 0.5)
            if 'data-fractal-id' in el.attrs:
                fractal_child = soup.new_tag("fractal-node")
                fractal_child.string = el['data-fractal-id'][:4]
                el.append(fractal_child)

    def _amplify_coverage_gaps(self, soup: BeautifulSoup) -> None:
        undercovered = self._get_undercovered_elements(soup)
        for tag_name in undercovered:
            for el in soup.find_all(tag_name):
                for _ in range(2 ** self.step):
                    self._inject_nested_anomaly(soup, el)

    def _get_undercovered_elements(self, soup: BeautifulSoup) -> List[str]:
        tag_counts = {}
        for el in soup.find_all(True):
            tag_counts[el.name] = tag_counts.get(el.name, 0) + 1
        return [tag for tag, count in tag_counts.items() if count < 5]

    def _inject_nested_anomaly(self, soup: BeautifulSoup, element) -> None:
        anomaly = soup.new_tag("coverage-gap-fill")
        anomaly['data-depth'] = str(len(list(element.parents)))
        anomaly.append(self._create_recursive_script(soup))
        element.append(anomaly)

    def _create_recursive_script(self, soup: BeautifulSoup) -> BeautifulSoup:
        s = soup.new_tag('script')
        s.string = f"console.log('recursive script at step {self.step}');"
        return s

    def _generate_valid_js(self) -> str:
        template = random.choice(JS_SNIPPETS)
        operations = [
            "document.querySelectorAll('*')",
            "new ArrayBuffer(1e6)",
            "window.mutationCounter++",
            "document.body.appendChild(document.createElement('div'))"
        ]
        return template % random.choice(operations)

    def _event_entanglement(self, soup: BeautifulSoup) -> None:
        if random.random() < 0.7:
            script = soup.new_tag('script')
            script.string = """
            try {
                window.triggerFuzz = () => {
                    console.log('Safe triggerFuzz execution');
                    document.dispatchEvent(new Event('fuzz'));
                };
            } catch(e) {
                console.error('Fuzz setup failed:', e);
            }
            """
            if soup.head:
                soup.head.append(script)
            else:
                head = soup.new_tag('head')
                head.append(script)
                if soup.html:
                    soup.html.insert(0, head)
                else:
                    soup.insert(0, head)
        for el in soup.find_all(True):
            if random.random() < 0.02 * self.intensity:
                evt = random.choice(['click', 'mouseover', 'load'])
                handler = f"""function handleEvent() {{
    try {{
        {self._generate_valid_js()}
    }} catch(e) {{
        document.body.classList.add('mutation-error');
    }}
}}"""
                el[evt] = handler

    def _inject_meaningful_comments(self, soup: BeautifulSoup) -> None:
        comment_texts = [
            "<!-- Appears broken in IE -->",
            "<!--[if lt IE 9]> <script>alert('old IE')<![endif]-->",
            "<!-- Google Analytics -->",
            "<!-- Temporary fix -->"
        ]
        candidates = soup.find_all(True)
        if candidates:
            for el in random.sample(candidates, min(3, len(candidates))):
                comment = soup.new_string(random.choice(comment_texts))
                el.insert_before(comment)

###############################################################################
# Enhanced Anomaly Engine with Coverage-Aware Mutation Targeting and Feedback
###############################################################################
class EnhancedAnomalyEngine(AdvancedAnomalyEngine):
    def __init__(self, step: int, coverage_feedback: Dict[str, Any], coverage_gaps: Dict[str, Any]):
        super().__init__(step, coverage_feedback)
        self.mutator = CoverageAwareMutator(coverage_gaps)
        self.gaps = coverage_gaps

    def mutate(self, soup: BeautifulSoup) -> None:
        self.mutator.adjust_weights(soup)
        target_element = self.mutator.get_target_element(soup)
        if target_element:
            self._targeted_mutations(target_element)
        super().mutate(soup)

    def _targeted_mutations(self, element):
        if self.gaps.get("attributes"):
            new_attr = random.choice(self.gaps["attributes"])
            if new_attr not in element.attrs:
                element[new_attr] = "targeted_attr_" + str(uuid.uuid4())[:8]
        if self.gaps.get("events"):
            new_event = random.choice(self.gaps["events"])
            if new_event not in element.attrs:
                element[new_event] = "targetedEvent()"
        if element.name in self.gaps.get("elements", []):
            clone = copy.copy(element)
            element.insert_after(clone)

###############################################################################
# Mutation Optimizer
###############################################################################
class MutationOptimizer:
    def __init__(self):
        self.historical_coverage = {}

    def update_coverage(self, new_coverage: Dict[str, int]) -> None:
        for key in new_coverage:
            self.historical_coverage[key] = self.historical_coverage.get(key, 0) + new_coverage[key]

    def _least_covered(self, category: str) -> str:
        cat_data = self.historical_coverage.get(category, {})
        if not cat_data:
            return ""
        return min(cat_data, key=cat_data.get)

    def _calculate_intensity(self) -> float:
        overall = sum(self.historical_coverage.get('elements', {}).values())
        return 1.0 if overall > 1000 else 0.5

    def suggest_mutation_strategy(self) -> Dict[str, Any]:
        return {
            'focus_element': self._least_covered('elements'),
            'focus_attribute': self._least_covered('attributes'),
            'mutation_intensity': self._calculate_intensity()
        }

###############################################################################
# Fractal Mutator with Feedback and Progressive Complexity
###############################################################################
class FractalMutator:
    def __init__(self, seed1_content: str, seed2_content: str,
                 coverage_feedback: Optional[Dict[str, Any]] = None):
        self.chain: List[str] = [seed1_content, seed2_content]
        self.step = 0
        self.coverage_feedback = coverage_feedback if coverage_feedback else {}
        self.mutation_history = defaultdict(list)
        
        # Get round information for adaptive mutation
        self.round_num = int(os.environ.get("MUTATION_ROUND_NUM", "1"))
        self.unique_crashes = int(os.environ.get("UNIQUE_CRASHES_COUNT", "0"))
        
        # Load previous coverage data if available
        self.previous_coverage_file = os.environ.get("PREVIOUS_COVERAGE_FILE", "")
        self.previous_coverage = {}
        if self.previous_coverage_file and os.path.exists(self.previous_coverage_file):
            try:
                with open(self.previous_coverage_file, "r", encoding="utf-8") as f:
                    self.previous_coverage = json.load(f)
            except Exception as e:
                logger.error(f"Failed to load previous coverage: {e}")
        
        # Adjust mutation strategy based on round number and previous results
        self.mutation_intensity = min(0.2 + (self.round_num * 0.1), 0.8)
        if self.unique_crashes > 0:
            self.mutation_intensity += min(self.unique_crashes * 0.05, 0.2)
        
        # Set entropy factor that increases with each round
        self.entropy_factor = 1.0 + (self.round_num * 0.2)
        
        logger.info(f"Initialized FractalMutator with round {self.round_num}, "
                    f"intensity {self.mutation_intensity:.2f}, "
                    f"entropy {self.entropy_factor:.2f}")

    def generate_next(self) -> str:
        # Apply round-specific randomness
        random.seed(get_round_specific_seed() + self.step * 100)
        
        parent1 = self.chain[-2]
        parent2 = self.chain[-1]
        crossed_html = self._fractal_crossover(parent1, parent2)
        mutated_html = self._apply_advanced_mutation(crossed_html)
        soup = BeautifulSoup(mutated_html, 'html.parser')
        
        # Add round-specific markers to help track mutation evolution
        if soup.head:
            meta = soup.new_tag('meta')
            meta['name'] = 'mutation-round'
            meta['content'] = str(self.round_num)
            soup.head.append(meta)
        
        self._track_mutation_impact(soup)
        
        # Apply targeted mutations in later rounds based on previous feedback
        if self.round_num > 1:
            self._apply_targeted_mutations(soup)
        
        if not self._prevent_complexity_regression(soup):
            logger.warning("Complexity regression detected, applying aggressive mutations.")
        
        if not validate_complexity(soup):
            logger.warning("Complexity validation failed, enforcing aggressive mutations.")
            self._apply_aggressive_mutations(soup)
        
        final_html = str(soup)
        self.chain.append(final_html)
        self.step += 1
        return final_html

    def _fractal_crossover(self, html1: str, html2: str) -> str:
        soup1 = BeautifulSoup(html1, 'html.parser')
        soup2 = BeautifulSoup(html2, 'html.parser')
        comp1 = harvest(soup1, self.step)
        comp2 = harvest(soup2, self.step)
        new_soup = BeautifulSoup(features='html.parser')
        new_soup.append(Doctype('html'))
        html_tag = new_soup.new_tag('html')
        html_tag.append(self._merge_heads(soup1.head, soup2.head))
        body = new_soup.new_tag('body')
        combined_components = comp1 + comp2
        for comp in combined_components:
            if not comp.name:
                continue
            clone = copy.copy(comp)
            for attr, val in comp.attrs.items():
                if attr.lower().startswith('on'):
                    clone[attr] = val
            clone['data-det-step'] = self.step
            body.append(clone)
            if random.random() < 0.2:
                body.append(self._create_entanglement_script(new_soup))
        donor_tags = [tag for tag, history in self.mutation_history.items() if len(history) > 2]
        for tag in donor_tags:
            sources = soup1.find_all(tag) + soup2.find_all(tag)
            if sources:
                for el in random.sample(sources, k=min(3, len(sources))):
                    body.append(copy.copy(el))
        html_tag.append(body)
        new_soup.append(html_tag)
        return str(new_soup)

    def _merge_heads(self, head1: Optional[BeautifulSoup], head2: Optional[BeautifulSoup]) -> BeautifulSoup:
        soup = BeautifulSoup('', 'html.parser')
        new_head = soup.new_tag('head')
        for source_head in [head1, head2]:
            if source_head:
                for meta in source_head.find_all('meta', {'http-equiv': 'Content-Security-Policy'}):
                    meta.decompose()
        if head1 and head1.title and head1.title.string:
            t = soup.new_tag('title')
            t.string = head1.title.string
            new_head.append(t)
        if head2 and head2.title and head2.title.string:
            t = soup.new_tag('title')
            t.string = head2.title.string
            new_head.append(t)
        if head1 and head1.style and head1.style.string:
            st = soup.new_tag('style')
            st.string = head1.style.string
            new_head.append(st)
        if head2 and head2.style and head2.style.string:
            st = soup.new_tag('style')
            st.string = head2.style.string
            new_head.append(st)
        meta = soup.new_tag('meta', attrs={
            'http-equiv': 'Content-Security-Policy',
            'content': "default-src 'self' 'unsafe-inline'"
        })
        new_head.append(meta)
        return new_head

    def _create_entanglement_script(self, soup: BeautifulSoup) -> Optional[BeautifulSoup]:
        try:
            s = soup.new_tag('script')
            s.string = f"try {{ document.currentScript.parentNode.setAttribute('data-adv-entangle-{self.step}', performance.now().toString()); }} catch(e) {{}}"
            return s
        except Exception as e:
            logger.warning(f"Script creation failed: {str(e)}")
        return None

    def _apply_advanced_mutation(self, html: str) -> str:
        soup = BeautifulSoup(html, 'html.parser')
        engine = AdvancedAnomalyEngine(self.step, self.coverage_feedback)
        engine.mutate(soup)
        return str(soup)

    def _track_mutation_impact(self, soup: BeautifulSoup) -> None:
        for el in soup.find_all(True):
            if 'data-mut-step' in el.attrs:
                self.mutation_history[el.name].append((self.step, el.attrs))

    def _calculate_complexity(self, html: str) -> float:
        soup = BeautifulSoup(html, 'html.parser')
        num_elements = len(soup.find_all())
        diversity = len(set(t.name for t in soup.find_all()))
        num_attrs = sum(len(t.attrs) for t in soup.find_all())
        max_depth = max((len(list(t.parents)) for t in soup.find_all()), default=0)
        return num_elements * 0.4 + diversity * 0.3 + num_attrs * 0.2 + max_depth * 0.1

    def _prevent_complexity_regression(self, soup: BeautifulSoup) -> bool:
        prev_complexity = self._calculate_complexity(self.chain[-1])
        new_complexity = self._calculate_complexity(str(soup))
        if new_complexity < (prev_complexity * 0.8):
            logger.warning("Complexity regression detected, reinforcing mutations")
            self._apply_aggressive_mutations(soup)
            return False
        return True

    def _apply_aggressive_mutations(self, soup: BeautifulSoup) -> None:
        engine = AdvancedAnomalyEngine(self.step, self.coverage_feedback)
        engine.mutate(soup)

    # --- New: Targeted Mutations Based on Feedback ---
    def _apply_targeted_mutations(self, soup: BeautifulSoup) -> None:
        """Apply mutations targeting areas that previously showed interesting behavior."""
        if not self.previous_coverage:
            return
        high_coverage_elements = set()
        if self.previous_coverage.get("files"):
            for file_data in self.previous_coverage["files"].values():
                elements = file_data.get("coveredElements", [])
                if elements:
                    high_coverage_elements.update(elements[:10])
        for element_name in high_coverage_elements:
            for el in soup.find_all(element_name):
                el['data-high-coverage'] = f"round-{self.round_num}"
                if random.random() < 0.3 * self.entropy_factor:
                    event_type = random.choice(['click', 'mouseover', 'focus', 'input'])
                    complex_handler = self._generate_complex_handler()
                    el[f"on{event_type}"] = complex_handler
                if random.random() < 0.2 * self.entropy_factor:
                    depth = min(3, self.round_num)
                    self._add_nested_elements(el, depth)
                    
    def _generate_complex_handler(self) -> str:
        """Generate increasingly complex event handlers in later rounds."""
        base_handlers = [
            "try { this.style.display = 'none'; } catch(e) { console.error(e); }",
            "try { document.body.appendChild(document.createElement('div')); } catch(e) { }",
            "try { setTimeout(() => { this.click(); }, 100); } catch(e) { }"
        ]
        if self.round_num > 2:
            complex_handlers = [
                f"try {{ for(let i=0; i<{10*self.round_num}; i++) {{ let x = document.createElement('span'); x.textContent = i; this.appendChild(x); }} }} catch(e) {{ }}",
                f"try {{ let data = new Uint8Array({1000*self.round_num}); for(let i=0; i<data.length; i++) {{ data[i] = i % 256; }}; console.log(data.length); }} catch(e) {{ }}",
                f"try {{ let s = ''; for(let i=0; i<{100*self.round_num}; i++) {{ s += 'a'; }}; this.setAttribute('data-long', s); }} catch(e) {{ }}"
            ]
            base_handlers.extend(complex_handlers)
        return random.choice(base_handlers)
        
    def _add_nested_elements(self, parent_element, depth: int) -> None:
        """Add nested elements with increasing depth based on round number."""
        if depth <= 0:
            return
        soup = parent_element.find_parent()
        if not soup:
            return
        tag_name = random.choice(['div', 'span', 'p', 'section', 'article'])
        new_element = soup.new_tag(tag_name)
        new_element['data-depth'] = str(depth)
        new_element['data-round'] = str(self.round_num)
        new_element.string = f"Nested element at depth {depth}, round {self.round_num}"
        parent_element.append(new_element)
        self._add_nested_elements(new_element, depth - 1)

###############################################################################
# Resource-Aware Mutator extending FractalMutator
###############################################################################
class ResourceAwareMutator(FractalMutator):
    def __init__(self, seed1_content: str, seed2_content: str, coverage_feedback: Optional[Dict[str, Any]] = None):
        super().__init__(seed1_content, seed2_content, coverage_feedback)
        self.dom_size_history = []

    def generate_next(self) -> str:
        if self._memory_exceeded():
            self._emergency_cleanup()
        self._track_dom_size()
        with self._resource_guard():
            result = super().generate_next()
        soup = BeautifulSoup(result, 'html.parser')
        self._validate_and_sanitize(soup)
        self._sanitize_network_requests(soup)
        self._ensure_triggerfuzz_definition(soup)
        return str(soup)

    def _track_dom_size(self):
        if self.chain:
            self.dom_size_history.append(len(self.chain[-1]))

    def _memory_exceeded(self) -> bool:
        snapshot = tracemalloc.take_snapshot()
        current_memory = sum(stat.size for stat in snapshot.statistics('filename')) / 1024**2
        return current_memory > 512

    def _emergency_cleanup(self):
        logger.warning("Memory threshold exceeded - performing emergency cleanup")
        del self.chain[:-2]
        gc.collect()

    @contextlib.contextmanager
    def _resource_guard(self):
        try:
            yield
        finally:
            gc.collect()

    def _apply_advanced_mutation(self, html: str) -> str:
        if len(html) > 1e6:
            logger.warning("Oversized HTML detected - applying light mutations")
            return self._light_mutation(html)
        return super()._apply_advanced_mutation(html)

    def _light_mutation(self, html: str) -> str:
        soup = BeautifulSoup(html, 'html.parser')
        tags = soup.find_all(True)
        if tags:
            sample_tags = random.sample(tags, min(100, len(tags)))
            for el in sample_tags[:50]:
                if random.random() < 0.3:
                    el.decompose()
                else:
                    if el.string:
                        el.string = bitwise_corrupt_safe(el.string, 0.5)
        return str(soup)

    def _validate_and_sanitize(self, soup: BeautifulSoup) -> None:
        if soup.head:
            for meta in soup.find_all('meta'):
                if meta.parent.name != 'head':
                    meta.extract()
                    soup.head.append(meta)
        if not soup.find('html'):
            new_soup = BeautifulSoup(f"<html>{str(soup)}</html>", 'html.parser')
            soup.clear()
            for tag in new_soup.contents:
                soup.append(tag)

    def _sanitize_network_requests(self, soup: BeautifulSoup):
        for tag in soup.find_all(True):
            for attr in ['src', 'href', 'action']:
                if attr in tag.attrs:
                    if 'nonexistent.example.com' in tag[attr]:
                        tag[attr] = tag[attr].replace(
                            'nonexistent.example.com',
                            random.choice(['example.com', 'localhost'])
                        )

    def _ensure_triggerfuzz_definition(self, soup: BeautifulSoup):
        if not soup.find(string=re.compile(r'\btriggerFuzz\s*\(')):
            script = soup.new_tag('script')
            script.string = "function triggerFuzz() {}"
            if soup.head:
                soup.head.append(script)
            else:
                head = soup.new_tag('head')
                head.append(script)
                if soup.html:
                    soup.html.insert(0, head)
                else:
                    soup.insert(0, head)

###############################################################################
# JavaScript Mutation Enhancements and Final Pipeline Functions
###############################################################################
class JavaScriptMutator:
    def __init__(self):
        self.unique_identifiers = set()
        self.fuzz_library = self._build_fuzz_library()

    def _build_fuzz_library(self):
        return {
            'proto_pollution': [
                "Object.prototype.{name} = {value}",
                "const __proto__ = {{...constructor.prototype}}"
            ],
            'type_confusion': [
                "({}+[])({payload})",
                "({value})[({key})]"
            ],
            'memory_ops': [
                "new ArrayBuffer({size})",
                "new WebAssembly.Memory({{initial: {pages}}})"
            ],
            'async_payloads': [
                "async function* {name}() {{ yield* {payload} }}",
                "Promise.resolve().then(() => {payload})"
            ]
        }

    def mutate_js_ast(self, code: str) -> str:
        try:
            ast = esprima.parseScript(code, {'tolerant': True})
            mutated_ast = mutate_ast(ast, {
                'string_replace': 0.3,
                'operator_swap': 0.2,
                'type_confusion': 0.4,
                'prototype_hijack': 0.1
            })
            return generate_code(mutated_ast)
        except Exception as e:
            logger.error(f"AST mutation failed: {e}")
            return code

    def generate_complex_js(self, template_type: str) -> str:
        template = random.choice(self.fuzz_library[template_type])
        var_name = f"__fuzz_{uuid.uuid4().hex[:8]}"
        substitutions = {
            'name': var_name,
            'value': random.choice(["()=>{}", "document.body", "0xbadc0de"]),
            'payload': self._generate_nested_operation(),
            'size': random.choice([int(1e6), 0xffff, 2**32]),
            'pages': random.randint(100, 1000)
        }
        SAFE_RESOURCES = ['/fuzz-safe', 'https://example.com/fuzz', 'data:text/plain,test']
        substitutions.update({
            'value': random.choice([f"fetch('{random.choice(SAFE_RESOURCES)}')", "document.querySelectorAll('[data-fuzz]')"])
        })
        return template.format(**substitutions).replace('{', '{{').replace('}', '}}')

    def _generate_nested_operation(self, depth=3) -> str:
        if depth == 0:
            return random.choice([
                "document.all", "undefined[0]", "new Proxy({}, {})"
            ])
        ops = [
            f"Object.create({self._generate_nested_operation(depth-1)})",
            f"Array.from({self._generate_nested_operation(depth-1)})",
            f"new Function('return {self._generate_nested_operation(depth-1)}')"
        ]
        return random.choice(ops)

class EnhancedAnomalyEngine(AdvancedAnomalyEngine):
    def __init__(self, step: int, coverage_feedback: Dict[str, Any], coverage_gaps: Dict[str, Any]):
        super().__init__(step, coverage_feedback)
        self.mutator = CoverageAwareMutator(coverage_gaps)
        self.gaps = coverage_gaps

    def mutate(self, soup: BeautifulSoup) -> None:
        self.mutator.adjust_weights(soup)
        target_element = self.mutator.get_target_element(soup)
        if target_element:
            self._targeted_mutations(target_element)
        super().mutate(soup)

    def _targeted_mutations(self, element):
        if self.gaps.get("attributes"):
            new_attr = random.choice(self.gaps["attributes"])
            if new_attr not in element.attrs:
                element[new_attr] = "targeted_attr_" + str(uuid.uuid4())[:8]
        if self.gaps.get("events"):
            new_event = random.choice(self.gaps["events"])
            if new_event not in element.attrs:
                element[new_event] = "targetedEvent()"
        if element.name in self.gaps.get("elements", []):
            clone = copy.copy(element)
            element.insert_after(clone)

class JsEnhancedMutator(ResourceAwareMutator):
    def generate_next(self) -> str:
        result = super().generate_next()
        soup = BeautifulSoup(result, 'html.parser')
        self._optimize_js_payloads(soup)
        self._inject_js_coverage(soup)
        return str(soup)

    def _optimize_js_payloads(self, soup: BeautifulSoup) -> None:
        SAFE_DOMAINS = ['example.com', 'localhost', 'test.fuzz']
        for script in soup.find_all('script'):
            if not script.string:
                continue
            original_content = script.string
            sanitized = re.sub(
                r"['\"](https?://)(?!{}).*?['\"]".format('|'.join(SAFE_DOMAINS)),
                lambda m: f"{m.group(1)}{random.choice(SAFE_DOMAINS)}", 
                original_content
            )
            if any(p in original_content for p in ['<!--', '<!CDATA', '<?']):
                script.string = sanitized
                continue
            try:
                if re.search(r"<\/?[a-z]", sanitized):
                    logger.warning("Script contains HTML tags, wrapping in CDATA")
                    script.string = f"/*<![CDATA[*/{sanitized}/*]]>*/"
                    continue
                parsed = esprima.parseScript(sanitized, {'loc': True})
                script.string = sanitized
            except Exception as e:
                error_line = original_content.split('\n')[e.lineno-1] if hasattr(e, 'lineno') else ''
                logger.warning(f"JS validation error: {str(e)}\nContext: {error_line.strip()}")
                error_msg = f"\n// JS Validation Error: {str(e)}\n"
                script.string = error_msg + sanitized

    def _inject_js_coverage(self, soup: BeautifulSoup) -> None:
        coverage_script = """
        window.__jsCoverage = new Proxy({}, {
            get(t, p) { return t[p] || 0 },
            set(t, p, v) { t[p] = (t[p] || 0) + 1; return true }
        });
        """
        tag = soup.new_tag('script')
        tag.string = coverage_script
        if soup.head:
            soup.head.insert(0, tag)
        else:
            new_head = soup.new_tag('head')
            new_head.append(tag)
            soup.insert(0, new_head)

    def _validate_and_sanitize(self, soup: BeautifulSoup) -> None:
        if soup.head:
            for meta in soup.find_all('meta'):
                if meta.parent.name != 'head':
                    meta.extract()
                    soup.head.append(meta)
        try:
            soup.html.unwrap()
        except AttributeError:
            pass
        if not soup.find('html'):
            new_soup = BeautifulSoup(f"<html>{soup}</html>", 'html.parser')
            soup.clear()
            for tag in new_soup.contents:
                soup.append(tag)

###############################################################################
# Structural Validation & Mutation Pipeline Functions
###############################################################################
def generate_mutation(parent1: str, parent2: str, coverage_data: Dict[str, Any]) -> str:
    coverage_gaps = json.loads(os.getenv("COVERAGE_GAPS", "{}"))
    mutator = JsEnhancedMutator(parent1, parent2, coverage_data)
    mutator.engine = EnhancedAnomalyEngine(mutator.step, coverage_data, coverage_gaps)
    return mutator.generate_next()

###############################################################################
# Main CLI
###############################################################################
def main() -> None:
    # Set a round-specific random seed
    round_seed = get_round_specific_seed()
    random.seed(round_seed)
    logger.info(f"Using round-specific seed for mutation: {round_seed}")
    
    total_mutations = int(sys.argv[1]) if len(sys.argv) > 1 else 1
    out_dir = os.environ.get("MUTATION_OUT_DIR", MUTATION_FOLDER)
    os.makedirs(out_dir, exist_ok=True)

    # Get round number for adaptive mutation strategies
    round_num = int(os.environ.get("MUTATION_ROUND_NUM", "1"))
    
    # Prepare coverage feedback with more detailed information
    coverage_feedback = {
        "recent_memory_crash": bool(os.environ.get("RECENT_MEMORY_CRASH")),
        "recent_dom_crash": bool(os.environ.get("RECENT_DOM_CRASH")),
        "overall_coverage": int(os.environ.get("OVERALL_COVERAGE", "0")),
        "round_number": round_num,
        "unique_crashes": int(os.environ.get("UNIQUE_CRASHES_COUNT", "0"))
    }
    
    # Load previous coverage data if available
    previous_coverage_file = os.environ.get("PREVIOUS_COVERAGE_FILE", "")
    if previous_coverage_file and os.path.exists(previous_coverage_file):
        try:
            with open(previous_coverage_file, "r", encoding="utf-8") as f:
                previous_coverage = json.load(f)
                coverage_feedback["previous_coverage"] = previous_coverage
        except Exception as e:
            logger.error(f"Failed to load previous coverage: {e}")
    
    coverage_data = load_coverage_data()
    use_coverage_guided = any(coverage_data.get(key) for key in
                             ['element_coverage', 'attribute_coverage', 'event_coverage'])

    forcedA, forcedB = get_forced_seeds()
    if forcedA and forcedB:
        logger.info("[ADV-DETERMINISTIC] Using forced seeds => A=%s, B=%s", forcedA, forcedB)
        s1 = load_html_content(forcedA)
        s2 = load_html_content(forcedB)
        if not s1 or not s2:
            logger.error("Failed to load forced seeds => abort.")
            return

        if use_coverage_guided:
            for i in range(total_mutations):
                mutated = generate_mutation(s1, s2, coverage_data)
                file_out = os.path.join(out_dir, f"mutated_{i+1:04d}.html")
                with open(file_out, "w", encoding="utf-8") as wf:
                    wf.write(mutated)
                logger.info("Generated coverage-guided mutation %d => %s", i+1, file_out)
        else:
            mutator = JsEnhancedMutator(s1, s2, coverage_feedback)
            for i in range(total_mutations):
                mutated = mutator.generate_next()
                file_out = os.path.join(out_dir, f"mutated_{i+1:04d}.html")
                with open(file_out, "w", encoding="utf-8") as wf:
                    wf.write(mutated)
                logger.info("Generated advanced deterministic mutation %d => %s", i+1, file_out)
        return

    logger.info("[ADV-DETERMINISTIC] No forced seeds => classification-based approach.")
    cls_data = load_classifications()
    if not cls_data:
        logger.error("No classification data => aborting.")
        return

    complex_seeds = [k for k, v in cls_data.items() if v.get("computed_classification") == "complex"]
    if len(complex_seeds) < 2:
        logger.error("Insufficient complex seeds => abort.")
        return

    from operator import itemgetter
    sorted_complex = sorted(
        [(s, cls_data[s]["features"]["node_count"]) for s in complex_seeds],
        key=itemgetter(1), reverse=True
    )[:2]
    pick1, _ = sorted_complex[0]
    pick2, _ = sorted_complex[1]
    seed_path1 = os.path.join(BASE_DIR, pick1)
    seed_path2 = os.path.join(BASE_DIR, pick2)

    contentA = load_html_content(seed_path1)
    contentB = load_html_content(seed_path2)
    if not contentA or not contentB:
        logger.error("Failed loading selected complex seeds => abort.")
        return

    if use_coverage_guided:
        for i in range(total_mutations):
            mutated = generate_mutation(contentA, contentB, coverage_data)
            file_out = os.path.join(out_dir, f"mutated_{i+1:04d}.html")
            with open(file_out, "w", encoding="utf-8") as wf:
                wf.write(mutated)
            logger.info("Generated coverage-guided mutation %d => %s", i+1, file_out)
    else:
        mutator = JsEnhancedMutator(contentA, contentB, coverage_feedback)
        for i in range(total_mutations):
            mutated = mutator.generate_next()
            file_out = os.path.join(out_dir, f"mutated_{i+1:04d}.html")
            with open(file_out, "w", encoding="utf-8") as wf:
                wf.write(mutated)
            logger.info("Generated advanced deterministic mutation %d => %s", i+1, file_out)
    logger.info("test")
    logger.info("test")

if __name__ == "__main__":
    main()