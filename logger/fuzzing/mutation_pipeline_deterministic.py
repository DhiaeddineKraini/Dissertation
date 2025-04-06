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
import jsbeautifier 


# shared config for environment, logging, rng seeding
from config import (
    BASE_DIR, SEEDS_BASE, CLASSIFICATIONS_JSON, MUTATION_FOLDER,
    init_global_seed, logger as base_logger
)

# --- round-specific seed function ---
def get_round_specific_seed():
    """get a seed specific to this round of mutation."""
    # try get seed from environment variable
    round_seed = os.environ.get("MUTATION_ROUND_SEED")
    if round_seed:
        try:
            # convert it to number if it exists
            return int(round_seed)
        except ValueError:
            # if cant convert, just ignore
            pass
    # fallback to using current time if no good env var found
    return int(time.time())

# use round-specific seeding
round_seed = get_round_specific_seed()
random.seed(round_seed) # seed the random generator
logger = logging.getLogger("mutation-deterministic")
logger.setLevel(base_logger.level) # use same log level as base
logger.info(f"Using round-specific seed: {round_seed}") # tell user what seed we use
tracemalloc.start() # start trackin memory usage
MAX_DOM_SIZE = 1200  # adjust this value as needed, max elements allowed in html

###############################################################################
# Helper Functions
###############################################################################
def get_dom_size(soup: BeautifulSoup) -> int:
    """calculates the number of elements in a beautifulsoup object."""
    # just counts all tags it find
    return len(soup.find_all(True))

def create_script_tag(soup: BeautifulSoup, js_code: str, async_attr=False) -> BeautifulSoup:
    """creates a <script> tag, escaping html outside js strings and optionally adding the async attribute."""
    script = soup.new_tag('script') # make new script tag

    # 1. escape html tags *outside* of javascript strings
    # this regex try find html tags that not inside quotes
    js_code = re.sub(r'(?<!")<[^>]*?>(?!")', '', js_code)

    try:
        # 2. beautify (for basic validation, but not essential for fuzzing)
        # you could remove this for pure fuzzing if you want maximum anomaly generation
        # jsbeautifier checks if the js maybe valid, kinda
        jsbeautifier.beautify(js_code)

        # put the js code inside the script tag
        script.string = js_code

        # 3. conditionally set the async attribute (important for scripts in <body>)
        # async means script can run whenever, dont block page load
        if async_attr:
            script.attrs["async"] = ""

    except jsbeautifier.JSBeautifyError as e:
        # if beautifier fail, log error and keep original code but add comment
        logger.error(f"JS Validation Error (jsbeautifier): {e}")
        script.string = f"// JS Validation Error (jsbeautifier): {e}\n" + js_code  # Keep the original code with a comment

    except Exception as e:
        # catch any other error during js stuff
        logger.exception(f"Unexpected error during JS validation: {e}")
        script.string = f"// Unexpected JS Error: {e}\n" + js_code  # Keep the original code with a comment

    return script # give back the script tag we made

###############################################################################
# Complexity Validation & Structural Sanitization Parameters
###############################################################################
# these numbers decide how complex html needs to be
COMPLEXITY_FACTORS = {
    'element_diversity': 0.3,   # how many different types of tags used
    'interaction_density': 0.1, # how many event handlers (like onclick) per character of text
    'nesting_depth': 2          # how deep tags are nested on average
}

def validate_complexity(soup: BeautifulSoup) -> bool:
    """checks if the html soup is complex enough based on factors."""
    tags = [tag.name for tag in soup.find_all(True)] # get all tag names
    # calculate diversity: unique tags / total tags
    diversity = (len(set(tags)) / len(tags)) if tags else 0
    # count elements with 'on...' attributes (event handlers)
    events = len(soup.find_all(lambda t: any(a.startswith('on') for a in t.attrs)))
    text_length = len(soup.get_text()) # total text length
    # calculate interaction density
    interaction_density = events / text_length if text_length else 0
    # calculate average nesting depth
    depths = [len(list(tag.parents)) for tag in soup.find_all(True)]
    avg_depth = sum(depths) / len(depths) if depths else 0
    # check if all factors meet the minimum requirements
    return (diversity >= COMPLEXITY_FACTORS['element_diversity'] and
            interaction_density >= COMPLEXITY_FACTORS['interaction_density'] and
            avg_depth >= COMPLEXITY_FACTORS['nesting_depth'])

def _validate_structure(soup: BeautifulSoup) -> BeautifulSoup:
    """tries fix some common html structure problems."""
    # ensure only one title tag exists
    titles = soup.find_all('title')
    if len(titles) > 1:
        for title in titles[1:]:
            title.decompose() # remove extra titles

    # move meta tags from body to head if found there
    if soup.body and soup.head:
        metas = soup.body.find_all('meta')
        for meta in metas:
            soup.head.append(meta.extract()) # extract and move

    # clear style tags that contain other tags (invalid css)
    for style in soup.find_all('style'):
        if style.find(True): # if style tag has child tags
            style.clear() # empty it
            style.string = "/* Corrupted CSS */\n.invalid { color: inherit; }" # put placeholder comment

    # ensure there's an <html> tag wrapping everything
    if not soup.find('html'):
        soup = BeautifulSoup('<html>' + str(soup) + '</html>', 'html.parser')

    # ensure there's a <body> tag
    if not soup.find('body'):
        if soup.html:
            soup.html.append(soup.new_tag('body')) # add body to existing html tag
        else:
            # if no html tag either, create both
            html_tag = soup.new_tag('html')
            body = soup.new_tag('body')
            html_tag.append(body)
            soup.append(html_tag)
    return soup # return the cleaned up soup

###############################################################################
# Seed, Classification & Coverage Helpers
###############################################################################
def load_html_content(file_path: str) -> Optional[str]:
    """reads html content from a file."""
    try:
        # open file, read it, replace errors just in case
        with open(file_path, "r", encoding="utf-8", errors="replace") as f:
            return f.read()
    except Exception as e:
        # if error happens, log it and return nothing
        logger.error("Error loading HTML from %s => %s", file_path, e)
        return None

def load_classifications() -> Dict[str, Any]:
    """loads seed classification data from json file."""
    # check if the classification file exists
    if not os.path.exists(CLASSIFICATIONS_JSON):
        return {} # return empty dict if not found
    try:
        # open and parse the json file
        with open(CLASSIFICATIONS_JSON, "r", encoding="utf-8") as f:
            return json.load(f)
    except Exception as e:
        # log error if loading/parsing fails
        logger.error("Error loading classification JSON => %s", e)
        return {}

def get_forced_seeds() -> Tuple[Optional[str], Optional[str]]:
    """checks environment variables for specific seeds to use."""
    # get seed paths from env vars
    envA = os.environ.get("MUTATION_SEED_A")
    envB = os.environ.get("MUTATION_SEED_B")
    # check if both vars exist and the files they point to exist
    if envA and envB and os.path.exists(envA) and os.path.exists(envB):
        return envA, envB # return the paths if valid
    return None, None # otherwise return nothing

def load_coverage_data() -> Dict[str, Any]:
    """loads coverage data from json file specified in env var."""
    # get coverage file path from env var
    coverage_file = os.environ.get("COVERAGE_DATA_JSON")
    # check if var exists and file exists
    if coverage_file and os.path.exists(coverage_file):
        try:
            # open and parse json
            with open(coverage_file, "r", encoding="utf-8") as f:
                return json.load(f)
        except Exception as e:
            # log error if fails
            logger.error("Error loading coverage data: %s", e)
    # return default structure if no file or error
    return {
        'element_coverage': {},
        'attribute_coverage': {},
        'event_coverage': {}
    }

###############################################################################
# Grammar-Based & Bitwise Mutation Helpers
###############################################################################
# list of html tags we might randomly insert
HTML_TAGS = [
    "<div>", "<span>", "<script>", "<style>", "<canvas>", "<video>", "<audio>",
    "<iframe>", "<object>", "<ul>", "<li>", "<p>", "<form>", "<input>", "<select>"
]

# javascript code templates for random insertion
JS_SNIPPETS = [
    # snippet 1: try running some code, log success or failure
    """try {
        const res = %s;
        console.debug('Mutation success:', res);
    } catch(e) {
        console.warn('Mutation error:', e);
        document.dispatchEvent(new CustomEvent('mutationFailed'));
    }""",
    # snippet 2: try running code, record time in finally block
    """try {
        %s
    } finally {
        window.lastMutation = performance.now();
    }"""
]

