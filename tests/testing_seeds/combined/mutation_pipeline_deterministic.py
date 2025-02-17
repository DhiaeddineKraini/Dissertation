#!/usr/bin/env python3
import os
import json
import logging
from bs4 import BeautifulSoup

# Configure logging for detailed information and error reporting.
logging.basicConfig(level=logging.INFO,
                    format='[%(asctime)s] %(levelname)s: %(message)s',
                    datefmt='%H:%M:%S')
logger = logging.getLogger(__name__)

# Define the base directory and JSON file location.
BASE_DIRECTORY = "/home/dhia/browser-fuzzer/Dissertation/tests/testing_seeds/combined"
CLASSIFICATIONS_JSON = os.path.join(BASE_DIRECTORY, "classifications.json")
MUTATION_FOLDER = os.path.join(BASE_DIRECTORY, "mutation")

#############################################
# Mutation Operators (Deterministic Methods)
#############################################

def basic_mutation(html_content):
    """
    Deterministically apply a basic mutation by appending a marker comment.
    This operator is used as a fallback when advanced mutation is not applicable.
    """
    return html_content + "\n<!-- Basic mutation applied deterministically -->"

def deterministic_crossover(html_content1, html_content2):
    """
    Perform a deterministic, DOM-aware crossover:
      - In seed1, select the <div> element having the maximum number of descendant nodes.
      - In seed2, select the <div> element having the minimum number of descendant nodes.
      - Insert the selected subtree from seed1 into seed2.
    This operator preserves the DOM structure and is calculated based on measurable properties.
    """
    try:
        soup1 = BeautifulSoup(html_content1, 'lxml')
        soup2 = BeautifulSoup(html_content2, 'lxml')
    except Exception as e:
        logger.error("Error parsing HTML during crossover: %s", e)
        return html_content1 + html_content2

    # Select candidate in seed1 with maximum descendant nodes.
    divs1 = soup1.find_all('div')
    if divs1:
        candidate1 = max(divs1, key=lambda tag: len(tag.find_all()))
    else:
        logger.warning("No <div> elements found in seed1; using entire document as candidate.")
        candidate1 = soup1

    # In seed2, select candidate <div> with minimum descendant nodes.
    divs2 = soup2.find_all('div')
    if divs2:
        candidate2 = min(divs2, key=lambda tag: len(tag.find_all()))
        candidate2.append(candidate1)
    else:
        logger.warning("No <div> elements found in seed2; appending candidate1 at document end.")
        if soup2.body:
            soup2.body.append(candidate1)
        else:
            soup2.append(candidate1)
    return str(soup2)

#############################################
# Deterministic Seed Selection Utilities
#############################################

def sort_seeds_by_complexity(seed_keys, classifications):
    """
    Sort the given seed keys in descending order based on their node_count (complexity).
    The seed with the highest node_count will be at the beginning of the list.
    """
    return sorted(seed_keys,
                  key=lambda k: classifications[k]["features"].get("node_count", 0),
                  reverse=True)

#############################################
# Helper Functions for Data Loading
#############################################

def load_classifications():
    """
    Load the JSON file containing the classification metadata.
    Expects a JSON structure mapping keys (e.g., "complex/seedX.html") to metadata.
    """
    try:
        with open(CLASSIFICATIONS_JSON, 'r', encoding='utf-8') as f:
            data = json.load(f)
        logger.info("Loaded classification data from %s", CLASSIFICATIONS_JSON)
        return data
    except Exception as e:
        logger.error("Error loading classifications JSON: %s", e)
        return {}

def get_seed_filenames_by_classification(classifications):
    """
    Organize seed filenames into a dictionary keyed by their computed classification.
    Returns a dictionary with keys 'simple', 'moderate', and 'complex'.
    """
    seeds_by_class = {"simple": [], "moderate": [], "complex": []}
    for key, metadata in classifications.items():
        cls = metadata.get("computed_classification", "simple")
        if cls in seeds_by_class:
            seeds_by_class[cls].append(key)
        else:
            seeds_by_class["simple"].append(key)
    return seeds_by_class

