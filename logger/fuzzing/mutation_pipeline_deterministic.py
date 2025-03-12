#!/usr/bin/env python3
"""
mutation_pipeline_deterministic.py
----------------------------------
Generates mutated HTML test cases using a deterministic fractal approach enhanced to
prevent loss of complexity over mutation cycles. Enhancements include:
  " Progressive retention during crossover (coverage-weighted harvesting)
  " Layered mutation stages that compound (base, interactive, semantic,
    coverage-guided, and progressive complexity phases)
  " Structural sanitization and smart comment injection to preserve functionality
  " Robust, exception-aware JavaScript try/catch event handlers that surface errors

Usage:
    python3 mutation_pipeline_deterministic.py [num_mutations]

Environment Variables:
    MUTATION_SEED_A, MUTATION_SEED_B  : Force specific seeds if valid
    MUTATION_OUT_DIR                  : Directory to store mutated HTML
    RECENT_MEMORY_CRASH, RECENT_DOM_CRASH, OVERALL_COVERAGE
    COVERAGE_DATA_JSON                : JSON file with coverage data
"""

import os
import sys
import json
import copy
import random
import logging
import time
import uuid
from collections import defaultdict
from typing import Any, Dict, List, Optional, Tuple

from bs4 import BeautifulSoup, Doctype

# Shared config for environment, logging, RNG seeding
from config import (
    BASE_DIR, SEEDS_BASE, CLASSIFICATIONS_JSON, MUTATION_FOLDER,
    init_global_seed, logger as base_logger
)

###############################################################################
# Logging & RNG Setup
###############################################################################
logger = logging.getLogger("mutation-deterministic")
logger.setLevel(base_logger.level)
init_global_seed()