def bitwise_corrupt_string(s: str, intensity: float) -> str:
    """randomly flips bits in a string to corrupt it."""
    if not s: # if string empty, do nothing
        return s
    # dont corrupt things that look like start of script or tag, maybe avoid breakin structure too much
    if re.match(r'^\s*(function|var|let|const|class|try|catch|<script>)', s):
        return s
    # convert string to byte array, replacing unknown chars
    arr = bytearray(s, 'utf-8', 'replace')
    # calculate how many bits to flip based on length and intensity
    flips = max(1, int(len(arr) * 0.05 * intensity))
    for _ in range(flips):
        # pick random byte index
        idx = random.randint(0, len(arr) - 1)
        # pick random bit position (0-7)
        bit = 1 << random.randint(0, 7)
        # flip the bit using xor (^)
        arr[idx] ^= bit
    # convert byte array back to string, replacing errors
    return arr.decode('utf-8', 'replace')

def bitwise_corrupt_safe(s: str, intensity: float) -> str:
    """bitwise corruption but limits string length first."""
    # if string too long, chop it to avoid using too much memory maybe
    if len(s) > 10000:
        s = s[:10000]
    # then call the normal corruption function
    return bitwise_corrupt_string(s, intensity)

def insert_grammar_snippet(soup: BeautifulSoup, intensity: float) -> None:
    """inserts random html or script tags into the dom."""
    if not soup.body:  # ensure a <body> exists, otherwise nowhere to put stuff
        return

    # insert a number of snippets based on intensity
    for _ in range(int(1 + (3 * intensity))):
        rand_tag = random.choice(HTML_TAGS) # pick a random tag from our list
        new_element = soup.new_tag('mutation-marker')  # create the mutation marker *outside* the conditional, helps track maybe

        if rand_tag == "<script>": # special handling for script tags
            # avoid putting script inside another script, browser dont like that
            if soup.find_parent('script'):
                continue  # skip this iteration if already within a <script> tag

            # simple js code to insert
            js_code = f"console.log('Mutation: {rand_tag}');" # fuzz this even more if needed
            # use helper to create script tag safely, add async if in body
            script = create_script_tag(soup, js_code, async_attr=True)
            new_element.append(script) # put the script inside our marker
            # insert the marker (with script inside) randomly into the body
            soup.body.insert(random.randint(0, len(soup.body.contents)), new_element)

        else:  # for non-<script> tags
            # 50/50 chance: either insert the tag marker directly or put js inside it
            if random.random() < 0.5: # regular tag injection
                new_element.string = f"Active {rand_tag} insertion" # just put text in marker
                # insert the marker randomly into body
                soup.body.insert(random.randint(0, len(soup.body.contents)), new_element)

            else: # js code injection inside of new tag
                js_code = f"console.log('Mutation: {rand_tag}');" # simple js code
                # create script tag, dont need async if putting in head maybe
                script = create_script_tag(soup, js_code)

                if soup.head:  # try to insert into <head> if it exists
                    soup.head.append(script)
                else: # fallback to insertion to body if no head
                    new_element.append(script) # put script in marker
                    # insert marker randomly into body
                    soup.body.insert(random.randint(0, len(soup.body.contents)), new_element)

###############################################################################
# Revised Harvest: Progressive Retention with Coverage Weighting
###############################################################################
def harvest(s: BeautifulSoup, step: int) -> List[BeautifulSoup]:
    """selects elements from a soup object to keep for next generation."""
    # gets all elements from the soup
    all_elems = s.find_all(True)
    # calculate how many elements to keep, increases with step number but max 80%
    retention_rate = min(0.2 + (step * 0.15), 0.8)
    # sort elements, prioritize elements with more children, add randomness
    prioritized = sorted(
        all_elems,
        key=lambda x: len(x.find_all()) * 10 + random.random(), # more children = higher score
        reverse=True # highest score first
    )
    # return the top N elements based on retention rate
    return prioritized[:int(len(prioritized) * retention_rate)]

###############################################################################
# New: Coverage-Aware Mutation Targeting
###############################################################################
class CoverageAwareMutator:
    """helps choose where to mutate based on past coverage data."""
    def __init__(self, coverage_gaps: Dict[str, Any]):
        # store the coverage gaps (elements, attributes, events not seen much)
        self.gaps = coverage_gaps or {}  # handle empty gaps if none provided
        # set initial weights, elements in gaps get higher weight
        self.target_element_weights = defaultdict(lambda: 0.1) # default weight low
        for element in self.gaps.get("elements", []):
            self.target_element_weights[element] = 0.4 # boost weight for gap elements

        # same for attributes
        self.target_attribute_weights = defaultdict(lambda: 0.1)
        for attribute in self.gaps.get("attributes", []):
            self.target_attribute_weights[attribute] = 0.3

        # and for events
        self.target_event_weights = defaultdict(lambda: 0.1)
        for event in self.gaps.get("events", []):
            self.target_event_weights[event] = 0.2

    def adjust_weights(self, soup: BeautifulSoup) -> None:
        """dynamically adjust weights based on current dom."""
        # find elements currently present in the soup
        present_elements = set(tag.name for tag in soup.find_all(True))
        # reduce weight for target elements that are *not* in the current soup
        for element in list(self.target_element_weights):
            if element not in present_elements:
                self.target_element_weights[element] *= 0.9 # reduce weight slightly

    def get_target_element(self, soup: BeautifulSoup) -> Optional[BeautifulSoup]:
        """choose a mutation target element based on weights and presence in dom."""
        eligible_elements = []
        # loop through all elements in the soup
        for element in soup.find_all(True):
            # start with base weight for the element type
            weight = self.target_element_weights.get(element.name, 0.1)
            # add weights for attributes present on the element
            for attr in element.attrs:
                weight += self.target_attribute_weights.get(attr, 0)

            # add weights for event handlers present on the element
            for event_attr in element.attrs:
                if event_attr.startswith('on'):
                   event_name = event_attr[2:] # gets event name from the attribute (onclick => click)
                   weight += self.target_event_weights.get(event_name, 0) # weight the event

            # if total weight is positive, consider this element for mutation
            if weight > 0:
                eligible_elements.append((element, weight))

        if not eligible_elements:
            return None  # no suitable target found

        # calculate total weight of all eligible elements
        total_weight = sum(w for _, w in eligible_elements)
        # if total weight is zero (maybe no gaps?), pick randomly
        if total_weight == 0:
            return random.choice(soup.find_all(True)) if soup.find_all(True) else None
        # choose an element based on its weight (higher weight = more likely)
        chosen_element, _ = random.choices(eligible_elements, weights=[w for _, w in eligible_elements], k=1)[0]
        return chosen_element

