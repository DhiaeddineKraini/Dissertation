import os
import sys
import json
import logging
import copy
import random
from bs4 import BeautifulSoup

logging.basicConfig(level=logging.INFO,
                    format='[%(asctime)s] %(levelname)s: %(message)s',
                    datefmt='%H:%M:%S')
logger = logging.getLogger(__name__)

BASE_DIRECTORY      = "/home/dhia/browser-fuzzer/Dissertation/tests/testing_seeds/combined"
CLASSIFICATIONS_JSON= os.path.join(BASE_DIRECTORY, "classifications.json")
MUTATION_FOLDER     = os.path.join(BASE_DIRECTORY, "mutation")

##############################################
# Helpers for Forced Seeds
##############################################

def get_forced_seeds():
    """
    Return (seedA_path, seedB_path) if the orchestrator sets them in env vars:
      MUTATION_SEED_A, MUTATION_SEED_B
    Only returns them if both exist on disk; otherwise (None, None).
    """
    envA = os.environ.get("MUTATION_SEED_A")
    envB = os.environ.get("MUTATION_SEED_B")
    if envA and envB and os.path.exists(envA) and os.path.exists(envB):
        return envA, envB
    return None, None

def load_html_content(file_path):
    """
    Load and return the HTML content from a file path, or None if error.
    """
    try:
        with open(file_path, 'r', encoding='utf-8', errors='replace') as f:
            return f.read()
    except Exception as e:
        logger.error("Error loading HTML from %s => %s", file_path, e)
        return None

##############################################
# Deterministic Mutation Routines
##############################################

def find_biggest_block(soup, tags=("div","section","article","nav","aside")):
    candidates = soup.find_all(tags)
    if candidates:
        biggest = max(candidates, key=lambda t: len(t.find_all()))
        return biggest
    logger.warning("No block-level elements found; fallback to entire soup.")
    return soup

def find_smallest_block(soup, tags=("div","section","article","nav","aside")):
    candidates = soup.find_all(tags)
    if candidates:
        smallest = min(candidates, key=lambda t: len(t.find_all()))
        return smallest
    logger.warning("No block-level elements found; fallback to entire soup.")
    return soup

def deterministic_crossover(html_content1, html_content2, removal_prob=0.5):
    """
    Revised deterministic crossover with increased randomness:
      1. In html_content1, find the largest block and iterate over its direct children.
         Remove each child with probability removal_prob, but ensure at least one child remains.
      2. In html_content2, find the smallest block and insert a copy of the modified block
         (created via string serialization) at a random position among its direct children.
      3. Return the modified html_content2.
    """
    try:
        soup1 = BeautifulSoup(html_content1, 'lxml')
        soup2 = BeautifulSoup(html_content2, 'lxml')
    except Exception as e:
        logger.error("Error parsing HTML in crossover => %s", e)
        return html_content1 + html_content2  # fallback

    # Find the largest block in soup1.
    biggest = find_biggest_block(soup1)
    children = biggest.find_all(recursive=False)
    if children:
        # Randomly remove children with probability removal_prob.
        # Ensure at least one child remains by tracking removals.
        remaining = []
        for child in children:
            if random.random() > removal_prob:
                remaining.append(child)
            else:
                child.decompose()
        # If all children got removed, randomly re-add one.
        if not remaining:
            # Re-parse the original children list (since they were not all removed)
            # and randomly choose one to keep.
            chosen = random.choice(children)
            remaining.append(chosen)
            # Re-add the chosen child if it was removed.
            if chosen not in biggest.contents:
                biggest.append(chosen)
        logger.info("Randomly removed children from the biggest block (removal probability = %.2f).", removal_prob)
    else:
        logger.warning("Biggest block has no direct children; leaving block unchanged.")

    # Find the smallest block in soup2.
    smallest = find_smallest_block(soup2)
    
    # Create a copy of the modified biggest block via string serialization.
    subtree_str = str(biggest)
    subtree_copy_soup = BeautifulSoup(subtree_str, 'lxml')
    # Get the first element from the parsed copy.
    if subtree_copy_soup.body and subtree_copy_soup.body.contents:
        subtree_copy = subtree_copy_soup.body.contents[0]
    elif subtree_copy_soup.contents:
        subtree_copy = subtree_copy_soup.contents[0]
    else:
        subtree_copy = subtree_copy_soup

    # Insert the copied subtree at a random position among smallest's direct children.
    siblings = smallest.find_all(recursive=False)
    if siblings:
        insert_index = random.randint(0, len(siblings))
        smallest.insert(insert_index, subtree_copy)
        logger.info("Inserted mutated subtree at random index %d in target block.", insert_index)
    else:
        smallest.append(subtree_copy)
        logger.info("No direct children in target block; appended mutated subtree.")
    return str(soup2)