def load_seed_content(key):
    """
    Load the content of a seed file identified by its key (e.g., "complex/seedX.html").
    Uses UTF-8 decoding with error replacement.
    """
    filepath = os.path.join(BASE_DIRECTORY, key)
    try:
        with open(filepath, 'r', encoding='utf-8', errors="replace") as f:
            return f.read()
    except Exception as e:
        logger.error("Error loading seed content from %s: %s", filepath, e)
        return None

#############################################
# Main Mutation Pipeline Integration
#############################################

def main():
    # Ensure the mutation output folder exists.
    if not os.path.exists(MUTATION_FOLDER):
        try:
            os.makedirs(MUTATION_FOLDER)
            logger.info("Created mutation folder: %s", MUTATION_FOLDER)
        except Exception as e:
            logger.error("Error creating mutation folder: %s", e)
            return

    # Load classification metadata from JSON.
    classifications = load_classifications()
    if not classifications:
        logger.error("No classification data available. Exiting.")
        return

    # Group seeds by their computed classification.
    seeds_by_class = get_seed_filenames_by_classification(classifications)
    logger.info("Seed counts by classification:")
    for cls, seeds in seeds_by_class.items():
        logger.info("  %s: %d", cls.capitalize(), len(seeds))

    mutated_html = None
    mutation_strategy = None
    classification_used = None

    # Deterministic selection: if there are at least two complex seeds, choose the top two.
    if len(seeds_by_class["complex"]) >= 2:
        mutation_strategy = "deterministic_crossover"
        classification_used = "complex"
        sorted_complex = sort_seeds_by_complexity(seeds_by_class["complex"], classifications)
        seed1 = sorted_complex[0]
        seed2 = sorted_complex[1]
        logger.info("Selected seeds for deterministic crossover (complex):")
        logger.info("  Seed 1: %s", seed1)
        logger.info("  Seed 2: %s", seed2)
        content1 = load_seed_content(seed1)
        content2 = load_seed_content(seed2)
        if content1 is None or content2 is None:
            logger.error("Error loading one or both selected seeds. Aborting mutation.")
            return
        mutated_html = deterministic_crossover(content1, content2)
    else:
        # Fallback: use basic mutation on the top seed from the best available category.
        if seeds_by_class["complex"]:
            chosen_category = "complex"
        elif seeds_by_class["moderate"]:
            chosen_category = "moderate"
        elif seeds_by_class["simple"]:
            chosen_category = "simple"
        else:
            logger.error("No seeds available for mutation.")
            return

        mutation_strategy = "basic_mutation"
        classification_used = chosen_category
        sorted_seeds = sort_seeds_by_complexity(seeds_by_class[chosen_category], classifications)
        chosen_seed = sorted_seeds[0]
        logger.info("Selected seed for basic mutation from '%s' category: %s", chosen_category, chosen_seed)
        content = load_seed_content(chosen_seed)
        if content is None:
            logger.error("Error loading the selected seed. Aborting mutation.")
            return
        mutated_html = basic_mutation(content)

    # Log the mutation summary.
    logger.info("Mutation Summary:")
    logger.info("  Mutation Strategy: %s", mutation_strategy)
    logger.info("  Classification of Seed(s) Used: %s", classification_used)
    logger.info("  Mutated HTML Preview (first 500 characters):\n%s", mutated_html[:500])
    
    # Save the mutated output to the mutation folder.
    output_file = os.path.join(MUTATION_FOLDER, "mutated_output.html")
    try:
        with open(output_file, 'w', encoding='utf-8') as out_f:
            out_f.write(mutated_html)
        logger.info("Mutated HTML has been saved to: %s", output_file)
    except Exception as e:
        logger.error("Error saving mutated output: %s", e)

if __name__ == "__main__":
    main()