###############################################################################
# Advanced Anomaly Engine with Layered Mutation Strategy
###############################################################################
class AdvancedAnomalyEngine:
    """applies multiple layers of mutations to a soup object."""
    def __init__(self, step: int, coverage_feedback: Dict[str, Any]) -> None:
        # some js function definitions used in mutations
        self.fuzz_definitions = [
            "function triggerFuzz() { console.log('Fuzz triggered'); }",
            "window.triggerFuzz = () => { try { document.dispatchEvent(new Event('fuzz')); } catch(e) {} };",
            "const triggerFuzz = () => fetch('/fuzz-safe').catch(() => {});"
        ]
        self.step = min(step, 5) # mutation step number, capped at 5
        # calculate base mutation intensity, increases with step
        base_intensity = 0.1 + (self.step * 0.1)
        # adjust intensity based on feedback from previous rounds
        if coverage_feedback.get("recent_memory_crash", False):
            base_intensity += 0.2 # increase if memory crash happened
        if coverage_feedback.get("recent_dom_crash", False):
            base_intensity += 0.1 # increase if dom manipulation crash happened
        if coverage_feedback.get("overall_coverage", 0) > 500:
            base_intensity -= 0.1 # decrease if coverage is already high
        # clamp intensity between 0.1 and 0.3
        self.intensity = max(min(base_intensity, 0.3), 0.1)
        self.coverage_feedback = coverage_feedback # store feedback

    def mutate(self, soup: BeautifulSoup) -> None:
        """apply all the different mutation types."""
        self._base_mutations(soup)
        self._interactive_mutations(soup)
        self._coverage_guided_mutations(soup)
        self._entangle_dom(soup)
        self._propagate_mutations(soup)
        self._amplify_coverage_gaps(soup)
        self._inject_meaningful_comments(soup)
        self._event_entanglement(soup)

    def _base_mutations(self, soup: BeautifulSoup, intensity_reduction_factor: float = 1.0) -> None:
        """basic mutations: insert snippets and corrupt attributes."""
        # insert some random html/js snippets
        insert_grammar_snippet(soup, self.intensity * 0.2 * intensity_reduction_factor) # apply reduction to snippet insertion intensity
        tags = soup.find_all(True) # get all tags
        if tags:
            # choose a small subset of tags to mutate based on intensity
            subset_size = max(1, int(len(tags) * 0.1 * self.intensity * intensity_reduction_factor)) # apply reduction to subset size
            chosen = random.sample(tags, min(subset_size, len(tags))) # pick random tags from the subset
            # corrupt attributes of chosen tags
            for el in chosen:
                for attr, val in list(el.attrs.items()): # loop through attributes
                    if isinstance(val, str): # only corrupt string attributes
                        # apply bitwise corruption
                        el.attrs[attr] = bitwise_corrupt_string(val, self.intensity * intensity_reduction_factor) # apply reduction to bitwise corruption intensity

    def _interactive_mutations(self, soup: BeautifulSoup, intensity_reduction_factor: float = 1.0) -> None:
        """add simple event handlers to some elements."""
        tags = soup.find_all(True) # get all tags
        for el in tags:
            # randomly decide whether to add handler, based on intensity
            if random.random() < 0.02 * self.intensity * intensity_reduction_factor: # apply reduction to probability
                ev = random.choice(['click', 'mouseover', 'load']) # pick random event type
                # add a simple alert handler
                el[ev] = f"alert('Interactive mutation at step {self.step}');"

    def _coverage_guided_mutations(self, soup: BeautifulSoup, intensity_reduction_factor: float = 1.0) -> None: # ADDED intensity_reduction_factor argument
        """mutations focused on areas where coverage was low."""
        for el in soup.find_all(True):
            # if element type wasn't covered well, add a marker attribute
            if el.name not in self.coverage_feedback.get('attributes', {}): # Check attributes coverage dict 
                el['data-uncovered-attr'] = "fuzz"
            # find events that were rarely triggered
            undercovered_events = [
                evt for evt in ['onblur', 'onerror', 'onabort'] # specific events to check
                if self.coverage_feedback.get('events', {}).get(evt, 0) < 3 # if triggered less than 3 times
            ]
            # if found undercovered events, add a handler for one of them
            if undercovered_events:
                el[random.choice(undercovered_events)] = "triggerFuzz()" # calls our fuzz function
            # if it's a form and forms weren't covered well, add a malformed input
            if el.name == 'form' and 'form-coverage' not in self.coverage_feedback.get('elements', {}):
                el.append(self._create_malformed_input(soup))

    def _create_malformed_input(self, soup: BeautifulSoup) -> BeautifulSoup:
        """creates an input tag with potentially invalid type or name."""
        inp = soup.new_tag('input')
        # randomly choose type, could be invalid
        inp['type'] = random.choice(['invalid', 'text', 'number'])
        # corrupt the name attribute heavily
        inp['name'] = bitwise_corrupt_string("input", 0.8)
        return inp

    def _entangle_dom(self, soup: BeautifulSoup, intensity_reduction_factor: float = 1.0) -> None:
        """makes dom structure more complex by copying and wrapping elements."""
        # reduce chance of running this mutation based on intensity factor
        if random.random() > 0.5 * intensity_reduction_factor: # reduced probability of entanglement
            return # skip entanglement with reduced probability

        all_tags = soup.find_all(True) # get all tags
        if not all_tags: # if no tags, nothing to entangle
            return
        # choose a small sample of tags to entangle, based on intensity factor
        sample_count = int(len(all_tags) * 0.1 * intensity_reduction_factor) # reduce sample count based on intensity
        if sample_count <= 0: return # Ensure sample_count is at least 1 if all_tags is not empty, but here handle 0 case

        # k should be less than or equal to population size
        actual_k = min(sample_count, len(all_tags))
        if actual_k <=0: return # added check if actual_k is 0 or less

        for el in random.sample(all_tags, k=actual_k): # use actual_k
            clone = copy.copy(el) # make a shallow copy of the element
            clone['data-entangled'] = str(uuid.uuid4()) # add marker attribute
            # randomly insert the clone after the original element
            if random.random() < 0.3 * intensity_reduction_factor: # reduced probability of insert_after
                # Check if element has a parent before inserting after
                if el.parent:
                    el.insert_after(clone)
            # randomly wrap the original element in a new wrapper tag
            if random.random() < 0.2 * intensity_reduction_factor: # reduced probability of wrap
                 # Check if element has a parent before wrapping
                if el.parent:
                    wrapper = soup.new_tag("entanglement-wrapper")
                    el.wrap(wrapper)

    def _propagate_mutations(self, soup: BeautifulSoup, intensity_reduction_factor: float = 1.0) -> None:
        """tries to link mutations together across the dom."""
        # find elements marked from previous mutation steps
        mutated_elements = soup.find_all(attrs={"data-mut-step": True})
        for el in mutated_elements:
            # maybe propagate corrupted attribute data to a new attribute
            if random.random() < 0.8 * intensity_reduction_factor: # reduced probability of attribute propagation
                if el.get('data-corrupted-a'): # if a specific marker exists
                    # create a new attribute name based on hash of corrupted data
                    new_attr = f"dep-{hash(el['data-corrupted-a'])}"
                    # set the value of new attribute to corrupted version of element text
                    el[new_attr] = bitwise_corrupt_string(el.text or '', 0.5 * intensity_reduction_factor) # reduced corruption intensity, ensure el.text is string
            # maybe inject a 'fractal' child node referencing an id
            if random.random() < 0.5 * intensity_reduction_factor: # reduced probability of fractal child injection
                if 'data-fractal-id' in el.attrs: # if fractal id marker exists
                    fractal_child = soup.new_tag("fractal-node")
                    # use part of the fractal id as text content
                    fractal_child.string = el['data-fractal-id'][:4]
                    el.append(fractal_child) # add the new child

    def _amplify_coverage_gaps(self, soup: BeautifulSoup, intensity_reduction_factor: float = 1.0) -> None: # modified function signature
        """adds more mutations to elements of types that weren't covered well."""
        # get list of undercovered element types
        undercovered = self._get_undercovered_elements(soup)
        # for each undercovered type
        for tag_name in undercovered:
            # find all elements of that type in the soup
            for el in soup.find_all(tag_name):
                # inject nested anomaly multiple times, number increases with step and intensity factor
                for _ in range(max(1, int(2 ** self.step * intensity_reduction_factor))): # reduced loop iterations based on intensity
                    self._inject_nested_anomaly(soup, el)

    def _get_undercovered_elements(self, soup: BeautifulSoup) -> List[str]:
        """finds element types that appear less than 5 times in the soup."""
        tag_counts = {}
        # count occurrences of each tag type
        for el in soup.find_all(True):
            tag_counts[el.name] = tag_counts.get(el.name, 0) + 1
        # return list of tag names that appeared less than 5 times
        return [tag for tag, count in tag_counts.items() if count < 5]

    def _inject_nested_anomaly(self, soup: BeautifulSoup, element) -> None:
        """adds a special 'coverage-gap-fill' tag with recursive script."""
        anomaly = soup.new_tag("coverage-gap-fill") # create the new tag
        # add data attribute showing how deep it is nested
        anomaly['data-depth'] = str(len(list(element.parents)))
        # limit recursion depth to prevent excessive nesting
        if len(list(element.parents)) < 8: # add this if condition to limit nesting depth
            # add a script tag inside the anomaly tag
            anomaly.append(self._create_recursive_script(soup))
        # append the anomaly tag to the target element
        element.append(anomaly)

    def _create_recursive_script(self, soup: BeautifulSoup) -> BeautifulSoup:
        """creates a simple script tag for the nested anomaly."""
        # use helper function to create script tag safely
        return create_script_tag(soup, f"console.log('recursive script at step {self.step}');")

    def _generate_valid_js(self) -> str:
        """generates a snippet of relatively safe javascript."""
        template = random.choice(JS_SNIPPETS) # pick a template
        # list of safe-ish operations to insert into template
        operations = [
            "document.querySelectorAll('*')", # select all elements
            "new ArrayBuffer(1e6)", # create large array buffer
            "window.mutationCounter++", # increment a counter
            "document.body.appendChild(document.createElement('div'))" # add empty div
        ]
        # format the template with a randomly chosen operation
        return template % random.choice(operations)

    def _event_entanglement(self, soup: BeautifulSoup) -> None:
        # sometimes inject a global triggerFuzz definition first
        if random.random() < 0.1:
            # use helper to create script tag safely, maybe async
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
            # try add script to head, or create head if needed
            if soup.head:
                soup.head.append(script)
            else:
                head = soup.new_tag('head')
                head.append(script)
                if soup.html:
                    soup.html.insert(0, head)
                else:
                    soup.insert(0, head) # fallback if no html tag
        # add complex handlers to some elements
        for el in soup.find_all(True):
            # randomly decide based on intensity
            if random.random() < 0.02 * self.intensity:
                evt = random.choice(['click', 'mouseover', 'load']) # pick event
                # generate a slightly more complex handler code
                handler = f"""function handleEvent() {{
    try {{
        {self._generate_valid_js()}
    }} catch(e) {{
        document.body.classList.add('mutation-error');
    }}
}}"""
                el[evt] = handler # assign handler to the event attribute

    def _inject_meaningful_comments(self, soup: BeautifulSoup) -> None:
        # list of sample comments
        comment_texts = [
            "<!-- Appears broken in IE -->",
            "<!--[if lt IE 9]> <script>alert('old IE')<![endif]-->", # ie conditional comment
            "<!-- Google Analytics -->",
            "<!-- Temporary fix -->"
        ]
        candidates = soup.find_all(True) # get all elements
        if candidates:
            # pick a few random elements
            for el in random.sample(candidates, min(3, len(candidates))):
                # create a comment node
                comment = soup.new_string(random.choice(comment_texts), type='Comment') # Specify Comment type
                # insert the comment before the chosen element
                # Check if element has a parent before inserting
                if el.parent:
                    el.insert_before(comment)