def complex_mutation(html_content):
    """
    Revised complex mutation:
      1. Find the largest block in the content.
      2. Create a deep copy of it and append it to the <body> (or root if no <body>).
      3. Return the modified HTML.
    """
    try:
        soup = BeautifulSoup(html_content, 'lxml')
    except Exception as e:
        logger.error("Error parsing HTML in complex_mutation => %s", e)
        return html_content

    biggest = find_biggest_block(soup)
    biggest_dup = copy.deepcopy(biggest)

    if soup.body:
        # Optionally, insert at a random position in the body
        siblings = soup.body.find_all(recursive=False)
        if siblings:
            insert_index = random.randint(0, len(siblings))
            soup.body.insert(insert_index, biggest_dup)
            logger.info("Inserted duplicated block at index %d in <body>.", insert_index)
        else:
            soup.body.append(biggest_dup)
            logger.info("Appended duplicated block to <body>.")
    else:
        soup.append(biggest_dup)
        logger.info("Appended duplicated block to root of document.")
    return str(soup)


#############################################
# Deterministic Classification-Based Logic
#############################################

def sort_seeds_by_complexity(seed_keys, classifications):
    return sorted(seed_keys,
                  key=lambda k: classifications[k]["features"].get("node_count", 0),
                  reverse=True)

def load_classifications():
    try:
        with open(CLASSIFICATIONS_JSON, 'r', encoding='utf-8') as f:
            data = json.load(f)
        logger.info("Loaded classification data from %s", CLASSIFICATIONS_JSON)
        return data
    except Exception as e:
        logger.error("Error loading classifications => %s", e)
        return {}

def get_seed_filenames_by_classification(classifications):
    seeds_by_class = {"simple": [], "moderate": [], "complex": []}
    for key, meta in classifications.items():
        cat = meta.get("computed_classification", "simple")
        if cat in seeds_by_class:
            seeds_by_class[cat].append(key)
        else:
            seeds_by_class["simple"].append(key)
    return seeds_by_class

def load_seed_content_by_key(key):
    path = os.path.join(BASE_DIRECTORY, key)
    try:
        with open(path, 'r', encoding='utf-8', errors='replace') as f:
            return f.read()
    except Exception as e:
        logger.error("Error loading seed content from %s => %s", path, e)
        return None

#############################################
# MAIN
#############################################

