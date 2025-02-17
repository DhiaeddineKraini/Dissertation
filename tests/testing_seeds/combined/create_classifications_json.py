#!/usr/bin/env python3
import os
import glob
import json
from bs4 import BeautifulSoup
from collections import Counter

# Base directory where your classified seed folders are stored.
BASE_DIRECTORY = "/home/dhia/browser-fuzzer/Dissertation/tests/testing_seeds/combined"
# Output JSON file path
OUTPUT_JSON = os.path.join(BASE_DIRECTORY, "classifications.json")

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
    stack = [(soup, 0)]  # Start with the root element at depth 0
    
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
    
    # Count all HTML elements.
    nodes = soup.find_all()
    node_count = len(nodes)
    
    # Compute maximum DOM depth using the iterative approach.
    max_depth = get_dom_depth_iterative(soup)
    
    # Count tag diversity.
    tag_names = [tag.name for tag in nodes]
    tag_diversity = dict(Counter(tag_names))
    
    # Count attribute usage.
    attribute_usage = {"id": 0, "class": 0, "total": 0}
    for tag in nodes:
        for attr in tag.attrs:
            attribute_usage["total"] += 1
            if attr.lower() == 'id':
                attribute_usage["id"] += 1
            elif attr.lower() == 'class':
                attribute_usage["class"] += 1
    
    return {
        "node_count": node_count,
        "max_depth": max_depth,
        "tag_diversity": tag_diversity,
        "attribute_usage": attribute_usage
    }

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

def create_classifications_json():
    """
    Scan the BASE_DIRECTORY for subfolders "simple", "moderate", and "complex",
    compute features and classification for each HTML file, and save the data to a JSON file.
    
    The JSON structure maps each file (using a key like "simple/filename.html")
    to its metadata, which includes:
      - The folder (original classification),
      - The computed classification,
      - The extracted features.
    """
    classifications = {}
    
    # Iterate over the predefined folders.
    for folder in ["simple", "moderate", "complex"]:
        folder_path = os.path.join(BASE_DIRECTORY, folder)
        if not os.path.isdir(folder_path):
            print(f"Warning: Folder '{folder}' not found in {BASE_DIRECTORY}. Skipping.")
            continue
        
        # Process all HTML files in the current folder.
        html_files = glob.glob(os.path.join(folder_path, "*.html"))
        print(f"Found {len(html_files)} HTML file(s) in folder '{folder}'.")
        
        for file_path in html_files:
            filename = os.path.basename(file_path)
            key = f"{folder}/{filename}"  # e.g., "simple/seed1.html"
            
            try:
                with open(file_path, 'r', encoding='utf-8', errors="replace") as f:
                    html_content = f.read()
            except Exception as e:
                print(f"Error reading {file_path}: {e}")
                continue
            
            # Compute features and classification.
            features = compute_features(html_content)
            computed_class = classify_page(features)
            
            # (Optional) Note if the computed classification differs from the folder name.
            if computed_class != folder:
                print(f"Note: Computed classification for {key} is '{computed_class}', which differs from folder '{folder}'.")
            
            classifications[key] = {
                "folder": folder,
                "computed_classification": computed_class,
                "features": features
            }
            print(f"Processed {key}: Classified as '{computed_class}'.")
    
    # Save the classification metadata to a JSON file.
    try:
        with open(OUTPUT_JSON, 'w', encoding='utf-8') as out_f:
            json.dump(classifications, out_f, indent=4)
        print(f"\nClassification JSON saved to: {OUTPUT_JSON}")
    except Exception as e:
        print(f"Error saving JSON file: {e}")

if __name__ == "__main__":
    create_classifications_json()