###############################################################################
# Enhanced Anomaly Engine with Coverage-Aware Mutation Targeting and Feedback
###############################################################################
class EnhancedAnomalyEngine(AdvancedAnomalyEngine):
    """extends advanced engine, uses coverageawaremutator for targeting."""
    def __init__(self, step: int, coverage_feedback: Dict[str, Any], coverage_gaps: Dict[str, Any]):
        super().__init__(step, coverage_feedback) # initialize parent class
        # create the coverage-aware mutator helper
        self.mutator = CoverageAwareMutator(coverage_gaps)
        self.gaps = coverage_gaps # store gaps

    def mutate(self, soup: BeautifulSoup) -> None:
        """overrides mutate to add intensity reduction based on dom size."""
        current_dom_size = get_dom_size(soup) # check current number of elements
        intensity_reduction_factor = 1.0 # start with full intensity

        # if dom size getting close to limit, reduce intensity
        if current_dom_size > MAX_DOM_SIZE * 0.8:
            intensity_reduction_factor = 0.5
            logger.warning(f"DOM size approaching limit ({current_dom_size} nodes), reducing mutation intensity.")
        # if dom size exceeds limit, do only light mutations and stop
        if current_dom_size > MAX_DOM_SIZE:
            logger.warning(f"DOM size limit exceeded ({current_dom_size} nodes), skipping size-increasing mutations.")
         
            self._base_mutations(soup, 0.1) # Very low intensity base mutations
            return # stop further mutations

        # apply mutations from parent class, passing the reduction factor
        self._base_mutations(soup, intensity_reduction_factor)
        self._interactive_mutations(soup, intensity_reduction_factor)
        # Note: coverage_guided_mutations didn't have the factor before, added it for consistency
        self._coverage_guided_mutations(soup, intensity_reduction_factor) # Modified this line

        # only do entanglement/propagation if dom size allows
        if current_dom_size <= MAX_DOM_SIZE * 0.9:
            self._entangle_dom(soup, intensity_reduction_factor)
            self._propagate_mutations(soup, intensity_reduction_factor)
            self._amplify_coverage_gaps(soup, intensity_reduction_factor)

        # these mutations are less likely to increase size significantly
        self._inject_meaningful_comments(soup)
        self._event_entanglement(soup)
        # Note: _targeted_mutations is defined below but not called here, maybe called elsewhere?

    def _targeted_mutations(self, element: BeautifulSoup) -> None:
        """apply mutations specifically based on coverage gaps."""
        if element is None: # if no element provided, do nothing
            return

        # mutate attributes based on gaps
        # find attributes from gaps list that are *not* on the element
        missing_attributes = [attr for attr in self.mutator.gaps.get("attributes", []) if attr not in element.attrs]

        if missing_attributes: # if found missing attributes
            new_attr = random.choice(missing_attributes) # pick one
            # add the attribute with a generated value
            element[new_attr] = "targeted_value_" + str(uuid.uuid4())[:8]

        # mutate events based on gaps
        # find events from gaps list whose handler attribute (on...) is *not* on the element
        missing_events = [evt for evt in self.mutator.gaps.get("events", []) if f"on{evt}" not in element.attrs]

        if missing_events: # if found missing events
            new_event = random.choice(missing_events) # pick one
            # add the event handler attribute with generated function name
            element[f"on{new_event}"] = f"targeted_{new_event}_handler()"

        # duplicate element if its tag type is in the element gaps
        if element.name in self.mutator.gaps.get("elements", []):
            clone = copy.copy(element) # make shallow copy
            # Check if element has a parent before inserting
            if element.parent:
                element.insert_after(clone) # insert copy after original

###############################################################################
# Mutation Optimizer
###############################################################################
class MutationOptimizer:
    """analyzes historical coverage to suggest where to focus mutations."""
    def __init__(self):
        # stores coverage counts for elements, attributes, events over time
        self.historical_coverage = defaultdict(lambda: defaultdict(int))  # nested defaultdict makes adding easy

    def update_coverage(self, new_coverage: Dict[str, Any]) -> None:
        """adds coverage data from a new run to the historical data."""
        # iterate through files in the new coverage report
        for file_path, file_data in new_coverage.get("files", {}).items():
            # iterate through coverage categories (like 'element_coverage')
            for category, data in file_data.items():
                if isinstance(data, dict): # if data is a dictionary of items and counts
                    # add counts to the historical data for this category
                    for item, count in data.items():
                        self.historical_coverage[category][item] += count

    def _least_covered(self, category: str) -> List[str]: # returns a list
        """finds items in a category with the lowest coverage count."""
        cat_data = self.historical_coverage.get(category, {}) # get data for the category
        if not cat_data: # if no data for this category yet
            return []  # return empty list

        # sort items by their count (ascending)
        sorted_items = sorted(cat_data.items(), key=lambda item: item[1])
        # find the count of the least covered item
        least_covered_count = sorted_items[0][1] if sorted_items else 0
        # return all items that have this minimum count
        return [item for item, count in sorted_items if count == least_covered_count]

    def suggest_mutation_strategy(self) -> Dict[str, Any]:
        """suggests elements, attributes, and events to focus on."""
        # find least covered items for each category
        least_covered_elements = self._least_covered("element_coverage")
        least_covered_attributes = self._least_covered("attribute_coverage")
        least_covered_events = self._least_covered("event_coverage")

        # return suggestions including focus areas and calculated intensity
        return {
            "focus_elements": least_covered_elements,
            "focus_attributes": least_covered_attributes,
            "focus_events": least_covered_events,
            "mutation_intensity": self._calculate_intensity() # calculate suggested intensity
        }

    def _calculate_intensity(self) -> float:
        """calculates suggested mutation intensity based on overall coverage."""
        # get element coverage counts
        element_coverage = self.historical_coverage.get("element_coverage", {})
        # use sum of element counts as a rough overall coverage score
        overall_coverage = sum(element_coverage.values())
        # adjust thresholds and scaling as needed - higher intensity for low coverage
        if overall_coverage < 100:       return 1.0  # high intensity for very low coverage
        elif overall_coverage < 500:     return 0.8
        elif overall_coverage < 1000:    return 0.5
        else:                           return 0.2  # low intensity for high coverage

