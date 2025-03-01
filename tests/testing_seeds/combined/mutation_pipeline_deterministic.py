#!/usr/bin/env python3                                      # Use the python3 interpreter found in the environment

import os                                                  # Import os module for interacting with the operating system
import sys                                                 # Import sys module to access system-specific parameters and functions
import json                                                # Import json module for JSON parsing and writing
import logging                                             # Import logging module for log message handling
import copy                                                # Import copy module to allow shallow and deep copy operations
import random                                              # Import random module for random operations
import string                                              # Import string module for string-related utilities
from bs4 import BeautifulSoup, Tag, Doctype                 # Import BeautifulSoup and related classes from bs4 for HTML parsing and tag creation

# Configure logging format and level
logging.basicConfig(level=logging.INFO,                     # Set logging level to INFO
                    format='[%(asctime)s] %(levelname)s: %(message)s',  # Set log message format including time and level
                    datefmt='%H:%M:%S')                # Set date format for log timestamps
logger = logging.getLogger(__name__)                       # Get a logger for the current module

# Define constants for directories and file paths
BASE_DIRECTORY = "/home/dhia/browser-fuzzer/Dissertation/tests/testing_seeds/combined"  # Base directory for test seeds
CLASSIFICATIONS_JSON = os.path.join(BASE_DIRECTORY, "classifications.json")   # Path to classifications JSON file within the base directory
MUTATION_FOLDER = os.path.join(BASE_DIRECTORY, "mutation")                    # Folder where mutation outputs will be stored

# Define the AnomalyEngine class for injecting anomalies into HTML via mutations
class AnomalyEngine:
    def __init__(self, mutation_step):                      # Constructor: takes mutation_step as a parameter
        self.step = mutation_step                           # Save the current mutation step
        self.intensity = min(0.2 + (mutation_step * 0.07), 1.0)  # Calculate intensity based on step; cap at 1.0
        # List of mutation techniques (methods) to apply
        self.techniques = [
            self._inject_memory_issues,
            self._corrupt_dom,
            self._generate_js_chaos,
            self._create_style_conflicts,
            self._add_resource_exhaustion,
            self._implement_event_entanglement,
            self._inject_timing_attacks
        ]

    def mutate(self, soup):                                  # Method that applies a random subset of techniques to a BeautifulSoup object
        random.shuffle(self.techniques)                     # Shuffle the techniques list to randomize their order
        for technique in self.techniques[:int(3 + self.step/2)]:  # Select a number of techniques based on mutation step
            technique(soup)                                 # Apply each selected technique to the soup
        return soup                                         # Return the mutated soup

    def _inject_memory_issues(self, soup):                   # Private method: injects JavaScript to allocate memory
        leak_script = soup.new_tag('script')                # Create a new <script> tag
        leak_script.string = f"""
        window.leakPool = window.leakPool || [];
        function allocateMemory() {{
            leakPool.push(new ArrayBuffer({int(1e6 * self.intensity)}));
            if(leakPool.length < {100 + self.step*10}) {{
                setTimeout(allocateMemory, 0);
            }}
        }}
        allocateMemory();
        """                                               # Set the script content to repeatedly allocate memory based on intensity and step
        soup.body.append(leak_script)                       # Append the script to the <body> tag

    def _corrupt_dom(self, soup):                           # Private method: randomly corrupts the DOM
        # Choose a random sample of elements from the soup; sample size is max(5, 10*intensity)
        for el in random.sample(soup.find_all(True), max(5, int(10*self.intensity))):
            if random.random() < 0.4:                       # With 40% probability
                el.decompose()                              # Remove the element completely
            elif random.random() < 0.3:                     # Otherwise, with 30% probability
                el.unwrap()                                 # Remove the element but keep its children
            elif random.random() < 0.3:                     # Otherwise, with another 30% probability
                el.append(BeautifulSoup("<invalid_tag>", 'html.parser'))  # Append an invalid tag to the element

    def _generate_js_chaos(self, soup):                     # Private method: generates chaotic JavaScript code
        payloads = [                                      # List of possible JavaScript payloads
            f"for(let i=0;i<1e4;i++) document.write('<div>'+{'a'*1000}+'</div>');",  # Writes many divs with long text
            "window.onerror=function(){return true;};"+";debugger;"*10,  # Sets onerror handler and repeatedly calls debugger
            "document.querySelectorAll('*').forEach(el=>el.remove());",  # Removes all elements from the DOM
            "new Function(`while(1){{}}`)();"            # Creates a function that enters an infinite loop
        ]
        script = soup.new_tag('script')                    # Create a new <script> tag
        script.string = random.choice(payloads)            # Set its content to a randomly chosen payload
        soup.body.append(script)                           # Append the script to the <body> tag

    def _create_style_conflicts(self, soup):                # Private method: creates style conflicts by adding CSS
        style = soup.new_tag('style')                      # Create a new <style> tag
        style.string = f"""
        .mutate-{self.step} {{
            position: {'absolute' if random.random() > 0.5 else 'fixed'} !important;
            transform: {'scale(' + str(random.uniform(0.1, 3)) + ')'};
            animation: mutate-{self.step} {random.randint(1,5)}s infinite;
        }}
        @keyframes mutate-{self.step} {{
            0% {{ opacity: {random.random()}; }}
            50% {{ transform: rotate({random.randint(0,360)}deg); }}
            100% {{ opacity: {random.random()}; }}
        }}
        """                                             # CSS that sets a random position, scale, and animation based on the mutation step
        soup.head.append(style)                            # Append the style to the <head> tag

    def _add_resource_exhaustion(self, soup):               # Private method: adds a canvas and script to exhaust resources
        canvas = soup.new_tag('canvas', width='4096', height='2160')  # Create a large <canvas> element
        canvas_script = soup.new_tag('script')             # Create a new <script> tag for canvas rendering
        canvas_script.string = """
        const ctx = document.querySelector('canvas').getContext('2d');
        function render() {
            ctx.fillStyle = `hsl(${Math.random()*360}, 100%, 50%)`;
            ctx.fillRect(0, 0, 4096, 2160);
            requestAnimationFrame(render);
        }
        render();
        """                                             # Script that continuously renders random colored rectangles to exhaust GPU resources
        soup.body.extend([canvas, canvas_script])          # Append both the canvas and the script to the <body> tag

    def _implement_event_entanglement(self, soup):          # Private method: attaches event handlers to elements to cause interference
        for el in soup.find_all(True):                     # Loop over all elements in the soup
            if random.random() < 0.1 * self.intensity:      # With probability proportional to intensity
                event = random.choice(['click','mouseover','load','focus'])  # Choose a random event type
                el[event] = "document.body.innerHTML += '<div>';" * 10  # Set the event attribute to a string that appends many divs to the body

    def _inject_timing_attacks(self, soup):                 # Private method: injects JavaScript to perform recursive calls and memory allocations
        script = soup.new_tag('script')                   # Create a new <script> tag
        script.string = f"""
        function recursiveCall() {{
            {'setTimeout(() => recursiveCall(), 0);' * (1 + self.step)}
            {'new ArrayBuffer(1024 * 1024);' * (1 + self.step//2)}
        }}
        recursiveCall();
        """                                             # Script that recursively calls itself and allocates memory, with frequency based on mutation step
        soup.body.append(script)                          # Append the script to the <body> tag