def main():
    """
    Usage: python3 mutation_pipeline_deterministic.py [NUM_MUTATIONS]

    - Checks env for:
        MUTATION_SEED_A, MUTATION_SEED_B
        MUTATION_OUT_DIR (where mutated pages are saved)

    - If both seeds are present => forced mode (deterministic crossover)
      else => classification-based mode.
    """
    # parse number of mutations
    total_mutations = 100
    if len(sys.argv) > 1:
        try:
            total_mutations = int(sys.argv[1])
        except ValueError:
            logger.warning("Invalid arg '%s' => using default=100", sys.argv[1])

    logger.info("Will produce %d total mutations.", total_mutations)

    # Determine output folder for mutated pages
    mutation_out_dir = os.environ.get("MUTATION_OUT_DIR", MUTATION_FOLDER)
    os.makedirs(mutation_out_dir, exist_ok=True)

    # Check forced seeds from orchestrator
    forcedA, forcedB = get_forced_seeds()
    if forcedA and forcedB:
        logger.info("[FORCED MODE] Using environment seeds:\n  A => %s\n  B => %s", forcedA, forcedB)
        for i in range(1, total_mutations + 1):
            cA = load_html_content(forcedA)
            cB = load_html_content(forcedB)
            if cA is None or cB is None:
                logger.error("Cannot load forced seeds for mutation %d => skipping", i)
                continue
            mutated_html = deterministic_crossover(cA, cB)  # or use complex_mutation(...)
            out_name = f"mutated_output_{i:03d}.html"
            out_path = os.path.join(mutation_out_dir, out_name)
            try:
                with open(out_path, 'w', encoding='utf-8') as outf:
                    outf.write(mutated_html)
                logger.info("Saved forced mutation %d => %s", i, out_path)
            except Exception as e:
                logger.error("Error saving forced mutation %d => %s", i, e)
        return

    # Else, use classification-based mutation
    logger.info("No forced seeds => proceeding with classification-based approach.")
    classifications = load_classifications()
    if not classifications:
        logger.error("No classification data => can't do classification-based mutation.")
        return

    seeds_by_class = get_seed_filenames_by_classification(classifications)
    logger.info("Seed counts => simple=%d, moderate=%d, complex=%d",
                len(seeds_by_class["simple"]),
                len(seeds_by_class["moderate"]),
                len(seeds_by_class["complex"]))

    sorted_complex  = sort_seeds_by_complexity(seeds_by_class["complex"], classifications)
    sorted_moderate = sort_seeds_by_complexity(seeds_by_class["moderate"], classifications)
    sorted_simple   = sort_seeds_by_complexity(seeds_by_class["simple"],   classifications)

    mutation_counter = 1
    while mutation_counter <= total_mutations:
        mutated_html = None
        strategy = None
        cat_used = None

        if len(sorted_complex) >= 2:
            strategy = "deterministic_crossover"
            cat_used = "complex"
            idx = (mutation_counter - 1) % len(sorted_complex)
            s1 = sorted_complex[idx]
            s2 = sorted_complex[(idx + 1) % len(sorted_complex)]
            logger.info("Mutation %d => crossover on complex seeds => %s & %s", mutation_counter, s1, s2)
            c1 = load_seed_content_by_key(s1)
            c2 = load_seed_content_by_key(s2)
            if c1 is None or c2 is None:
                mutation_counter += 1
                continue
            mutated_html = deterministic_crossover(c1, c2)
        else:
            if sorted_complex:
                cat_used = "complex"
                sorted_list = sorted_complex
            elif sorted_moderate:
                cat_used = "moderate"
                sorted_list = sorted_moderate
            elif sorted_simple:
                cat_used = "simple"
                sorted_list = sorted_simple
            else:
                logger.error("No seeds found at all => exiting.")
                break

            strategy = "complex_mutation"
            idx = (mutation_counter - 1) % len(sorted_list)
            chosen_seed = sorted_list[idx]
            logger.info("Mutation %d => complex_mutation on '%s' from %s", mutation_counter, chosen_seed, cat_used)
            content = load_seed_content_by_key(chosen_seed)
            if content is None:
                mutation_counter += 1
                continue
            mutated_html = complex_mutation(content)

        out_subfolder = os.path.join(mutation_out_dir, cat_used)
        os.makedirs(out_subfolder, exist_ok=True)
        out_file = f"mutated_output_{mutation_counter:03d}.html"
        out_path = os.path.join(out_subfolder, out_file)
        try:
            with open(out_path, 'w', encoding='utf-8') as f:
                f.write(mutated_html)
            logger.info("Saved mutation %d (%s) => %s", mutation_counter, strategy, out_path)
        except Exception as e:
            logger.error("Error saving mutation %d => %s", mutation_counter, e)
        mutation_counter += 1

if __name__ == "__main__":
    main()