###############################################################################
# Fractal Mutator with Feedback and Progressive Complexity
###############################################################################
class FractalMutator:
    """main class combining two html seeds using crossover and mutation."""
    def __init__(self, seed1_content: str, seed2_content: str,
                 coverage_feedback: Optional[Dict[str, Any]] = None):
        # stores the lineage of generated html, starting with the two seeds
        self.chain: List[str] = [seed1_content, seed2_content]
        self.step = 0 # keeps track of generation number
        self.coverage_feedback = coverage_feedback if coverage_feedback else {} # store feedback
        self.mutation_history = defaultdict(list) # track mutations applied to tag types
        # get info from environment about the current fuzzing run
        self.round_num = int(os.environ.get("MUTATION_ROUND_NUM", "1"))
        self.unique_crashes = int(os.environ.get("UNIQUE_CRASHES_COUNT", "0"))
        self.previous_coverage_file = os.environ.get("PREVIOUS_COVERAGE_FILE", "")
        self.previous_coverage = {} # load coverage from previous round if file exists
        if self.previous_coverage_file and os.path.exists(self.previous_coverage_file):
            try:
                with open(self.previous_coverage_file, "r", encoding="utf-8") as f:
                    self.previous_coverage = json.load(f)
            except Exception as e:
                logger.error(f"Failed to load previous coverage: {e}")

        # calculate mutation intensity adaptively
        self.mutation_intensity = min(0.2 + (self.round_num * 0.1), 0.8) # increases with round number
        if self.unique_crashes > 0:
            self.mutation_intensity += min(self.unique_crashes * 0.05, 0.2) # increases if crashes found
        # entropy factor also increases with round number, maybe for more randomness?
        self.entropy_factor = 1.0 + (self.round_num * 0.2)
        logger.info(f"Initialized FractalMutator with round {self.round_num}, "
                    f"intensity {self.mutation_intensity:.2f}, "
                    f"entropy {self.entropy_factor:.2f}")
        self.optimizer = MutationOptimizer() # initialize the optimizer helper

    def generate_next(self) -> str:
        """generates the next html mutation in the sequence."""
        # re-seed random generator for this specific step for determinism
        random.seed(get_round_specific_seed() + self.step * 100)

        # get the two most recent html versions from the chain
        parent1 = self.chain[-2]
        parent2 = self.chain[-1]
        # combine parts of the parents using crossover
        crossed_html = self._fractal_crossover(parent1, parent2)
        # apply advanced mutations to the crossed result
        mutated_html = self._apply_advanced_mutation(crossed_html)
        # parse the mutated html into a soup object for further processing
        soup = BeautifulSoup(mutated_html, 'html.parser')

        # add a meta tag indicating the mutation round number
        if soup.head:
            meta = soup.new_tag('meta')
            meta['name'] = 'mutation-round'
            meta['content'] = str(self.round_num)
            soup.head.append(meta)

        # track which mutations were applied to which tags
        self._track_mutation_impact(soup)

        # after the first round, start using the optimizer
        if self.round_num > 1:
            # feed coverage data to the optimizer
            # uses coverage_feedback which might be empty if first round or loading failed
            self.optimizer.update_coverage(self.coverage_feedback.get("previous_coverage", {}))
            # get mutation strategy suggestion from optimizer
            strategy = self.optimizer.suggest_mutation_strategy()
            # apply mutations targeted based on the strategy
            mutated_html = self._apply_targeted_mutations(soup, strategy)
            # re-parse soup after targeted mutations
            soup = BeautifulSoup(mutated_html, 'html.parser') # Added re-parsing

        # check if complexity dropped too much, apply more mutations if so
        if not self._prevent_complexity_regression(soup):
            logger.warning("Complexity regression detected, reinforcing mutations.")
            # Note: _apply_aggressive_mutations re-runs the standard advanced mutations
            self._apply_aggressive_mutations(soup)

        # final check if complexity meets minimum requirements
        if not validate_complexity(soup):
            logger.warning("Complexity validation failed, enforcing aggressive mutations.")
            self._apply_aggressive_mutations(soup)

        # convert final soup back to string
        final_html = str(soup)
        # add the new html to the chain
        self.chain.append(final_html)
        self.step += 1 # increment step counter
        return final_html # return the generated html

    def _fractal_crossover(self, html1: str, html2: str) -> str:
        """combines elements from two parent html strings."""
        soup1 = BeautifulSoup(html1, 'html.parser') # parse parent 1
        soup2 = BeautifulSoup(html2, 'html.parser') # parse parent 2
        # 'harvest' important elements from each parent based on current step
        comp1 = harvest(soup1, self.step)
        comp2 = harvest(soup2, self.step)
        # create a new empty soup for the child
        new_soup = BeautifulSoup(features='html.parser')
        new_soup.append(Doctype('html')) # add doctype
        html_tag = new_soup.new_tag('html') # create html tag
        # merge the head sections from parents
        html_tag.append(self._merge_heads(soup1.head, soup2.head))
        body = new_soup.new_tag('body') # create body tag
        # combine harvested components from both parents
        combined_components = comp1 + comp2
        for comp in combined_components:
            if not comp.name: # skip if component is not a tag (like text node maybe)
                continue
            clone = copy.copy(comp) # make shallow copy
            # specifically copy event handlers (on...)
            for attr, val in comp.attrs.items():
                if attr.lower().startswith('on'):
                    clone[attr] = val
            # add marker indicating which step this component came from
            clone['data-det-step'] = self.step
            body.append(clone) # add cloned component to body
            # randomly add entanglement scripts sometimes
            if random.random() < 0.2:
                # use helper to create script tag
                script = self._create_entanglement_script(new_soup)
                if script: # append only if script creation succeeded
                    body.append(script)
        # re-inject some elements based on mutation history (tags mutated often)
        donor_tags = [tag for tag, history in self.mutation_history.items() if len(history) > 2]
        for tag in donor_tags:
            # find elements of this tag type in both parents
            sources = soup1.find_all(tag) + soup2.find_all(tag)
            if sources:
                # pick a few random ones and add copies to the new body
                for el in random.sample(sources, k=min(3, len(sources))):
                    body.append(copy.copy(el))
        html_tag.append(body) # add body to html tag
        new_soup.append(html_tag) # add html tag to soup
        return str(new_soup) # return the combined html as string

    def _merge_heads(self, head1: Optional[BeautifulSoup], head2: Optional[BeautifulSoup]) -> BeautifulSoup:
        """combines two head sections, prioritizing elements and adding safe csp."""
        soup = BeautifulSoup('', 'html.parser') # temp soup
        new_head = soup.new_tag('head') # the head section we will return
        # remove existing Content-Security-Policy meta tags from parents first
        for source_head in [head1, head2]:
            if source_head:
                for meta in source_head.find_all('meta', {'http-equiv': 'Content-Security-Policy'}):
                    meta.decompose() # remove them
        # copy title from head1 if exists
        if head1 and head1.title and head1.title.string:
            t = soup.new_tag('title')
            t.string = head1.title.string
            new_head.append(t)
        # copy title from head2 if exists (might result in two titles, should be handled later)
        if head2 and head2.title and head2.title.string:
            t = soup.new_tag('title')
            t.string = head2.title.string
            new_head.append(t)
        # copy style from head1 if exists
        if head1 and head1.style and head1.style.string:
            st = soup.new_tag('style')
            st.string = head1.style.string
            new_head.append(st)
        # copy style from head2 if exists
        if head2 and head2.style and head2.style.string:
            st = soup.new_tag('style')
            st.string = head2.style.string
            new_head.append(st)
        # add a default, relatively permissive Content-Security-Policy meta tag
        meta = soup.new_tag('meta', attrs={
            'http-equiv': 'Content-Security-Policy',
            'content': "default-src 'self' 'unsafe-inline'" # allow self and inline scripts/styles
        })
        new_head.append(meta)
        return new_head # return the merged head

    def _create_entanglement_script(self, soup: BeautifulSoup) -> Optional[BeautifulSoup]:
        """creates a script that adds a data attribute to its parent."""
        try:
            # use helper function to create script tag safely
            # the script tries to find its own parent and add an attribute
            return create_script_tag(soup, f"try {{ document.currentScript.parentNode.setAttribute('data-adv-entangle-{self.step}', performance.now().toString()); }} catch(e) {{}}")
        except Exception as e:
            # log if script creation fails for some reason
            logger.warning(f"Script creation failed: {str(e)}")
        return None # return nothing if failed

    def _apply_advanced_mutation(self, html: str) -> str:
        """parses html and applies mutations using advancedanomalyengine."""
        soup = BeautifulSoup(html, 'html.parser') # parse html
        # create the engine instance for current step and feedback
        engine = AdvancedAnomalyEngine(self.step, self.coverage_feedback)
        engine.mutate(soup) # run the engine's mutate method
        return str(soup) # return mutated html as string

    def _track_mutation_impact(self, soup: BeautifulSoup) -> None:
        """records which tags were mutated in this step."""
        # find all elements with the mutation step marker
        for el in soup.find_all(True):
            if 'data-mut-step' in el.attrs:
                # add entry to history: tag name -> (step, attributes)
                self.mutation_history[el.name].append((self.step, el.attrs))

    def _calculate_complexity(self, html: str) -> float:
        """calculates a simple complexity score for an html string."""
        soup = BeautifulSoup(html, 'html.parser') # parse html
        # count total elements
        num_elements = len(soup.find_all())
        # count unique tag types
        diversity = len(set(t.name for t in soup.find_all()))
        # count total number of attributes across all elements
        num_attrs = sum(len(t.attrs) for t in soup.find_all())
        # find maximum nesting depth
        max_depth = max((len(list(t.parents)) for t in soup.find_all()), default=0)
        # combine these metrics with weights into a single score
        return num_elements * 0.4 + diversity * 0.3 + num_attrs * 0.2 + max_depth * 0.1

    def _prevent_complexity_regression(self, soup: BeautifulSoup) -> bool:
        """checks if complexity dropped significantly compared to previous step."""
        # calculate complexity of the previous html in the chain
        prev_complexity = self._calculate_complexity(self.chain[-1])
        # calculate complexity of the current soup
        new_complexity = self._calculate_complexity(str(soup))
        # if new complexity is less than 70% of previous, consider it regression
        if new_complexity < (prev_complexity * 0.7):
            logger.warning("Complexity regression detected, reinforcing mutations")
            # apply aggressive mutations again to try boost complexity
            self._apply_aggressive_mutations(soup)
            return False # return false indicating regression happened
        return True # return true if complexity is okay

    def _apply_aggressive_mutations(self, soup: BeautifulSoup) -> None:
        """re-applies the standard advanced mutation set."""
        # this is used when complexity needs a boost
        engine = AdvancedAnomalyEngine(self.step, self.coverage_feedback)
        engine.mutate(soup)

    def _apply_targeted_mutations(self, soup: BeautifulSoup, strategy: Dict[str, Any]) -> str:
        """applies mutations based on strategy suggested by optimizer."""
        # get suggested intensity from strategy, default to 0.5
        intensity = strategy.get("mutation_intensity", 0.5)
        # loop through all elements in the soup
        for element in soup.find_all(True):
            # if element type is in focus list, apply mutation with boosted intensity
            if element.name in strategy.get("focus_elements", []):
                self._mutate_element(element, intensity * 1.5)
            # if element has attributes in focus list, apply mutation with slightly boosted intensity
            elif any(attr in strategy.get("focus_attributes", []) for attr in element.attrs):
                self._mutate_attributes(element, intensity * 1.2)
            # if element has event handlers in focus list, apply mutation with normal intensity
            elif any(f"on{event}" in element.attrs for event in strategy.get('focus_events', [])):
                self._mutate_events(element, intensity)
            # otherwise, apply mutation with normal intensity
            else:
                self._mutate_element(element, intensity)

        return str(soup) # return the modified html string

 

    def _mutate_element(self, element, intensity):
    
        # add a data attribute if random check passes
        if random.random() < intensity:
            element['data-mutated'] = 'true'

    def _mutate_attributes(self, element, intensity):
     
        #  corrupt some attributes using bitwise helper
        for attr in list(element.attrs): # Iterate over a copy of keys
             if random.random() < intensity:
                # Ensure value is a string before corruption
                current_value = element.attrs.get(attr)
                if isinstance(current_value, str):
                    element[attr] = bitwise_corrupt_safe(current_value, intensity)
                elif isinstance(current_value, list): # Handle list attributes (like class)
                     #  corrupt first item if it exists and is string
                     if current_value and isinstance(current_value[0], str):
                         element[attr] = [bitwise_corrupt_safe(current_value[0], intensity)] + current_value[1:]


    def _mutate_events(self, element, intensity):
       
         # modify existing event handlers or add new ones.
         for attr in list(element.attrs): # Iterate over a copy
            # if attribute is an event handler (starts with 'on') and random check passes
            if attr.startswith('on') and random.random() < intensity:
                element[attr] = "alert('Mutated Event');"  # replace with simple alert

    def _generate_complex_handler(self) -> str:
        """generate increasingly complex event handlers in later rounds."""
        # base simple handlers
        base_handlers = [
            "try { this.style.display = 'none'; } catch(e) { console.error(e); }",
            "try { document.body.appendChild(document.createElement('div')); } catch(e) { }",
            "try { setTimeout(() => { this.click(); }, 100); } catch(e) { }"
        ]
        # if round number is high enough, add more complex handlers
        if self.round_num > 2:
            complex_handlers = [
                # handler that adds many span elements
                f"try {{ for(let i=0; i<{10*self.round_num}; i++) {{ let x = document.createElement('span'); x.textContent = i; this.appendChild(x); }} }} catch(e) {{ }}",
                # handler that creates large typed array
                f"try {{ let data = new Uint8Array({1000*self.round_num}); for(let i=0; i<data.length; i++) {{ data[i] = i % 256; }}; console.log(data.length); }} catch(e) {{ }}",
                # handler that creates long string attribute
                f"try {{ let s = ''; for(let i=0; i<{100*self.round_num}; i++) {{ s += 'a'; }}; this.setAttribute('data-long', s); }} catch(e) {{ }}"
            ]
            base_handlers.extend(complex_handlers) # add complex ones to the list
        return random.choice(base_handlers) # pick one randomly

    def _add_nested_elements(self, parent_element, depth: int) -> None:
        """adds nested elements recursively, depth controlled by round."""
        if depth <= 0: # stop recursion if depth reaches zero
            return
        # find the soup object containing the parent element
        soup = parent_element.find_parent('html') # Look for html tag as root parent
        if not soup: # if couldn't find root, maybe something wrong, stop
             # Attempt to find any parent if html is not found
             soup_parent = parent_element.parent
             if not soup_parent:
                 logger.warning("Could not find parent for nested element insertion.")
                 return
             # If a direct parent is found, use its .soup attribute if available (BeautifulSoup context)
             # This is less reliable than find_parent('html')
             soup = getattr(soup_parent, 'soup', None)
             if not soup:
                 logger.warning("Could not obtain soup object from parent for nested element insertion.")
                 return

        # pick a random tag name for the new element
        tag_name = random.choice(['div', 'span', 'p', 'section', 'article'])
        new_element = soup.new_tag(tag_name) # create the element
        # add attributes indicating depth and round
        new_element['data-depth'] = str(depth)
        new_element['data-round'] = str(self.round_num)
        new_element.string = f"Nested element at depth {depth}, round {self.round_num}" # add text
        parent_element.append(new_element) # append to parent
        # recursive call to add nested elements inside the new one
        self._add_nested_elements(new_element, depth - 1)