# Define the FractalMutator class for generating mutated HTML by combining seeds
class FractalMutator:
    def __init__(self, seed1_content, seed2_content):      # Constructor takes two seed HTML content strings
        self.chain = [seed1_content, seed2_content]        # Initialize the chain with the two seeds
        self.step = 0                                       # Initialize the mutation step counter
    
    def generate_next(self):                               # Method to generate the next mutated HTML
        parent1 = self.chain[-2]                           # Select the second-to-last HTML in the chain as parent1
        parent2 = self.chain[-1]                           # Select the last HTML in the chain as parent2
        
        mutated = self._fractal_crossover(parent1, parent2)  # Perform a fractal crossover between the two parents
        mutated = self._recursive_corrupt(mutated)         # Further corrupt the resulting HTML recursively
        self.chain.append(mutated)                         # Append the mutated HTML to the chain
        self.step += 1                                     # Increment the mutation step counter
        return mutated                                     # Return the mutated HTML

    def _fractal_crossover(self, html1, html2):            # Private method to crossover two HTML documents
        soup1 = BeautifulSoup(html1, 'html.parser')        # Parse the first HTML into a BeautifulSoup object
        soup2 = BeautifulSoup(html2, 'html.parser')        # Parse the second HTML into a BeautifulSoup object
        
        # Define an inner function to harvest a subset of components (elements) from a soup
        def harvest_components(soup):
            all_elements = soup.find_all(True)             # Find all tags in the soup
            return random.sample(all_elements, k=max(1, int(len(all_elements) * 0.3)))  # Randomly select 30% of elements (at least 1)
        
        components1 = harvest_components(soup1)            # Harvest components from the first soup
        components2 = harvest_components(soup2)            # Harvest components from the second soup
        
        new_soup = BeautifulSoup(features='html.parser')   # Create a new empty BeautifulSoup object for the result
        new_soup.append(Doctype('html'))                   # Append the DOCTYPE declaration to the new soup
        html_tag = new_soup.new_tag('html')                # Create a new <html> tag
        html_tag.append(self._merge_heads(soup1.head, soup2.head))  # Merge the <head> tags from both parents and append to the <html> tag
        
        body = new_soup.new_tag('body')                    # Create a new <body> tag
        # Instead of changing tag names, we add a data attribute to indicate mutation
        for comp in components1 + components2:             # For each harvested component from both parents
            clone = copy.copy(comp)                        # Make a shallow copy of the component
            clone['data-mutation-step'] = self.step        # Add a data attribute to mark the mutation step
            body.append(clone)                             # Append the clone to the body
            if random.random() < 0.3:                      # With 30% probability
                body.append(self._create_entanglement(clone))  # Append an entanglement script to the body
       
        html_tag.append(body)                              # Append the constructed body to the html tag
        new_soup.append(html_tag)                          # Append the html tag to the new soup
        return str(new_soup)                               # Return the new soup as a string

    def _recursive_corrupt(self, html):                    # Private method to apply further corruption recursively
        soup = BeautifulSoup(html, 'html.parser')          # Parse the HTML string into a BeautifulSoup object
        anomaly_engine = AnomalyEngine(self.step)          # Create an AnomalyEngine instance using the current step
        return str(anomaly_engine.mutate(soup))            # Mutate the soup with the anomaly engine and return as a string

    def _merge_heads(self, head1, head2):                  # Private method to merge the <head> sections of two HTML documents
        """Merge heads from both parent documents"""
        soup = BeautifulSoup('', 'html.parser')            # Create an empty BeautifulSoup object for building the head
        new_head = soup.new_tag('head')                    # Create a new <head> tag

        # Copy titles from parents if available
        if head1 and head1.title:
            title = soup.new_tag('title')                  # Create a new <title> tag
            title.string = head1.title.string              # Set its content to the title from head1
            new_head.append(title)                         # Append the title to new_head
        if head2 and head2.title:
            title = soup.new_tag('title')
            title.string = head2.title.string              # Set its content to the title from head2
            new_head.append(title)

        # Merge styles from both parents if available
        if head1 and head1.style:
            style = soup.new_tag('style')
            style.string = head1.style.string              # Copy style content from head1
            new_head.append(style)
        if head2 and head2.style:
            style = soup.new_tag('style')
            style.string = head2.style.string              # Copy style content from head2
            new_head.append(style)

        # Add a CSP meta tag for security
        meta = soup.new_tag('meta')                        # Create a new <meta> tag
        meta['http-equiv'] = 'Content-Security-Policy'     # Set the HTTP-EQUIV attribute for CSP
        meta['content'] = "default-src 'unsafe-inline' 'self' data: blob: *"  # Set a permissive CSP policy
        new_head.append(meta)                              # Append the meta tag to new_head

        return new_head                                    # Return the merged head

    def _create_entanglement(self, element):             # Private method to create an entanglement script for an element
        entangler = BeautifulSoup(features='html.parser').new_tag('script')  # Create a new <script> tag using a fresh BeautifulSoup instance
        entangler.string = f"""
        try {{
            document.currentScript.parentNode.setAttribute(
                'data-mutated-{self.step}', 
                performance.now().toString()
            );
        }} catch(e) {{}}
        """                                             # Script that sets a data attribute with the current performance time on the element
        return entangler                                 # Return the entanglement script