###############################################################################
# Complexity Validation & Structural Sanitization Parameters
###############################################################################
COMPLEXITY_FACTORS = {
    'element_diversity': 0.5,    # Ratio of unique tag types to total tags
    'interaction_density': 0.3,  # Ratio of event attributes per text length
    'nesting_depth': 4           # Average DOM depth
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
    """Ensure essential HTML structure remains functional.
       - Removes duplicate <title> tags.
       - Relocates misplaced <meta> tags into <head>.
       - Fixes malformed CSS in <style> elements.
    """
    # Remove duplicate titles
    titles = soup.find_all('title')
    if len(titles) > 1:
        for title in titles[1:]:
            title.decompose()
    # Relocate meta tags from body to head
    if soup.body and soup.head:
        metas = soup.body.find_all('meta')
        for meta in metas:
            soup.head.append(meta.extract())
    # Fix malformed CSS in style tags
    for style in soup.find_all('style'):
        if style.find(True):  # Contains HTML elements
            style.clear()
            style.string = "/* Corrupted CSS */\n.invalid { color: inherit; }"
    # Ensure html and body exist
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

# Enhanced JS snippets with valid try/catch blocks
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
    arr = bytearray(s, 'utf-8', 'replace')
    flips = max(1, int(len(arr) * 0.05 * intensity))
    for _ in range(flips):
        idx = random.randint(0, len(arr) - 1)
        bit = 1 << random.randint(0, 7)
        arr[idx] ^= bit
    return arr.decode('utf-8', 'replace')

def insert_grammar_snippet(soup: BeautifulSoup, intensity: float) -> None:
    """Insert ACTIVE elements instead of commented ones"""
    if not soup.body:
        return
    for _ in range(int(1 + (3 * intensity))):
        rand_tag = random.choice(HTML_TAGS)
        new_element = soup.new_tag('mutation-marker')
        new_element['data-original-tag'] = rand_tag.strip('<>')
        # Add either visible content or a hidden payload
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
    retention_rate = min(0.2 + (step * 0.15), 0.8)  # Ramp from 20% to 80%
    prioritized = sorted(
        all_elems,
        key=lambda x: len(x.find_all()) * 10 + random.random(),
        reverse=True
    )
    return prioritized[:int(len(prioritized) * retention_rate)]

###############################################################################
# Advanced Anomaly Engine with Layered Mutation Strategy
###############################################################################
class AdvancedAnomalyEngine:
    """
    Layered anomaly engine with ordered complexity stages and progressive complexity phases.
    """
    def __init__(self, step: int, coverage_feedback: Dict[str, Any]) -> None:
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
        # Ordered complexity stages
        self._base_mutations(soup)          # Basic element/attribute changes
        self._interactive_mutations(soup)     # Event/script modifications 
        self._semantic_mutations(soup)        # Structural and context anomalies
        self._coverage_guided_mutations(soup) # Targeted gaps based on coverage
        # Progressive complexity phases
        self._entangle_dom(soup)
        self._propagate_mutations(soup)
        self._amplify_coverage_gaps(soup)
        # Inject smart, harmless comments
        self._inject_meaningful_comments(soup)
        # Replace default event entanglement with robust handlers
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
                # Instead of simple alert, we now use exception-aware event handlers
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
        """Ensure JS syntax remains valid after mutations"""
        template = random.choice(JS_SNIPPETS)
        operations = [
            "document.querySelectorAll('*')",
            "new ArrayBuffer(1e6)",
            "window.mutationCounter++",
            "document.body.appendChild(document.createElement('div'))"
        ]
        return template % random.choice(operations)

    def _event_entanglement(self, soup: BeautifulSoup) -> None:
        """Add robust event listeners using try/catch and error feedback"""
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
        """Add deceptive but harmless comments that mimic common patterns"""
        comment_texts = [
            "<!-- Appears broken in IE -->",
            "<!--[if lt IE 9]> <script>alert('old IE')<![endif]-->",
            "<!-- Google Analytics -->",
            "<!-- Temporary fix -->"
        ]
        # Insert a few comments before random elements
        candidates = soup.find_all(True)
        if candidates:
            for el in random.sample(candidates, min(3, len(candidates))):
                comment = soup.new_string(random.choice(comment_texts))
                el.insert_before(comment)

###############################################################################
# FractalMutator with Stateful Mutation Tracking and Complexity-Aware Crossover
###############################################################################
class FractalMutator:
    def __init__(self, seed1_content: str, seed2_content: str,
                 coverage_feedback: Optional[Dict[str, Any]] = None):
        self.chain: List[str] = [seed1_content, seed2_content]
        self.step = 0
        self.coverage_feedback = coverage_feedback if coverage_feedback else {}
        self.mutation_history = defaultdict(list)

    def generate_next(self) -> str:
        parent1 = self.chain[-2]
        parent2 = self.chain[-1]
        crossed_html = self._fractal_crossover(parent1, parent2)
        mutated_html = self._apply_advanced_mutation(crossed_html)
        soup = BeautifulSoup(mutated_html, 'html.parser')
        self._track_mutation_impact(soup)
        # Anti-regression check
        if not self._prevent_complexity_regression(soup):
            logger.warning("Complexity regression detected  applying aggressive mutations.")
        # Validate overall complexity
        if not validate_complexity(soup):
            logger.warning("Complexity validation failed  enforcing aggressive mutations.")
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
            clone = copy.copy(comp)
            for attr, val in comp.attrs.items():
                if attr.lower().startswith('on'):
                    clone[attr] = val
            clone['data-det-step'] = self.step
            body.append(clone)
            if random.random() < 0.2:
                body.append(self._create_entanglement_script(new_soup))
        # Complexity-aware crossover using mutation history
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
        meta = soup.new_tag('meta')
        meta['http-equiv'] = 'Content-Security-Policy'
        meta['content'] = "default-src 'unsafe-inline' 'self' data: blob: *"
        new_head.append(meta)
        return new_head

    def _create_entanglement_script(self, soup: BeautifulSoup) -> BeautifulSoup:
        s = soup.new_tag('script')
        s.string = f"try {{ document.currentScript.parentNode.setAttribute('data-adv-entangle-{self.step}', performance.now().toString()); }} catch(e) {{}}"
        return s

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
            logger.warning("Complexity regression detected  reinforcing mutations")
            self._apply_aggressive_mutations(soup)
            return False
        return True

    def _apply_aggressive_mutations(self, soup: BeautifulSoup) -> None:
        engine = AdvancedAnomalyEngine(self.step, self.coverage_feedback)
        engine.mutate(soup)

###############################################################################
# Structural Validation & Mutation Pipeline Functions
###############################################################################
def generate_mutation(parent1: str, parent2: str, coverage_data: Dict[str, Any]) -> str:
    mutator = FractalMutator(parent1, parent2, coverage_data)
    mutated = mutator.generate_next()
    soup = BeautifulSoup(mutated, 'html.parser')
    validated = _validate_structure(soup)
    return str(validated)

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
# Main CLI
###############################################################################
def main() -> None:
    total_mutations = int(sys.argv[1]) if len(sys.argv) > 1 else 1
    out_dir = os.environ.get("MUTATION_OUT_DIR", MUTATION_FOLDER)
    os.makedirs(out_dir, exist_ok=True)

    coverage_feedback = {
        "recent_memory_crash": bool(os.environ.get("RECENT_MEMORY_CRASH")),
        "recent_dom_crash": bool(os.environ.get("RECENT_DOM_CRASH")),
        "overall_coverage": int(os.environ.get("OVERALL_COVERAGE", 0))
    }
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
            mutator = FractalMutator(s1, s2, coverage_feedback)
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
        mutator = FractalMutator(contentA, contentB, coverage_feedback)
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