###############################################################################
# Resource-Aware Mutator extending FractalMutator
###############################################################################
class ResourceAwareMutator(FractalMutator):
    """extends fractalmutator with memory and dom size checks."""
    def __init__(self, seed1_content: str, seed2_content: str, coverage_feedback: Optional[Dict[str, Any]] = None):
        super().__init__(seed1_content, seed2_content, coverage_feedback) # initialize parent
        # keep track of dom size history (measured by string length here)
        self.dom_size_history = []

    def generate_next(self) -> str:
        """overrides generate_next to add resource checks."""
        # check memory usage before starting
        if self._memory_exceeded():
            self._emergency_cleanup() # cleanup if too high
        # track dom size of previous generation
        self._track_dom_size()
        # use context manager for potential cleanup after generation
        with self._resource_guard():
            # call parent's generate_next method
            result = super().generate_next()
        # parse the result for final validation and sanitization
        soup = BeautifulSoup(result, 'html.parser')
        # perform validation and sanitization steps
        self._validate_and_sanitize(soup)
        self._sanitize_network_requests(soup)
        self._ensure_triggerfuzz_definition(soup)
        return str(soup) # return final html string

    def _track_dom_size(self):
        """adds the length of the last generated html to history."""
        if self.chain: # if chain has items
            self.dom_size_history.append(len(self.chain[-1])) # append length of last item

    def _memory_exceeded(self) -> bool:
        """checks if current process memory usage exceeds threshold."""
        snapshot = tracemalloc.take_snapshot() # get memory usage snapshot
        # calculate total memory used by tracked files in megabytes
        current_memory = sum(stat.size for stat in snapshot.statistics('filename')) / 1024**2
        # return true if memory usage is over 512 mb
        return current_memory > 512

    def _emergency_cleanup(self):
        """tries free up memory by removing old history and running gc."""
        logger.warning("Memory threshold exceeded - performing emergency cleanup")
        # remove all but the last two items from the generation chain
        if len(self.chain) > 2:
            del self.chain[:-2]
        # run python's garbage collector
        gc.collect()

    @contextlib.contextmanager
    def _resource_guard(self):
        """a context manager that runs garbage collection on exit."""
        try:
            yield # run the code inside the 'with' block
        finally:
            gc.collect() # run garbage collection when block finishes or errors

    def _apply_advanced_mutation(self, html: str) -> str:
        """overrides mutation application to check html size first."""
        # if html string is very large (over 1mb)
        if len(html) > 1e6:
            logger.warning("Oversized HTML detected - applying light mutations")
            # apply only light mutations instead of full advanced set
            return self._light_mutation(html)
        # otherwise, proceed with normal advanced mutations
        return super()._apply_advanced_mutation(html)

    def _light_mutation(self, html: str) -> str:
        """applies very minimal mutations to large html."""
        soup = BeautifulSoup(html, 'html.parser') # parse html
        tags = soup.find_all(True) # get all tags
        if tags:
            # take a small sample of tags
            sample_tags = random.sample(tags, min(100, len(tags)))
            # randomly decompose (remove) about half of the sample
            for el in sample_tags[:50]:
                if random.random() < 0.5:
                    # Check if element has a parent before decomposing
                    if el.parent:
                        el.decompose()
                else:
                    # corrupt text content of the other half
                    if el.string:
                        el.string = bitwise_corrupt_safe(el.string, 0.3) # low intensity corruption
        return str(soup) # return the lightly mutated html

    def _validate_and_sanitize(self, soup: BeautifulSoup) -> None:
        """performs some final structural validation."""
        # move any meta tags found outside head into the head
        if soup.head:
            for meta in soup.find_all('meta'):
                if meta.parent.name != 'head':
                    # Check if meta tag has a parent before extracting
                    if meta.parent:
                       meta.extract()
                       soup.head.append(meta)
      
        if not soup.find('html'):
            # Copy contents to avoid modifying soup while iterating
            contents = list(soup.contents)
            new_soup = BeautifulSoup(f"<html></html>", 'html.parser')
            # Clear original soup and append wrapped content
            soup.clear()
            for tag in contents:
                # Check if tag can be appended (might be NavigableString )
                if hasattr(tag, 'name'):
                   new_soup.html.append(tag)
                else:
                    # Handle NavigableString or other types by appending directly to soup if html fails
                    try:
                       new_soup.html.append(str(tag))
                    except Exception:
                         logger.warning(f"Could not append tag type {type(tag)} during sanitization wrap.")


            # Replace soup's content with the new wrapped structure
            soup.append(new_soup.html) # Append the <html> tag itself


    def _sanitize_network_requests(self, soup: BeautifulSoup):
        """replaces potentially problematic urls in attributes."""
        # loop through all tags
        for tag in soup.find_all(True):
            # check common url attributes
            for attr in ['src', 'href', 'action']:
                if attr in tag.attrs:
                    # if url points to a specific test domain, replace it with safer ones
                    if 'nonexistent.example.com' in tag[attr]:
                        tag[attr] = tag[attr].replace(
                            'nonexistent.example.com',
                            random.choice(['example.com', 'localhost']) # replace with example.com or localhost
                        )

    def _ensure_triggerfuzz_definition(self, soup: BeautifulSoup):
        """makes sure the triggerfuzz function is defined somewhere."""
        # search for the string 'triggerFuzz(' in the whole soup's text content
        if not soup.find(string=re.compile(r'\btriggerFuzz\s*\(')):
            # if not found, add a simple empty definition
            # use helper to create script tag
            script = create_script_tag(soup,"function triggerFuzz() {}")
            # add it to head, creating head if necessary
            if soup.head:
                soup.head.append(script)
            else:
                head = soup.new_tag('head')
                head.append(script)
                if soup.html:
                    soup.html.insert(0, head)
                else:
                    soup.insert(0, head) # fallback if no html tag

