#!/usr/bin/env python3
"""
mutation_pipeline_deterministic.py
----------------------------------
Generates mutated HTML test cases using a deterministic fractal approach.
Now entirely without Esprima.
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
from bs4 import BeautifulSoup, Doctype
# Additional imports for JavaScript mutation enhancements
# import esprima  # Removed!
# from esprima.error_handler import Error as EsprimaError  # Removed!
import jsbeautifier



# Shared config for environment, logging, RNG seeding
from config import (
    BASE_DIR, SEEDS_BASE, CLASSIFICATIONS_JSON, MUTATION_FOLDER,
    init_global_seed, logger as base_logger
)

# --- Round-Specific Seed Function ---
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
MAX_DOM_SIZE = 1200  # Adjust this value as needed

###############################################################################
# Helper Functions
###############################################################################
def get_dom_size(soup: BeautifulSoup) -> int:
    """Calculates the number of elements in a BeautifulSoup object."""
    return len(soup.find_all(True))

def create_script_tag(soup: BeautifulSoup, js_code: str, async_attr=False) -> BeautifulSoup:
    """Creates a <script> tag, escaping HTML outside JS strings and optionally adding the async attribute."""
    script = soup.new_tag('script')

    # 1. Escape HTML tags *outside* of JavaScript strings
    js_code = re.sub(r'(?<!")<[^>]*?>(?!")', '', js_code)

    try:
        # 2. Beautify (for basic validation, but not essential for fuzzing)
        # You could remove this for pure fuzzing if you want maximum anomaly generation
        jsbeautifier.beautify(js_code) 

        script.string = js_code

        # 3. Conditionally set the async attribute (important for scripts in <body>)
        if async_attr:
            script.attrs["async"] = ""

    except jsbeautifier.JSBeautifyError as e:
        logger.error(f"JS Validation Error (jsbeautifier): {e}")
        script.string = f"// JS Validation Error (jsbeautifier): {e}\n" + js_code  # Keep the original code with a comment

    except Exception as e:
        logger.exception(f"Unexpected error during JS validation: {e}")
        script.string = f"// Unexpected JS Error: {e}\n" + js_code  # Keep the original code with a comment

    return script

###############################################################################
# Complexity Validation & Structural Sanitization Parameters
###############################################################################
COMPLEXITY_FACTORS = {
    'element_diversity': 0.3,
    'interaction_density': 0.1,
    'nesting_depth': 2
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
    """Inserts random HTML or script tags into the DOM."""
    if not soup.body:  # Ensure a <body> exists
        return

    for _ in range(int(1 + (3 * intensity))):
        rand_tag = random.choice(HTML_TAGS)
        new_element = soup.new_tag('mutation-marker')  # Create the mutation marker *outside* the conditional

        if rand_tag == "<script>":
            if soup.find_parent('script'):  # Avoid nested scripts which always give errors
                continue  # Skip this iteration if already within a <script> tag

            js_code = f"console.log('Mutation: {rand_tag}');" # fuzz this even more if needed
            script = create_script_tag(soup, js_code, async_attr=True)  # Async for scripts in <body>
            new_element.append(script)
            soup.body.insert(random.randint(0, len(soup.body.contents)), new_element)


        else:  # For non-<script> tags

            if random.random() < 0.5: # regular tag injection
                new_element.string = f"Active {rand_tag} insertion"
                soup.body.insert(random.randint(0, len(soup.body.contents)), new_element)


            else: # js code injection inside of new tag

                js_code = f"console.log('Mutation: {rand_tag}');"
                script = create_script_tag(soup, js_code)  # No async needed if inserted elsewhere

                if soup.head:  # Try to insert into <head> if it exists
                    soup.head.append(script)
                else: # fallback to insertion to body
                    new_element.append(script)
                    soup.body.insert(random.randint(0, len(soup.body.contents)), new_element)

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
        self.gaps = coverage_gaps or {}  # Handle empty gaps
        self.target_element_weights = defaultdict(lambda: 0.1)
        for element in self.gaps.get("elements", []):
            self.target_element_weights[element] = 0.4

        self.target_attribute_weights = defaultdict(lambda: 0.1)
        for attribute in self.gaps.get("attributes", []):
            self.target_attribute_weights[attribute] = 0.3

        self.target_event_weights = defaultdict(lambda: 0.1)
        for event in self.gaps.get("events", []):
            self.target_event_weights[event] = 0.2


    def adjust_weights(self, soup: BeautifulSoup) -> None:
        """Dynamically adjust weights based on current DOM."""
        present_elements = set(tag.name for tag in soup.find_all(True))
        for element in list(self.target_element_weights):
            if element not in present_elements:
                self.target_element_weights[element] *= 0.9 # Reduce weight for absent elements


    def get_target_element(self, soup: BeautifulSoup) -> Optional[BeautifulSoup]:
        """Choose a mutation target element based on weights and presence in DOM."""
        eligible_elements = []
        for element in soup.find_all(True):
            weight = self.target_element_weights.get(element.name, 0.1) # Gets the weight for the given element
            for attr in element.attrs:
                weight += self.target_attribute_weights.get(attr, 0)  # Weights from attributes

            for event_attr in element.attrs:
                if event_attr.startswith('on'):
                   event_name = event_attr[2:] # gets event name from the attribute (onclick => click)
                   weight += self.target_event_weights.get(event_name, 0) # Weight the event

            if weight > 0:  # consider element if the sum of weights is positive.
                eligible_elements.append((element, weight))

        if not eligible_elements:
            return None  # No suitable target found

        total_weight = sum(w for _, w in eligible_elements)
        if total_weight == 0: # if no gaps exists default to random
            return random.choice(soup.find_all(True)) if soup.find_all(True) else None
        chosen_element, _ = random.choices(eligible_elements, weights=[w for _, w in eligible_elements], k=1)[0]
        return chosen_element



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
        self.intensity = max(min(base_intensity, 0.3), 0.1)
        self.coverage_feedback = coverage_feedback

    def mutate(self, soup: BeautifulSoup) -> None:
        self._base_mutations(soup)
        self._interactive_mutations(soup)
        self._coverage_guided_mutations(soup)
        self._entangle_dom(soup)
        self._propagate_mutations(soup)
        self._amplify_coverage_gaps(soup)
        self._inject_meaningful_comments(soup)
        self._event_entanglement(soup)

    def _base_mutations(self, soup: BeautifulSoup, intensity_reduction_factor: float = 1.0) -> None:
        insert_grammar_snippet(soup, self.intensity * 0.2 * intensity_reduction_factor) # Apply reduction to snippet insertion intensity
        tags = soup.find_all(True)
        if tags:
            subset_size = max(1, int(len(tags) * 0.1 * self.intensity * intensity_reduction_factor)) # Apply reduction to subset size
            chosen = random.sample(tags, min(subset_size, len(tags)))
            for el in chosen:
                for attr, val in list(el.attrs.items()):
                    if isinstance(val, str):
                        el.attrs[attr] = bitwise_corrupt_string(val, self.intensity * intensity_reduction_factor) # Apply reduction to bitwise corruption intensity

    def _interactive_mutations(self, soup: BeautifulSoup, intensity_reduction_factor: float = 1.0) -> None:
        tags = soup.find_all(True)
        for el in tags:
            if random.random() < 0.02 * self.intensity * intensity_reduction_factor: # Apply reduction to probability
                ev = random.choice(['click', 'mouseover', 'load'])
                el[ev] = f"alert('Interactive mutation at step {self.step}');"

  

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

    def _entangle_dom(self, soup: BeautifulSoup, intensity_reduction_factor: float = 1.0) -> None:
        if random.random() > 0.5 * intensity_reduction_factor: # Reduced probability of entanglement
            return # Skip entanglement with reduced probability

        all_tags = soup.find_all(True)
        if not all_tags:
            return
        sample_count = int(len(all_tags) * 0.1 * intensity_reduction_factor) # Reduce sample count based on intensity
        for el in random.sample(all_tags, k=sample_count):
            clone = copy.copy(el)
            clone['data-entangled'] = str(uuid.uuid4())
            if random.random() < 0.3 * intensity_reduction_factor: # Reduced probability of insert_after
                el.insert_after(clone)
            if random.random() < 0.2 * intensity_reduction_factor: # Reduced probability of wrap
                wrapper = soup.new_tag("entanglement-wrapper")
                el.wrap(wrapper)

    def _propagate_mutations(self, soup: BeautifulSoup, intensity_reduction_factor: float = 1.0) -> None:
        mutated_elements = soup.find_all(attrs={"data-mut-step": True})
        for el in mutated_elements:
            if random.random() < 0.8 * intensity_reduction_factor: # Reduced probability of attribute propagation
                if el.get('data-corrupted-a'):
                    new_attr = f"dep-{hash(el['data-corrupted-a'])}"
                    el[new_attr] = bitwise_corrupt_string(el.text, 0.5 * intensity_reduction_factor) # Reduced corruption intensity
            if random.random() < 0.5 * intensity_reduction_factor: # Reduced probability of fractal child injection
                if 'data-fractal-id' in el.attrs:
                    fractal_child = soup.new_tag("fractal-node")
                    fractal_child.string = el['data-fractal-id'][:4]
                    el.append(fractal_child)

    def _amplify_coverage_gaps(self, soup: BeautifulSoup, intensity_reduction_factor: float = 1.0) -> None: # Modified function signature
        undercovered = self._get_undercovered_elements(soup)
        for tag_name in undercovered:
            for el in soup.find_all(tag_name):
                for _ in range(max(1, int(2 ** self.step * intensity_reduction_factor))): # Reduced loop iterations based on intensity
                    self._inject_nested_anomaly(soup, el)

    def _get_undercovered_elements(self, soup: BeautifulSoup) -> List[str]:
        tag_counts = {}
        for el in soup.find_all(True):
            tag_counts[el.name] = tag_counts.get(el.name, 0) + 1
        return [tag for tag, count in tag_counts.items() if count < 5]

    def _inject_nested_anomaly(self, soup: BeautifulSoup, element) -> None:
        anomaly = soup.new_tag("coverage-gap-fill")
        anomaly['data-depth'] = str(len(list(element.parents)))
        if len(list(element.parents)) < 8: # Add this if condition to limit nesting depth
            anomaly.append(self._create_recursive_script(soup))
        element.append(anomaly)

    def _create_recursive_script(self, soup: BeautifulSoup) -> BeautifulSoup:
        # Use create_script_tag
        return create_script_tag(soup, f"console.log('recursive script at step {self.step}');")

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
        if random.random() < 0.1:
            # Use create_script_tag here
            script = create_script_tag(soup, """
            try {
                window.triggerFuzz = () => {
                    console.log('Safe triggerFuzz execution');
                    document.dispatchEvent(new Event('fuzz'));
                };
            } catch(e) {
                console.error('Fuzz setup failed:', e);
            }
            """, async_attr=True)
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
        current_dom_size = get_dom_size(soup) # Add this line
        intensity_reduction_factor = 1.0 # Add this line

        if current_dom_size > MAX_DOM_SIZE * 0.8: # Add this if block
            intensity_reduction_factor = 0.5
            logger.warning(f"DOM size approaching limit ({current_dom_size} nodes), reducing mutation intensity.")
        if current_dom_size > MAX_DOM_SIZE: # Add this if block
            logger.warning(f"DOM size limit exceeded ({current_dom_size} nodes), skipping size-increasing mutations.")
            self._light_mutation(soup.prettify()) # Call light_mutation with prettified HTML
            return


        self._base_mutations(soup, intensity_reduction_factor) # Modify this line to pass intensity_reduction_factor
        self._interactive_mutations(soup, intensity_reduction_factor) # Modify this line
        self._coverage_guided_mutations(soup, intensity_reduction_factor) # Modify this line

        if current_dom_size <= MAX_DOM_SIZE * 0.9: # Add this if block for conditional entanglement
            self._entangle_dom(soup, intensity_reduction_factor) # Modify this line
            self._propagate_mutations(soup, intensity_reduction_factor) # Modify this line
            self._amplify_coverage_gaps(soup, intensity_reduction_factor) # Modify this line

        self._inject_meaningful_comments(soup)
        self._event_entanglement(soup)

    def _targeted_mutations(self, element: BeautifulSoup) -> None:
        """Apply mutations based on coverage gaps."""
        if element is None:
            return

        # Mutate attributes based on gaps
        missing_attributes = [attr for attr in self.mutator.gaps.get("attributes", []) if attr not in element.attrs]

        if missing_attributes:
            new_attr = random.choice(missing_attributes)
            element[new_attr] = "targeted_value_" + str(uuid.uuid4())[:8]

        # Mutate events based on gaps
        missing_events = [evt for evt in self.mutator.gaps.get("events", []) if f"on{evt}" not in element.attrs]

        if missing_events:
            new_event = random.choice(missing_events)
            element[f"on{new_event}"] = f"targeted_{new_event}_handler()"


        # Duplicate element if it's in the element gaps
        if element.name in self.mutator.gaps.get("elements", []):
            clone = copy.copy(element)
            element.insert_after(clone)

###############################################################################
# Mutation Optimizer
###############################################################################
class MutationOptimizer:
    def __init__(self):
        self.historical_coverage = defaultdict(lambda: defaultdict(int))  # Nested defaultdict

    def update_coverage(self, new_coverage: Dict[str, Any]) -> None:
        for file_path, file_data in new_coverage.get("files", {}).items(): # Access "files" data
            for category, data in file_data.items(): # loop through data categories
                if isinstance(data, dict):
                    for item, count in data.items():
                        self.historical_coverage[category][item] += count

    def _least_covered(self, category: str) -> List[str]: # returns a list
        cat_data = self.historical_coverage.get(category, {})
        if not cat_data:
            return []  # Return empty list if no data

        sorted_items = sorted(cat_data.items(), key=lambda item: item[1])
        least_covered_count = sorted_items[0][1] if sorted_items else 0  # Consider empty case
        return [item for item, count in sorted_items if count == least_covered_count]

    def suggest_mutation_strategy(self) -> Dict[str, Any]:
        least_covered_elements = self._least_covered("element_coverage")
        least_covered_attributes = self._least_covered("attribute_coverage")
        least_covered_events = self._least_covered("event_coverage")

        return {
            "focus_elements": least_covered_elements,
            "focus_attributes": least_covered_attributes,
            "focus_events": least_covered_events,
            "mutation_intensity": self._calculate_intensity()
        }

    def _calculate_intensity(self) -> float:
        element_coverage = self.historical_coverage.get("element_coverage", {})
        overall_coverage = sum(element_coverage.values())  # Use element coverage for overall score
        # Adjust thresholds and scaling as needed
        if overall_coverage < 100:       return 1.0  # High intensity for very low coverage
        elif overall_coverage < 500:     return 0.8
        elif overall_coverage < 1000:    return 0.5
        else:                           return 0.2  # Low intensity for high coverage


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
        self.round_num = int(os.environ.get("MUTATION_ROUND_NUM", "1"))
        self.unique_crashes = int(os.environ.get("UNIQUE_CRASHES_COUNT", "0"))
        self.previous_coverage_file = os.environ.get("PREVIOUS_COVERAGE_FILE", "")
        self.previous_coverage = {}
        if self.previous_coverage_file and os.path.exists(self.previous_coverage_file):
            try:
                with open(self.previous_coverage_file, "r", encoding="utf-8") as f:
                    self.previous_coverage = json.load(f)
            except Exception as e:
                logger.error(f"Failed to load previous coverage: {e}")

        self.mutation_intensity = min(0.2 + (self.round_num * 0.1), 0.8)
        if self.unique_crashes > 0:
            self.mutation_intensity += min(self.unique_crashes * 0.05, 0.2)
        self.entropy_factor = 1.0 + (self.round_num * 0.2)
        logger.info(f"Initialized FractalMutator with round {self.round_num}, "
                    f"intensity {self.mutation_intensity:.2f}, "
                    f"entropy {self.entropy_factor:.2f}")
        self.optimizer = MutationOptimizer() # Initialize the optimizer here


    def generate_next(self) -> str:
        random.seed(get_round_specific_seed() + self.step * 100)

        parent1 = self.chain[-2]
        parent2 = self.chain[-1]
        crossed_html = self._fractal_crossover(parent1, parent2)
        mutated_html = self._apply_advanced_mutation(crossed_html)
        soup = BeautifulSoup(mutated_html, 'html.parser')

        if soup.head:
            meta = soup.new_tag('meta')
            meta['name'] = 'mutation-round'
            meta['content'] = str(self.round_num)
            soup.head.append(meta)

        self._track_mutation_impact(soup)

        if self.round_num > 1:

            # Update optimizer and get suggested strategy
            self.optimizer.update_coverage(self.coverage_feedback.get("previous_coverage", {}))
            strategy = self.optimizer.suggest_mutation_strategy()

            # Apply targeted mutations based on strategy
            mutated_html = self._apply_targeted_mutations(soup, strategy)


        if not self._prevent_complexity_regression(soup):
            logger.warning("Complexity regression detected, reinforcing mutations.")

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
                # Use create_script_tag
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
            # Use create_script_tag
            return create_script_tag(soup, f"try {{ document.currentScript.parentNode.setAttribute('data-adv-entangle-{self.step}', performance.now().toString()); }} catch(e) {{}}")
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
        if new_complexity < (prev_complexity * 0.7):
            logger.warning("Complexity regression detected, reinforcing mutations")
            self._apply_aggressive_mutations(soup)
            return False
        return True

    def _apply_aggressive_mutations(self, soup: BeautifulSoup) -> None:
        engine = AdvancedAnomalyEngine(self.step, self.coverage_feedback)
        engine.mutate(soup)

    def _apply_targeted_mutations(self, soup: BeautifulSoup, strategy: Dict[str, Any]) -> str:
        intensity = strategy.get("mutation_intensity", 0.5)  # Moderate default intensity
        for element in soup.find_all(True):
            if element.name in strategy.get("focus_elements", []):
                self._mutate_element(element, intensity * 1.5)  # Increased intensity for focus elements
            elif any(attr in strategy.get("focus_attributes", []) for attr in element.attrs):
                self._mutate_attributes(element, intensity * 1.2) # Higher intensity for focused attributes
            elif any(f"on{event}" in element.attrs for event in strategy.get('focus_events', [])):  # Target events
                self._mutate_events(element, intensity)
            else:
                self._mutate_element(element, intensity) # Normal intensity for other elements

        return str(soup)



    def _mutate_element(self, element, intensity):
        # Example mutation: add a new attribute (adapt as needed)
        if random.random() < intensity:
            element['data-mutated'] = 'true'

    def _mutate_attributes(self, element, intensity):
        # Example mutation: corrupt attributes (adapt as needed)
        for attr in element.attrs:
             if random.random() < intensity:
                element[attr] = bitwise_corrupt_safe(element[attr], intensity)  # Example

    def _mutate_events(self, element, intensity):
         # Example: Modify existing event handlers or add new ones.
        for attr in element.attrs:
            if attr.startswith('on') and random.random() < intensity:
                element[attr] = "alert('Mutated Event');"  # Example mutation


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
                if random.random() < 0.5:
                    el.decompose()
                else:
                    if el.string:
                        el.string = bitwise_corrupt_safe(el.string, 0.3)
        return str(soup)

    def _validate_and_sanitize(self, soup: BeautifulSoup) -> None:
        if soup.head:
            for meta in soup.find_all('meta'):
                if meta.parent.name != 'head':
                    meta.extract()
                    soup.head.append(meta)
        if not soup.find('html'):
            new_soup = BeautifulSoup(f"<html>{soup}</html>", 'html.parser')
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
            # Use create_script_tag
            script = create_script_tag(soup,"function triggerFuzz() {}")
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
class JavaScriptMutator: # Removed esprima dependency
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
        # No more AST parsing!  We rely on jsbeautifier.
        try:
            # Attempt to beautify.  If it fails, it's likely invalid JS.
            beautified_code = jsbeautifier.beautify(code)

            # Simple string mutation (still applied, but after validation)
            if random.random() < 0.1:
                beautified_code += "//_fuzzed" # Simple string mutation

            return beautified_code

        except jsbeautifier.JSBeautifyError as e:
            logger.error(f"JavaScript mutation and beautification failed: {e}")
            return f"// JS Mutation and Beautification Error: {e}\n" + code
        except Exception as e:
            logger.exception(f"Unexpected error during JS mutation: {e}")
            return f"//Unexpected JS error: {e}" + code


    def generate_complex_js(self, template_type: str) -> str:
        template = random.choice(self.fuzz_library[template_type])
        var_name = f"__fuzz_{uuid.uuid4().hex[:8]}"
        substitutions = {
            'name': var_name,
            'value': random.choice(["()=>{}", "document.body", "0xbadc0de"]),
            'payload': self._generate_nested_operation(),  # Keep this as is
            'size': random.choice([int(1e4), 0xffff, 2**16]),
            'pages': random.randint(10, 100)
        }
        SAFE_RESOURCES = ['/fuzz-safe', 'https://example.com/fuzz', 'data:text/plain,test']
        substitutions.update({
            'value': random.choice([f"fetch('{random.choice(SAFE_RESOURCES)}')", "document.querySelectorAll('[data-fuzz]')"])
        })
        return template.format(**substitutions).replace('{', '{{').replace('}', '}}')

    def _generate_nested_operation(self, depth=1) -> str: #This function stays the same as the logic isn't esprima dependent
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

class JsEnhancedMutator(ResourceAwareMutator):
    def generate_next(self) -> str:
        result = super().generate_next()
        soup = BeautifulSoup(result, 'html.parser')
        self._optimize_js_payloads(soup)
        self._inject_js_coverage(soup)
        return str(soup)

    def _optimize_js_payloads(self, soup: BeautifulSoup) -> None:
        """Optimizes JS payloads for better fuzzing results."""
        SAFE_DOMAINS = ['example.com', 'localhost', 'test.fuzz']  # Safe domains for URL replacement

        for script in soup.find_all('script'):
            if script.string:
                js_code = str(script.string)

                # 1. Sanitize URLs (replace with safe domains)
                js_code = re.sub(r'https?://(?!' + '|'.join(SAFE_DOMAINS) + r')\S+',
                                lambda m: f'"{random.choice(SAFE_DOMAINS)}"', js_code)


                # Remove comments, as these might contain HTML and create issues when placed elsewhere
                js_code = re.sub(r'//.*?\n|/\*.*?\*/', '', js_code, flags=re.DOTALL)



                script.string = js_code  # No beautifying
    def _inject_js_coverage(self, soup: BeautifulSoup) -> None:
        """Injects JavaScript code for coverage tracking."""
        coverage_script = """
        window.__jsCoverage = new Proxy({}, {
            get(t, p) { return t[p] || 0 },
            set(t, p, v) { t[p] = (t[p] || 0) + 1; return true }
        });
        """

        script_tag = create_script_tag(soup, coverage_script, async_attr=True)

        if soup.head:
            soup.head.append(script_tag)
        elif soup.html: # Add head if it doesn't exist but html tag does
            head = soup.new_tag('head')
            head.append(script_tag)
            soup.html.insert(0, head)
        else:  # Fallback: insert directly into soup if no <html> or <head>
            soup.insert(0, script_tag)

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
    #Initialize mutator for the anomaly engine
    mutator.engine.mutator = CoverageAwareMutator(coverage_gaps) #Initialize the mutator
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
                    