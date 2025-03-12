#!/usr/bin/env python3
"""
mutation_pipeline_deterministic.py
----------------------------------
Performs deterministic fractal mutations and anomaly injections on two HTML seeds.
Retains the same fractal logic, classification fallback, etc.
Optionally reads forced seeds from environment (MUTATION_SEED_A / MUTATION_SEED_B).
Output mutated HTML files to MUTATION_OUT_DIR.
"""

import os
import sys
import json
import logging
import copy
import random
import string
from bs4 import BeautifulSoup, Doctype

logging.basicConfig(level=logging.INFO,
                    format='[%(asctime)s] %(levelname)s: %(message)s',
                    datefmt='%H:%M:%S')
logger = logging.getLogger(__name__)

BASE_DIRECTORY = "/home/dhia/browser-fuzzer/Dissertation/tests/testing_seeds/combined"
CLASSIFICATIONS_JSON = os.path.join(BASE_DIRECTORY, "classifications.json")
MUTATION_FOLDER = os.path.join(BASE_DIRECTORY, "mutation")

###############################################################################
# ANOMALY ENGINE
###############################################################################

class AnomalyEngine:
    def __init__(self, mutation_step):
        self.step = mutation_step
        self.intensity = min(0.2 + (mutation_step*0.07), 1.0)
        self.techniques = [
            self._inject_memory_issues,
            self._corrupt_dom,
            self._generate_js_chaos,
            self._create_style_conflicts,
            self._add_resource_exhaustion,
            self._implement_event_entanglement,
            self._inject_timing_attacks
        ]

    def mutate(self, soup):
        random.shuffle(self.techniques)
        # We pick a subset of techniques based on self.step
        subset_count = int(3 + self.step/2)
        for technique in self.techniques[:subset_count]:
            technique(soup)
        return soup

    def _inject_memory_issues(self, soup):
        script = soup.new_tag('script')
        script.string = f"""
        window.leakPool = window.leakPool || [];
        function allocateMemory() {{
            leakPool.push(new ArrayBuffer({int(1e6*self.intensity)}));
            if(leakPool.length < {100 + self.step*10}) {{
                setTimeout(allocateMemory, 0);
            }}
        }}
        allocateMemory();
        """
        if soup.body:
            soup.body.append(script)

    def _corrupt_dom(self, soup):
        all_tags = soup.find_all(True)
        sample_sz = max(5, int(10*self.intensity))
        if len(all_tags) < sample_sz:
            return
        subset = random.sample(all_tags, sample_sz)
        for el in subset:
            r = random.random()
            if r<0.4:
                el.decompose()
            elif r<0.7:
                el.unwrap()
            else:
                el.append(BeautifulSoup("<invalid_tag>", "html.parser"))

    def _generate_js_chaos(self, soup):
        payloads = [
            "for(let i=0;i<1e4;i++) document.write('<div>'+'a'.repeat(1000)+'</div>');",
            "window.onerror=function(){return true;};"+";debugger;"*10,
            "document.querySelectorAll('*').forEach(e=>e.remove());",
            "new Function(`while(1){{}}`)();"
        ]
        script = soup.new_tag("script")
        script.string = random.choice(payloads)
        if soup.body:
            soup.body.append(script)

    def _create_style_conflicts(self, soup):
        style = soup.new_tag("style")
        style.string = f"""
        .mutate-{self.step} {{
            position: {'absolute' if random.random()>0.5 else 'fixed'} !important;
            transform: scale({random.uniform(0.1,3)});
            animation: mutate-{self.step} {random.randint(1,5)}s infinite;
        }}
        @keyframes mutate-{self.step} {{
            0%   {{ opacity: {random.random()}; }}
            50%  {{ transform: rotate({random.randint(0,360)}deg); }}
            100% {{ opacity: {random.random()}; }}
        }}
        """
        if soup.head:
            soup.head.append(style)

    def _add_resource_exhaustion(self, soup):
        canvas = soup.new_tag("canvas", width="4096", height="2160")
        script = soup.new_tag("script")
        script.string = """
        const ctx = document.querySelector('canvas').getContext('2d');
        function render() {
            ctx.fillStyle = `hsl(${Math.random()*360},100%,50%)`;
            ctx.fillRect(0,0,4096,2160);
            requestAnimationFrame(render);
        }
        render();
        """
        if soup.body:
            soup.body.extend([canvas, script])

    def _implement_event_entanglement(self, soup):
        all_tags = soup.find_all(True)
        for el in all_tags:
            if random.random() < 0.1*self.intensity:
                event_type = random.choice(["click","mouseover","load","focus"])
                el[event_type] = "document.body.innerHTML += '<div>';"*10

    def _inject_timing_attacks(self, soup):
        script = soup.new_tag("script")
        script.string = f"""
        function recursiveCall() {{
            {"setTimeout(() => recursiveCall(), 0);"*(1+this.step)}
            {"new ArrayBuffer(1024*1024);"*(1+Math.floor(this.step/2))}
        }}
        recursiveCall();
        """
        if soup.body:
            soup.body.append(script)

###############################################################################
# FRACTAL MUTATOR
###############################################################################