###############################################################################
# JavaScript Mutation Enhancements and Final Pipeline Functions
###############################################################################
class JavaScriptMutator: # removed esprima dependency
    """handles javascript specific mutations and generation."""
    def __init__(self):
        # keep track of generated identifiers to avoid clashes maybe
        self.unique_identifiers = set()
        # library of js code snippets for different fuzzing techniques
        self.fuzz_library = self._build_fuzz_library()

    def _build_fuzz_library(self):
        """creates the dictionary of js fuzzing snippets."""
        return {
            # snippets related to prototype pollution vulnerabilities
            'proto_pollution': [
                "Object.prototype.{name} = {value}",
                "const __proto__ = {{...constructor.prototype}}"
            ],
            # snippets related to type confusion vulnerabilities
            'type_confusion': [
                "({}+[])({payload})", # relies on object to string conversion
                "({value})[({key})]" # dynamic property access
            ],
            # snippets related to memory operations
            'memory_ops': [
                "new ArrayBuffer({size})", # create array buffer
                "new WebAssembly.Memory({{initial: {pages}}})" # create wasm memory
            ],
            # snippets related to asynchronous operations
            'async_payloads': [
                "async function* {name}() {{ yield* {payload} }}", # async generator
                "Promise.resolve().then(() => {payload})" # promise chain
            ]
        }

    def mutate_js_ast(self, code: str) -> str:
        """mutates javascript code (no ast used anymore)."""
        # no more ast parsing! we rely on jsbeautifier.
        try:
            # attempt to beautify. if it fails, it's likely invalid js.
            # this acts as a basic syntax check
            beautified_code = jsbeautifier.beautify(code)

            # simple string mutation (still applied, but after validation)
            # randomly append a comment to mark it as fuzzed
            if random.random() < 0.1:
                beautified_code += "//_fuzzed"

            return beautified_code # return the (potentially) beautified code

        except jsbeautifier.JSBeautifyError as e:
            # if beautifier failed, log error and return original code with comment
            logger.error(f"JavaScript mutation and beautification failed: {e}")
            return f"// JS Mutation and Beautification Error: {e}\n" + code
        except Exception as e:
            # catch any other unexpected error
            logger.exception(f"Unexpected error during JS mutation: {e}")
            return f"//Unexpected JS error: {e}\n" + code

    def generate_complex_js(self, template_type: str) -> str:
        """generates js code snippet based on a chosen fuzz library template."""
        # pick a random template from the chosen category
        template = random.choice(self.fuzz_library[template_type])
        # generate a unique variable name
        var_name = f"__fuzz_{uuid.uuid4().hex[:8]}"
        # dictionary of placeholders and their possible values
        substitutions = {
            'name': var_name,
            'value': random.choice(["()=>{}", "document.body", "0xbadc0de"]),
            'payload': self._generate_nested_operation(),  # generate nested operation recursively
            'size': random.choice([int(1e4), 0xffff, 2**16]), # common buffer sizes
            'pages': random.randint(10, 100) # wasm memory pages
        }
        # list of safe urls/data for fetch/other operations
        SAFE_RESOURCES = ['/fuzz-safe', 'https://example.com/fuzz', 'data:text/plain,test']
        # update substitutions with more complex values
        substitutions.update({
            'value': random.choice([f"fetch('{random.choice(SAFE_RESOURCES)}')", "document.querySelectorAll('[data-fuzz]')"])
        })
        # format the template string with chosen values, escape braces for format
        return template.format(**substitutions).replace('{', '{{').replace('}', '}}')

    def _generate_nested_operation(self, depth=1) -> str: #this function stays the same as the logic isn't esprima dependent
        """recursively generates nested javascript operations."""
        if depth == 0: # base case for recursion
            # return a simple potentially problematic value
            return random.choice([
                "document.all", # legacy, sometimes problematic
                "undefined[0]", # accessing property of undefined
                "new Proxy({}, {})" # simple proxy object
            ])
        # recursive step: generate operation containing another nested operation
        ops = [
            f"Object.create({self._generate_nested_operation(depth-1)})", # create object with nested proto
            f"Array.from({self._generate_nested_operation(depth-1)})", # create array from nested op
            f"new Function('return {self._generate_nested_operation(depth-1)}')" # create function returning nested op
        ]
        return random.choice(ops) # pick one randomly