# Helper function to check for forced seed file paths from environment variables
def get_forced_seeds():
    envA = os.environ.get("MUTATION_SEED_A")             # Get seed A file path from environment variable
    envB = os.environ.get("MUTATION_SEED_B")             # Get seed B file path from environment variable
    if envA and envB and os.path.exists(envA) and os.path.exists(envB):  # Check that both are provided and exist
        return envA, envB                                # Return the forced seed paths
    return None, None                                    # Otherwise, return None for both

# Helper function to load HTML content from a file
def load_html_content(file_path):
    try:
        with open(file_path, 'r', encoding='utf-8', errors='replace') as f:  # Open the file with utf-8 encoding; replace errors
            return f.read()                              # Return the content of the file
    except Exception as e:
        logger.error("Error loading HTML from %s => %s", file_path, e)  # Log an error if file loading fails
        return None                                    # Return None on failure

# Helper function to load classification data from a JSON file
def load_classifications():
    try:
        with open(CLASSIFICATIONS_JSON, 'r', encoding='utf-8') as f:  # Open the classifications JSON file
            return json.load(f)                         # Return the parsed JSON data as a dictionary
    except Exception as e:
        logger.error("Error loading classifications => %s", e)  # Log an error if JSON loading fails
        return {}                                      # Return an empty dictionary on failure

