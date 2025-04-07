#!/usr/bin/env python3
import os
import glob
import shutil
from bs4 import BeautifulSoup
from collections import Counter

# 7.1. Parse HTML Files using BeautifulSoup
def parse_html(html_content):
    """
    Parse HTML content into a BeautifulSoup object using the lxml parser.
    """
    return BeautifulSoup(html_content, 'lxml')

# Helper function to calculate the maximum DOM depth iteratively.
def get_dom_depth_iterative(soup):
    """
    Calculate the maximum DOM depth iteratively using a stack.
    Only elements (with a tag name) are considered.
    """
    max_depth = 0
    stack = [(soup, 0)]  # Start with the root element and depth 0
    
    while stack:
        element, depth = stack.pop()
        max_depth = max(max_depth, depth)
        if hasattr(element, 'contents') and element.contents:
            for child in element.contents:
                if hasattr(child, 'name') and child.name is not None:
                    stack.append((child, depth + 1))
    return max_depth

# 7.2 & 7.3. Extract Metrics & Write Function: compute_features(html_content)
def compute_features(html_content):
    """
    Compute and return features extracted from the HTML content.
    
    Features include:
      - node_count: Total number of HTML elements.
      - max_depth: Maximum depth of the DOM tree.
      - tag_diversity: Frequency of each HTML tag.
      - attribute_usage: Counts of attributes (id, class, and total attributes).
    """
    soup = parse_html(html_content)
    
    # Node Count: Count all HTML elements.
    nodes = soup.find_all()
    node_count = len(nodes)
    
    # Maximum DOM Depth (using the iterative approach)
    max_depth = get_dom_depth_iterative(soup)
    
    # Tag Diversity: Count the occurrence of each tag.
    tag_names = [tag.name for tag in nodes]
    tag_diversity = dict(Counter(tag_names))
    
    # Attribute Usage: Count occurrences of common attributes.
    attribute_usage = {"id": 0, "class": 0, "total": 0}
    for tag in nodes:
        for attr in tag.attrs:
            attribute_usage["total"] += 1
            if attr.lower() == 'id':
                attribute_usage["id"] += 1
            elif attr.lower() == 'class':
                attribute_usage["class"] += 1
    
    features = {
        "node_count": node_count,
        "max_depth": max_depth,
        "tag_diversity": tag_diversity,
        "attribute_usage": attribute_usage
    }
    return features

# 8. Implement Classification
def classify_page(features):
    """
    Classify the HTML page as 'simple', 'moderate', or 'complex'
    based on the extracted features.
    
    Example Rules:
      - 'simple': node_count < 50 and max_depth < 4
      - 'moderate': node_count < 200 and max_depth < 10
      - 'complex': Otherwise
    """
    node_count = features.get("node_count", 0)
    max_depth = features.get("max_depth", 0)
    
    if node_count < 50 and max_depth < 4:
        return "simple"
    elif node_count < 200 and max_depth < 10:
        return "moderate"
    else:
        return "complex"