class FractalMutator:
    def __init__(self, seed1_content, seed2_content):
        self.chain = [seed1_content, seed2_content]
        self.step = 0

    def generate_next(self):
        parent1 = self.chain[-2]
        parent2 = self.chain[-1]
        mutated = self._fractal_crossover(parent1, parent2)
        mutated = self._recursive_corrupt(mutated)
        self.chain.append(mutated)
        self.step += 1
        return mutated

    def _fractal_crossover(self, html1, html2):
        soup1 = BeautifulSoup(html1,"html.parser")
        soup2 = BeautifulSoup(html2,"html.parser")

        def harvest_components(soup):
            all_elems = soup.find_all(True)
            if not all_elems:
                return []
            pick = max(1, int(len(all_elems)*0.3))
            return random.sample(all_elems, min(pick,len(all_elems)))

        comps1 = harvest_components(soup1)
        comps2 = harvest_components(soup2)

        new_soup = BeautifulSoup(features="html.parser")
        new_soup.append(Doctype("html"))
        html_tag = new_soup.new_tag("html")
        html_tag.append(self._merge_heads(soup1.head, soup2.head))

        body = new_soup.new_tag("body")
        for comp in (comps1 + comps2):
            clone = copy.copy(comp)
            clone["data-mutation-step"] = self.step
            body.append(clone)
            if random.random() < 0.3:
                body.append(self._create_entanglement(clone))

        html_tag.append(body)
        new_soup.append(html_tag)
        return str(new_soup)

    def _recursive_corrupt(self, html):
        soup = BeautifulSoup(html,"html.parser")
        anomaly = AnomalyEngine(self.step)
        mutated_soup = anomaly.mutate(soup)
        return str(mutated_soup)

    def _merge_heads(self, h1, h2):
        soup = BeautifulSoup("", "html.parser")
        new_head = soup.new_tag("head")

        if h1 and h1.title:
            t = soup.new_tag("title")
            t.string = h1.title.string
            new_head.append(t)
        if h2 and h2.title:
            t = soup.new_tag("title")
            t.string = h2.title.string
            new_head.append(t)

        if h1 and h1.style:
            st = soup.new_tag("style")
            st.string = h1.style.string
            new_head.append(st)
        if h2 and h2.style:
            st = soup.new_tag("style")
            st.string = h2.style.string
            new_head.append(st)

        meta = soup.new_tag("meta")
        meta["http-equiv"] = "Content-Security-Policy"
        meta["content"] = "default-src 'unsafe-inline' 'self' data: blob: *"
        new_head.append(meta)
        return new_head

    def _create_entanglement(self, element):
        s = BeautifulSoup(features="html.parser").new_tag("script")
        s.string = f"""
        try {{
            document.currentScript.parentNode.setAttribute(
                'data-mutated-{self.step}',
                performance.now().toString()
            );
        }} catch(e) {{}}
        """
        return s

###############################################################################
# CLASSIFICATION LOADING + FORCED SEEDS
###############################################################################

def get_forced_seeds():
    envA = os.environ.get("MUTATION_SEED_A")
    envB = os.environ.get("MUTATION_SEED_B")
    if envA and envB and os.path.exists(envA) and os.path.exists(envB):
        return envA, envB
    return None, None

def load_html_content(path):
    try:
        with open(path,"r",encoding="utf-8",errors="replace") as f:
            return f.read()
    except Exception as e:
        logger.error("Error loading HTML from %s => %s", path, e)
        return None

def load_classifications():
    if not os.path.exists(CLASSIFICATIONS_JSON):
        return {}
    try:
        with open(CLASSIFICATIONS_JSON,"r",encoding="utf-8") as f:
            return json.load(f)
    except Exception as e:
        logger.error("Error loading classification => %s", e)
        return {}

def get_seed_filenames_by_classification(classifications):
    seeds_by_class = {"simple":[],"moderate":[],"complex":[]}
    for key,meta in classifications.items():
        cat = meta.get("computed_classification","simple")
        if cat in seeds_by_class:
            seeds_by_class[cat].append(key)
    return seeds_by_class

###############################################################################
# MAIN
###############################################################################

def main():
    total_mutations = int(sys.argv[1]) if len(sys.argv)>1 else 100
    mutation_out_dir = os.environ.get("MUTATION_OUT_DIR", MUTATION_FOLDER)
    os.makedirs(mutation_out_dir, exist_ok=True)

    forcedA, forcedB = get_forced_seeds()
    if forcedA and forcedB:
        logger.info("[FORCED MODE] Using environment seeds => A=%s, B=%s", forcedA, forcedB)
        seed1 = load_html_content(forcedA)
        seed2 = load_html_content(forcedB)
        if not seed1 or not seed2:
            logger.error("Failed to load forced seeds.")
            return
        mutator = FractalMutator(seed1, seed2)
        for i in range(total_mutations):
            mutated = mutator.generate_next()
            out_file = os.path.join(mutation_out_dir, f"mutated_{i+1:04d}.html")
            with open(out_file,"w",encoding="utf-8") as wf:
                wf.write(mutated)
            logger.info("Generated mutation %d => %s", i+1, out_file)
        return

    logger.info("No forced seeds => classification-based approach.")
    classifications = load_classifications()
    if not classifications:
        logger.error("No classification data available.")
        return

    seeds_by_class = get_seed_filenames_by_classification(classifications)
    complex_seeds = sorted(
        seeds_by_class["complex"],
        key=lambda k: classifications[k]["features"]["node_count"],
        reverse=True
    )[:2]
    if len(complex_seeds) < 2:
        logger.error("Insufficient complex seeds for crossover.")
        return

    path1 = os.path.join(BASE_DIRECTORY, complex_seeds[0])
    path2 = os.path.join(BASE_DIRECTORY, complex_seeds[1])
    seed1 = load_html_content(path1)
    seed2 = load_html_content(path2)
    if not seed1 or not seed2:
        logger.error("Failed to load complex seeds from classification.")
        return

    mutator = FractalMutator(seed1, seed2)
    for i in range(total_mutations):
        mutated = mutator.generate_next()
        out_path = os.path.join(mutation_out_dir, f"mutated_{i+1:04d}.html")
        with open(out_path,"w",encoding="utf-8") as wf:
            wf.write(mutated)
        logger.info("Generated mutation %d => %s", i+1, out_path)

if __name__=="__main__":
    main()