# Helper function to group seed filenames by classification type
def get_seed_filenames_by_classification(classifications):
    seeds_by_class = {"simple": [], "moderate": [], "complex": []}  # Initialize dictionary with classification keys
    for key, meta in classifications.items():          # Iterate over classification items
        cat = meta.get("computed_classification", "simple")  # Get the computed classification or default to "simple"
        if cat in seeds_by_class:
            seeds_by_class[cat].append(key)             # Append the key (filename) to the corresponding classification list
    return seeds_by_class                              # Return the dictionary grouping seeds by classification

# Main function to run the mutation process
def main():
    total_mutations = int(sys.argv[1]) if len(sys.argv) > 1 else 100  # Determine total mutations to generate from command-line or default to 100
    mutation_out_dir = os.environ.get("MUTATION_OUT_DIR", MUTATION_FOLDER)  # Get mutation output directory from environment variable or use default
    os.makedirs(mutation_out_dir, exist_ok=True)       # Ensure the mutation output directory exists

    forcedA, forcedB = get_forced_seeds()                # Attempt to get forced seed file paths from environment
    if forcedA and forcedB:                             # If both forced seeds are available
        logger.info("[FORCED MODE] Using environment seeds:\n  A => %s\n  B => %s", forcedA, forcedB)  # Log forced mode usage
        seed1 = load_html_content(forcedA)              # Load HTML content from seed A
        seed2 = load_html_content(forcedB)              # Load HTML content from seed B
        
        if not seed1 or not seed2:                      # If loading either seed fails
            logger.error("Failed to load forced seeds") # Log an error message
            return                                    # Exit the function

        mutator = FractalMutator(seed1, seed2)          # Create a FractalMutator instance with the two seeds
        for i in range(total_mutations):                # Loop to generate the specified number of mutations
            mutated = mutator.generate_next()           # Generate the next mutated HTML
            output_path = os.path.join(mutation_out_dir, f'mutated_{i+1:04d}.html')  # Build the output file path with a zero-padded index
            with open(output_path, 'w') as f:             # Open the output file for writing
                f.write(mutated)                          # Write the mutated HTML to the file
            logger.info("Generated mutation %d at %s", i+1, output_path)  # Log the generation of this mutation
        return                                        # Exit after forced mode mutation generation

    logger.info("No forced seeds => classification-based approach")  # Log that forced seeds were not provided and classification will be used
    classifications = load_classifications()          # Load classification data from the JSON file
    if not classifications:                           # If no classification data is available
        logger.error("No classification data available")  # Log an error message
        return                                        # Exit the function

    seed_categories = get_seed_filenames_by_classification(classifications)  # Group seed filenames by their classification
    # Sort complex seeds by node count in descending order and take the top 2
    complex_seeds = sorted(seed_categories['complex'], 
                         key=lambda k: classifications[k]["features"]["node_count"], 
                         reverse=True)[:2]

    if len(complex_seeds) < 2:                          # If fewer than two complex seeds are available
        logger.error("Insufficient complex seeds for crossover")  # Log an error message
        return                                        # Exit the function

    seed_paths = [os.path.join(BASE_DIRECTORY, s) for s in complex_seeds]  # Build full paths to the complex seeds
    seed1 = load_html_content(seed_paths[0])            # Load the HTML content from the first complex seed
    seed2 = load_html_content(seed_paths[1])            # Load the HTML content from the second complex seed

    mutator = FractalMutator(seed1, seed2)              # Create a FractalMutator instance with these two seeds
    for i in range(total_mutations):                    # Loop to generate the specified number of mutations
        mutated = mutator.generate_next()               # Generate the next mutated HTML
        output_path = os.path.join(mutation_out_dir, f'mutated_{i+1:04d}.html')  # Build the output file path
        with open(output_path, 'w') as f:                 # Open the output file for writing
            f.write(mutated)                            # Write the mutated HTML to the file
        logger.info("Generated mutation %d at %s", i+1, output_path)  # Log the mutation generation

# Entry point of the script
if __name__ == "__main__":
    main()                                             # Call the main function when the script is executed