# Main function: Process HTML, JS, CSS, and other files in the given directory.
def main():
    base_directory = "/home/dhia/browser-fuzzer/Dissertation/tests/testing_seeds/combined"
    print(f"Scanning directory: {base_directory} for HTML, JS, CSS, and other files...\n")
    
    # --- Process HTML Files ---
    html_files = glob.glob(os.path.join(base_directory, "*.html"))
    print(f"Found {len(html_files)} HTML file(s).")
    
    for file_path in html_files:
        print(f"\nProcessing HTML file: {os.path.basename(file_path)}")
        try:
            # Open file with errors="replace" to handle invalid byte sequences.
            with open(file_path, 'r', encoding='utf-8', errors="replace") as f:
                html_content = f.read()
        except Exception as e:
            print(f"Error reading {file_path}: {e}")
            continue
        
        print("Extracting features...")
        features = compute_features(html_content)
        print(f"Features extracted: {features}")
        
        print("Classifying the page based on features...")
        classification = classify_page(features)
        print(f"Classification result: {classification}")
        
        # Create destination folder based on classification.
        dest_folder = os.path.join(base_directory, classification)
        if not os.path.exists(dest_folder):
            print(f"Creating folder: {dest_folder}")
            os.makedirs(dest_folder, exist_ok=True)
        else:
            print(f"Destination folder already exists: {dest_folder}")
        
        # Move the HTML file to its destination folder.
        dest_path = os.path.join(dest_folder, os.path.basename(file_path))
        try:
            shutil.move(file_path, dest_path)
            print(f"Moved {os.path.basename(file_path)} to {dest_folder}")
        except Exception as e:
            print(f"Error moving file {file_path} to {dest_folder}: {e}")
    
    # --- Process JavaScript Files ---
    js_files = glob.glob(os.path.join(base_directory, "*.js"))
    print(f"\nFound {len(js_files)} JS file(s).")
    
    if js_files:
        js_dest_folder = os.path.join(base_directory, "js")
        if not os.path.exists(js_dest_folder):
            print(f"Creating JS folder: {js_dest_folder}")
            os.makedirs(js_dest_folder, exist_ok=True)
        else:
            print(f"JS destination folder already exists: {js_dest_folder}")
        
        for js_file in js_files:
            print(f"\nProcessing JS file: {os.path.basename(js_file)}")
            dest_path = os.path.join(js_dest_folder, os.path.basename(js_file))
            try:
                shutil.move(js_file, dest_path)
                print(f"Moved {os.path.basename(js_file)} to {js_dest_folder}")
            except Exception as e:
                print(f"Error moving file {js_file} to {js_dest_folder}: {e}")
    
    # --- Process CSS Files ---
    css_files = glob.glob(os.path.join(base_directory, "*.css"))
    print(f"\nFound {len(css_files)} CSS file(s).")
    
    if css_files:
        css_dest_folder = os.path.join(base_directory, "css")
        if not os.path.exists(css_dest_folder):
            print(f"Creating CSS folder: {css_dest_folder}")
            os.makedirs(css_dest_folder, exist_ok=True)
        else:
            print(f"CSS destination folder already exists: {css_dest_folder}")
        
        for css_file in css_files:
            print(f"\nProcessing CSS file: {os.path.basename(css_file)}")
            dest_path = os.path.join(css_dest_folder, os.path.basename(css_file))
            try:
                shutil.move(css_file, dest_path)
                print(f"Moved {os.path.basename(css_file)} to {css_dest_folder}")
            except Exception as e:
                print(f"Error moving file {css_file} to {css_dest_folder}: {e}")
    
    # --- Process Other Files (Files with no recognized extension) ---
    # List all files in the base directory.
    all_files = [os.path.join(base_directory, f) for f in os.listdir(base_directory) if os.path.isfile(os.path.join(base_directory, f))]
    # Filter out files that have .html, .js, or .css extensions.
    other_files = []
    for file_path in all_files:
        _, ext = os.path.splitext(file_path)
        if ext.lower() not in ['.html', '.js', '.css']:
            other_files.append(file_path)
    
    print(f"\nFound {len(other_files)} file(s) with no recognized extension.")
    
    if other_files:
        others_dest_folder = os.path.join(base_directory, "others")
        if not os.path.exists(others_dest_folder):
            print(f"Creating others folder: {others_dest_folder}")
            os.makedirs(others_dest_folder, exist_ok=True)
        else:
            print(f"Others destination folder already exists: {others_dest_folder}")
        
        for other_file in other_files:
            print(f"\nProcessing file with unknown extension: {os.path.basename(other_file)}")
            dest_path = os.path.join(others_dest_folder, os.path.basename(other_file))
            try:
                shutil.move(other_file, dest_path)
                print(f"Moved {os.path.basename(other_file)} to {others_dest_folder}")
            except Exception as e:
                print(f"Error moving file {other_file} to {others_dest_folder}: {e}")

if __name__ == "__main__":
    main()