class JsEnhancedMutator(ResourceAwareMutator):
    """extends resourceawaremutator with js specific optimizations."""
    def generate_next(self) -> str:
        """overrides generate_next to add js optimization step."""
        # call parent's generate_next first
        result = super().generate_next()
        # parse the result
        soup = BeautifulSoup(result, 'html.parser')
        # apply js payload optimizations
        self._optimize_js_payloads(soup)
        # inject js coverage hooks
        self._inject_js_coverage(soup)
        return str(soup) # return final html string

    def _optimize_js_payloads(self, soup: BeautifulSoup) -> None:
        """optimizes js payloads for better fuzzing results."""
        # list of domains considered safe for urls
        SAFE_DOMAINS = ['example.com', 'localhost', 'test.fuzz']

        # find all script tags in the soup
        for script in soup.find_all('script'):
            if script.string: # if script has content
                js_code = str(script.string) # get the code as string

                # 1. sanitize urls: replace urls not in safe list with safe ones
                js_code = re.sub(r'https?://(?!' + '|'.join(SAFE_DOMAINS) + r')\S+',
                                lambda m: f'"{random.choice(SAFE_DOMAINS)}"', js_code)

                # 2. remove comments, as these might contain html and create issues when placed elsewhere
                # removes single line and multi-line comments
                js_code = re.sub(r'//.*?\n|/\*.*?\*/', '', js_code, flags=re.DOTALL)

                # update the script tag content, no beautifying here
                script.string = js_code

    def _inject_js_coverage(self, soup: BeautifulSoup) -> None:
        """injects javascript code for simple coverage tracking."""
        # the coverage code uses a proxy to count property access/setting
        coverage_script = """
        window.__jsCoverage = new Proxy({}, {
            get(t, p) { return t[p] || 0 },
            set(t, p, v) { t[p] = (t[p] || 0) + 1; return true }
        });
        """
        # create the script tag using helper, maybe async
        script_tag = create_script_tag(soup, coverage_script, async_attr=True)

        # try add script to head, create head if needed, fallback to root
        if soup.head:
            soup.head.append(script_tag)
        elif soup.html: # add head if it doesn't exist but html tag does
            head = soup.new_tag('head')
            head.append(script_tag)
            soup.html.insert(0, head)
        else:  # fallback: insert directly into soup if no <html> or <head>
            soup.insert(0, script_tag)

    def _validate_and_sanitize(self, soup: BeautifulSoup) -> None:
        """re-implements validation from resourceawaremutator (maybe needs adjustment)."""
        # move meta tags to head
        if soup.head:
            for meta in soup.find_all('meta'):
                if meta.parent.name != 'head':
                     # Check if meta tag has a parent before extracting
                    if meta.parent:
                       meta.extract()
                       soup.head.append(meta)
        # this unwrap logic is still potentially problematic, see previous comment
        # try:
        #     soup.html.unwrap()
        # except AttributeError:
        #     pass
        # ensure html tag exists
        if not soup.find('html'):
            # Re-wrapping logic from ResourceAwareMutator, ensure it works
             contents = list(soup.contents)
             new_soup = BeautifulSoup(f"<html></html>", 'html.parser')
             soup.clear()
             for tag in contents:
                 if hasattr(tag, 'name'):
                    new_soup.html.append(tag)
                 else:
                     try:
                        new_soup.html.append(str(tag))
                     except Exception:
                          logger.warning(f"Could not append tag type {type(tag)} during js-enhanced sanitization wrap.")
             soup.append(new_soup.html)

###############################################################################
# Structural Validation & Mutation Pipeline Functions
###############################################################################
def generate_mutation(parent1: str, parent2: str, coverage_data: Dict[str, Any]) -> str:
    """creates and runs the appropriate mutator for one generation."""
    # load coverage gaps information from environment variable
    coverage_gaps = json.loads(os.getenv("COVERAGE_GAPS", "{}")) # default to empty dict if not set
    # create the final mutator instance (js enhanced, resource aware, fractal)
    mutator = JsEnhancedMutator(parent1, parent2, coverage_data)
    # create the enhanced anomaly engine, passing step, feedback, and gaps
    mutator.engine = EnhancedAnomalyEngine(mutator.step, coverage_data, coverage_gaps)
    # initialize the coverage aware mutator within the engine
    mutator.engine.mutator = CoverageAwareMutator(coverage_gaps)
    # run one generation step and return the result
    return mutator.generate_next()

###############################################################################
# Main CLI
###############################################################################
def main() -> None:
    """main entry point when script is run directly."""
    # set a round-specific random seed for this execution
    round_seed = get_round_specific_seed()
    random.seed(round_seed)
    logger.info(f"Using round-specific seed for mutation: {round_seed}")

    # get number of mutations to generate from command line arg, default 1
    total_mutations = int(sys.argv[1]) if len(sys.argv) > 1 else 1
    # get output directory from env var or use default from config
    out_dir = os.environ.get("MUTATION_OUT_DIR", MUTATION_FOLDER)
    os.makedirs(out_dir, exist_ok=True) # create output dir if not exists

    # get round number for adaptive mutation strategies
    round_num = int(os.environ.get("MUTATION_ROUND_NUM", "1"))

    # prepare coverage feedback dictionary with info from env vars
    coverage_feedback = {
        "recent_memory_crash": bool(os.environ.get("RECENT_MEMORY_CRASH")), # check if mem crash happened
        "recent_dom_crash": bool(os.environ.get("RECENT_DOM_CRASH")), # check if dom crash happened
        "overall_coverage": int(os.environ.get("OVERALL_COVERAGE", "0")), # get overall score
        "round_number": round_num, # pass round number
        "unique_crashes": int(os.environ.get("UNIQUE_CRASHES_COUNT", "0")) # pass crash count
    }

    # load previous coverage data if file path provided in env var
    previous_coverage_file = os.environ.get("PREVIOUS_COVERAGE_FILE", "")
    if previous_coverage_file and os.path.exists(previous_coverage_file):
        try:
            with open(previous_coverage_file, "r", encoding="utf-8") as f:
                previous_coverage = json.load(f)
                # add loaded data to the feedback dictionary
                coverage_feedback["previous_coverage"] = previous_coverage
        except Exception as e:
            logger.error(f"Failed to load previous coverage: {e}")

    # load current coverage data (maybe used for initial strategy?)
    coverage_data = load_coverage_data()
    # check if there's any actual coverage data available to guide mutations
    use_coverage_guided = any(coverage_data.get(key) for key in
                             ['element_coverage', 'attribute_coverage', 'event_coverage'])

    # check if specific seeds were forced via environment variables
    forcedA, forcedB = get_forced_seeds()
    if forcedA and forcedB: # if forced seeds provided
        logger.info("[ADV-DETERMINISTIC] Using forced seeds => A=%s, B=%s", forcedA, forcedB)
        # load content from the forced seed files
        s1 = load_html_content(forcedA)
        s2 = load_html_content(forcedB)
        if not s1 or not s2: # if loading failed, abort
            logger.error("Failed to load forced seeds => abort.")
            return

        # generate the requested number of mutations using forced seeds
        # decide whether to use the coverage-guided generation function
        if use_coverage_guided:
            for i in range(total_mutations):
                # use the specific generation function that maybe uses coverage data more directly?
                mutated = generate_mutation(s1, s2, coverage_data)
                file_out = os.path.join(out_dir, f"mutated_{i+1:04d}.html")
                with open(file_out, "w", encoding="utf-8") as wf:
                    wf.write(mutated)
                logger.info("Generated coverage-guided mutation %d => %s", i+1, file_out)
        else:
            # use the standard mutator class instance for generation
            mutator = JsEnhancedMutator(s1, s2, coverage_feedback)
            for i in range(total_mutations):
                mutated = mutator.generate_next()
                file_out = os.path.join(out_dir, f"mutated_{i+1:04d}.html")
                with open(file_out, "w", encoding="utf-8") as wf:
                    wf.write(mutated)
                logger.info("Generated advanced deterministic mutation %d => %s", i+1, file_out)
        return # finish execution after using forced seeds

    # if no forced seeds, use classification-based approach
    logger.info("[ADV-DETERMINISTIC] No forced seeds => classification-based approach.")
    cls_data = load_classifications() # load classification data
    if not cls_data: # if no data, cannot proceed
        logger.error("No classification data => aborting.")
        return

    # find seeds classified as 'complex'
    complex_seeds = [k for k, v in cls_data.items() if v.get("computed_classification") == "complex"]
    if len(complex_seeds) < 2: # need at least two complex seeds
        logger.error("Insufficient complex seeds => abort.")
        return

    # pick the top 2 complex seeds based on node count (feature from classification)
    from operator import itemgetter
    sorted_complex = sorted(
        # create list of (seed_path, node_count) tuples
        [(s, cls_data[s]["features"]["node_count"]) for s in complex_seeds],
        key=itemgetter(1), reverse=True # sort by node_count descending
    )[:2] # take the top 2
    pick1, _ = sorted_complex[0]
    pick2, _ = sorted_complex[1]
    # construct full paths to the chosen seeds
    seed_path1 = os.path.join(BASE_DIR, pick1) 
    seed_path2 = os.path.join(BASE_DIR, pick2)

    # load content from the chosen complex seeds
    contentA = load_html_content(seed_path1)
    contentB = load_html_content(seed_path2)
    if not contentA or not contentB: # if loading failed, abort
        logger.error("Failed loading selected complex seeds => abort.")
        return

    # generate mutations using the selected complex seeds
    # decide again if to use coverage guided function or standard mutator instance
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


# ensure main() runs only when script executed directly
if __name__ == "__main__":
    main()