import random


def generate_random_html():
    """
    Generates random HTML structure with tags, attributes, and text content.
    Returns a string containing HTML code.
    """
    # Define common HTML tags and attributes to be used
    tags = ["div", "p", "span", "a", "script", "style", "img", "table", "button", "ul", "li"]
    attributes = ["id", "class", "style", "src", "href", "onclick", "title", "alt", "data-test"]

    # Start with an empty HTML structure
    html_structure = ""

    # Generate a random number of HTML elements to add
    for _ in range(random.randint(5, 10)):
        # Select a random tag and create an opening tag with random attributes
        tag = random.choice(tags)
        attribute_string = ""

        # Add random attributes to the tag
        for _ in range(random.randint(1, 3)):  # Each tag has 1 to 3 attributes
            attr = random.choice(attributes)
            # Generate a random value for each attribute
            value = "".join(random.choices("abcdefghijklmnopqrstuvwxyz0123456789", k=5))
            attribute_string += f'{attr}="{value}" '

        # Add tag with attributes to the HTML structure
        if tag in ["img", "br", "hr"]:  # Self-closing tags like <img />
            html_structure += f'<{tag} {attribute_string}/>\n'
        else:
            # Add opening and closing tags with optional nested text
            html_structure += f'<{tag} {attribute_string}>\n'
            # Randomly decide to add text inside the tag
            if random.choice([True, False]):
                html_structure += "".join(random.choices("abcdefghijklmnopqrstuvwxyz ", k=20))
            html_structure += f'</{tag}>\n'  # Add closing tag

    return html_structure


def generate_random_css():
    """
    Generates random CSS styles with different selectors, properties, and values.
    Returns a string containing CSS code.
    """
    # Define some common CSS selectors, properties, and values
    selectors = [".container", "#header", "body", "div > p", "ul li", "*", "a:hover", "img"]
    properties = ["color", "background-color", "font-size", "border", "display", "position", "width", "height"]
    css_structure = ""

    # Create random CSS rules
    for _ in range(random.randint(5, 10)):
        # Randomly select a selector and property
        selector = random.choice(selectors)
        property_name = random.choice(properties)

        # Generate a random value for the chosen property
        if property_name in ["color", "background-color"]:
            # Generate a random color in hexadecimal
            value = f"#{''.join(random.choices('0123456789abcdef', k=6))}"
        elif property_name in ["width", "height", "font-size"]:
            # Random pixel value for size-related properties
            value = f"{random.randint(5, 100)}px"
        elif property_name == "display":
            # Random display types
            value = random.choice(["block", "inline", "flex", "grid", "none"])
        else:
            # Default value for other properties
            value = "relative"

        # Add the CSS rule to the structure
        css_structure += f"{selector} {{ {property_name}: {value}; }}\n"

    return css_structure


def generate_random_js():
    """
    Generates random JavaScript code to test browser scripting.
    Returns a string containing JavaScript code.
    """
    # Define common JavaScript functions, variables, and actions
    functions = ["alert", "console.log", "document.write", "eval", "setTimeout"]
    variables = ["x", "y", "i", "obj", "data"]
    js_code = ""

    # Generate random JavaScript code snippets
    for _ in range(random.randint(3, 6)):
        # Randomly select a function and a variable
        func = random.choice(functions)
        var = random.choice(variables)
        value = random.randint(0, 100)

        # Generate JavaScript code for variable declaration and function call
        js_code += f'var {var} = {value};\n{func}("{var} value is " + {var});\n'

    # Add a random conditional block for additional complexity
    js_code += "if (Math.random() > 0.5) {\n"
    js_code += f'  console.log("Random value:", {random.randint(100, 500)});\n'
    js_code += "} else {\n"
    js_code += '  alert("This is a test alert!");\n'
    js_code += "}\n"

    return js_code


def generate_random_dom_script():
    """
    Generates JavaScript code for DOM manipulation.
    Returns a string containing JavaScript code.
    """
    elements = ["div", "p", "span", "a", "img", "button"]
    js_code = "document.addEventListener('DOMContentLoaded', function() {\n"

    # Generate random DOM manipulation actions
    for _ in range(random.randint(3, 5)):
        # Select a random HTML element and DOM action
        element = random.choice(elements)
        action = random.choice(["createElement", "removeChild", "appendChild", "setAttribute"])

        if action == "createElement":
            # Create a new element and append it to the body
            js_code += f'var el = document.createElement("{element}");\n'
            js_code += 'document.body.appendChild(el);\n'
        elif action == "removeChild":
            # Remove the first child of the body, if it exists
            js_code += 'if (document.body.firstChild) {\n'
            js_code += '  document.body.removeChild(document.body.firstChild);\n'
            js_code += '}\n'
        elif action == "setAttribute":
            # Set a random attribute on the body element
            js_code += f'document.body.setAttribute("data-test", "{random.randint(1, 100)}");\n'

    js_code += "});"
    return js_code


def generate_random_dom_script():
    """
    Generates JavaScript code for DOM manipulation.
    Returns a string containing JavaScript code.
    """
    elements = ["div", "p", "span", "a", "img", "button"]
    js_code = "document.addEventListener('DOMContentLoaded', function() {\n"

    # Generate random DOM manipulation actions
    for _ in range(random.randint(3, 5)):
        # Select a random HTML element and DOM action
        element = random.choice(elements)
        action = random.choice(["createElement", "removeChild", "appendChild", "setAttribute"])

        if action == "createElement":
            # Create a new element and append it to the body
            js_code += f'var el = document.createElement("{element}");\n'
            js_code += 'document.body.appendChild(el);\n'
        elif action == "removeChild":
            # Remove the first child of the body, if it exists
            js_code += 'if (document.body.firstChild) {\n'
            js_code += '  document.body.removeChild(document.body.firstChild);\n'
            js_code += '}\n'
        elif action == "setAttribute":
            # Set a random attribute on the body element
            js_code += f'document.body.setAttribute("data-test", "{random.randint(1, 100)}");\n'

    js_code += "});"
    return js_code


def generate_complex_html():
    tags = ["div", "p", "span", "a", "script", "style", "img", "iframe"]
    attributes = ["id", "class", "style", "src", "href", "onclick", "data-test", "target", "rel"]

    html_structure = ""
    for _ in range(random.randint(8, 15)):
        tag = random.choice(tags)
        attr_string = ""
        for _ in range(random.randint(1, 4)):
            attr = random.choice(attributes)
            value = "".join(random.choices("abcdefghijklmnopqrstuvwxyz0123456789", k=5))
            attr_string += f'{attr}="{value}" '
        if tag == "iframe":
            html_structure += f'<{tag} {attr_string} src="javascript:alert(\'XSS\')"></{tag}>\n'
        elif tag == "script":
            html_structure += f'<{tag}>alert("Injected JS");</{tag}>\n'
        else:
            html_structure += f'<{tag} {attr_string}>Sample Content</{tag}>\n'
    return html_structure


import random


def generate_complex_html():
    """
    Generates a complex HTML structure with nested tags, iframes, and embedded scripts.
    Returns a string containing HTML code.
    """
    tags = ["div", "p", "span", "a", "script", "style", "img", "iframe", "form", "input", "object"]
    attributes = ["id", "class", "style", "src", "href", "onclick", "title", "alt", "data-test", "target", "rel",
                  "name"]

    # Start building a complex HTML structure
    html_structure = ""

    for _ in range(random.randint(10, 20)):  # Increased number of tags
        tag = random.choice(tags)
        attribute_string = ""

        # Generate random attributes for each tag
        for _ in range(random.randint(1, 4)):  # Increase attributes to enhance complexity
            attr = random.choice(attributes)
            value = "".join(random.choices("abcdefghijklmnopqrstuvwxyz0123456789", k=5))
            attribute_string += f'{attr}="{value}" '

        # Special handling for certain tags
        if tag == "iframe":
            # Embed a script or nested iframe to simulate potential XSS or iframe-based issues
            html_structure += f'<{tag} {attribute_string} src="javascript:alert(\'XSS\')"></{tag}>\n'
        elif tag == "script":
            # Insert inline JavaScript that might cause an alert
            html_structure += f'<{tag}>alert("Injected JavaScript");</{tag}>\n'
        elif tag == "form":
            # Add a form with input fields
            html_structure += f'<{tag} {attribute_string} action="submit.php" method="post">\n'
            html_structure += f'<input type="text" name="user" value="test">\n'
            html_structure += '</form>\n'
        elif tag == "object":
            # Add an object tag to test multimedia or embedded content parsing
            html_structure += f'<{tag} {attribute_string} data="data.swf"></{tag}>\n'
        else:
            # Add generic opening and closing tags with optional content
            html_structure += f'<{tag} {attribute_string}>Sample Content</{tag}>\n'

    return html_structure


def mutate_html(html):
    """
    Applies mutation-based fuzzing techniques to an HTML string.
    Mutates elements by encoding tags, modifying attributes, or adding comments.
    """
    # Define a list of mutations to apply
    mutations = [
        lambda s: s.replace("<", "&lt;"),  # Encode all opening tags
        lambda s: s.replace(">", "&gt;"),  # Encode all closing tags
        lambda s: s.replace("div", "span"),  # Replace <div> with <span>
        lambda s: s + "<!-- random comment -->",  # Append a comment
        lambda s: s.replace("alert", "console.log"),  # Replace alert with console.log in scripts
        lambda s: s.replace("src=", "srcdoc="),  # Change src attribute to srcdoc in iframes
        lambda s: s.replace("href", "data-href")  # Modify href attribute
    ]

    # Apply a subset of random mutations to the HTML
    for mutation in random.sample(mutations, k=random.randint(1, len(mutations))):
        html = mutation(html)
    return html


def generate_complex_js():
    """
    Generates complex JavaScript with asynchronous functions, conditional logic, and DOM manipulation.
    Returns a string containing JavaScript code.
    """
    # Define functions, variables, and logic for JavaScript
    functions = ["alert", "console.log", "document.write", "eval", "setTimeout"]
    variables = ["x", "y", "i", "userData", "result"]
    js_code = ""

    # Generate variable declarations and function calls
    for _ in range(random.randint(5, 10)):
        func = random.choice(functions)
        var = random.choice(variables)
        value = random.randint(0, 100)
        js_code += f'let {var} = {value};\n{func}("{var} value is " + {var});\n'

    # Add conditional logic
    js_code += "if (Math.random() > 0.5) {\n"
    js_code += f'  console.log("Condition met with value:", {random.randint(100, 500)});\n'
    js_code += "} else {\n"
    js_code += '  alert("Random condition alert!");\n'
    js_code += "}\n"

    # Add an asynchronous function for further complexity
    js_code += """
    async function fetchData() {
        try {
            let response = await fetch("https://example.com/api");
            let data = await response.json();
            console.log("Fetched data:", data);
        } catch (error) {
            console.error("Fetch error:", error);
        }
    }
    fetchData();
    """

    # Add recursive or loop-based manipulation
    js_code += """
    function recursiveLog(n) {
        if (n <= 0) return;
        console.log("Recursive call:", n);
        recursiveLog(n - 1);
    }
    recursiveLog(3);
    """

    return js_code




# Original save_test_case function
def save_test_case(html, css, js, dom_script, filename="test_case.html"):
    """
    Combines HTML, CSS, JavaScript, and DOM manipulation code into a single HTML file.
    Saves the combined test case as a file.

    Parameters:
    - html: HTML code to be included in the file
    - css: CSS code to be included in the file
    - js: JavaScript code to be included in the file
    - dom_script: JavaScript code for DOM manipulation
    - filename: Name of the file to save the test case as
    """
    with open(filename, "w") as file:
        # Write the basic HTML structure
        file.write("<!DOCTYPE html>\n<html>\n<head>\n")
        file.write("<meta charset='UTF-8'>\n<title>Fuzzing Test Case</title>\n")

        # Insert CSS in a <style> tag
        file.write(f"<style>\n{css}\n</style>\n")
        file.write("</head>\n<body>\n")

        # Insert generated HTML content
        file.write(f"{html}\n")

        # Insert JavaScript code for general functions
        file.write(f"<script>\n{js}\n</script>\n")

        # Insert JavaScript code for DOM manipulation
        file.write(f"<script>\n{dom_script}\n</script>\n")

        file.write("</body>\n</html>")

    print(f"Test case saved as {filename}")


# Enhanced save_test_case function
def save_enhanced_test_case(html, css, js, dom_script, filename="enhanced_test_case.html"):
    """
    Combines enhanced HTML, CSS, JavaScript, and DOM manipulation code into a single HTML file.
    Saves the combined test case as a file with added complexity.

    Parameters:
    - html: Complex HTML code to be included in the file
    - css: Complex CSS code to be included in the file
    - js: Complex JavaScript code to be included in the file
    - dom_script: JavaScript code for complex DOM manipulation
    - filename: Name of the file to save the enhanced test case as
    """
    with open(filename, "w") as file:
        # Write the basic HTML structure with added meta tags
        file.write("<!DOCTYPE html>\n<html>\n<head>\n")
        file.write("<meta charset='UTF-8'>\n")
        file.write("<meta http-equiv='X-UA-Compatible' content='IE=edge'>\n")
        file.write("<meta name='viewport' content='width=device-width, initial-scale=1.0'>\n")
        file.write("<title>Enhanced Fuzzing Test Case</title>\n")

        # Insert CSS in a <style> tag
        file.write(f"<style>\n{css}\n</style>\n")
        file.write("</head>\n<body>\n")

        # Insert complex HTML content
        file.write(f"{html}\n")

        # Insert JavaScript code for general functions
        file.write(f"<script>\n{js}\n</script>\n")

        # Insert JavaScript code for complex DOM manipulation
        file.write(f"<script>\n{dom_script}\n</script>\n")

        file.write("</body>\n</html>")

    print(f"Enhanced test case saved as {filename}")


# Generating components for a basic test case
html_content = generate_random_html()  # Assume function is defined elsewhere
css_content = generate_random_css()    # Assume function is defined elsewhere
js_content = generate_random_js()      # Assume function is defined elsewhere
dom_script_content = generate_random_dom_script()  # Assume function is defined elsewhere

# Save the basic test case
save_test_case(html_content, css_content, js_content, dom_script_content, "random_test_case.html")


# Generating components for an enhanced test case
enhanced_html_content = generate_complex_html()  # Assume enhanced function is defined elsewhere
enhanced_css_content = generate_random_css()      # Using previous CSS generator
enhanced_js_content = generate_complex_js()       # Assume enhanced function is defined elsewhere
enhanced_dom_script_content = generate_random_dom_script()  # Using previous DOM script generator

# Save the enhanced test case
save_enhanced_test_case(enhanced_html_content, enhanced_css_content, enhanced_js_content, enhanced_dom_script_content, "enhanced_test_case.html")


def save_combined_test_case(filename="combined_test_case.html"):
    """
    Combines both basic and complex HTML, CSS, JavaScript, and DOM manipulation code into a single HTML file.
    Saves the combined test case as a file.

    Parameters:
    - filename (str): Name of the file to save the combined test case as
    """
    # Generate basic and complex components
    basic_html_content = generate_random_html()
    complex_html_content = generate_complex_html()

    basic_css_content = generate_random_css()
    complex_css_content = generate_random_css()  # Using the same CSS generator for simplicity

    basic_js_content = generate_random_js()
    complex_js_content = generate_complex_js()

    basic_dom_script_content = generate_random_dom_script()
    complex_dom_script_content = generate_random_dom_script()  # You could create a more complex DOM generator if desired

    with open(filename, "w") as file:
        # Write the basic HTML structure with meta tags
        file.write("<!DOCTYPE html>\n<html>\n<head>\n")
        file.write("<meta charset='UTF-8'>\n")
        file.write("<meta http-equiv='X-UA-Compatible' content='IE=edge'>\n")
        file.write("<meta name='viewport' content='width=device-width, initial-scale=1.0'>\n")
        file.write("<title>Combined Fuzzing Test Case</title>\n")

        # Insert both basic and complex CSS within <style> tags
        file.write("<style>\n")
        file.write("/* Basic CSS */\n")
        file.write(f"{basic_css_content}\n")
        file.write("/* Complex CSS */\n")
        file.write(f"{complex_css_content}\n")
        file.write("</style>\n")

        file.write("</head>\n<body>\n")

        # Insert both basic and complex HTML content
        file.write("<!-- Basic HTML -->\n")
        file.write(f"{basic_html_content}\n")
        file.write("<!-- Complex HTML -->\n")
        file.write(f"{complex_html_content}\n")

        # Insert both basic and complex JavaScript in separate <script> tags
        file.write("<script>\n// Basic JavaScript\n")
        file.write(f"{basic_js_content}\n</script>\n")

        file.write("<script>\n// Complex JavaScript\n")
        file.write(f"{complex_js_content}\n</script>\n")

        # Insert both basic and complex DOM manipulation scripts
        file.write("<script>\n// Basic DOM Manipulation\n")
        file.write(f"{basic_dom_script_content}\n</script>\n")

        file.write("<script>\n// Complex DOM Manipulation\n")
        file.write(f"{complex_dom_script_content}\n</script>\n")

        file.write("</body>\n</html>")

    print(f"Combined test case saved as {filename}")


# Generate and save the combined test case
save_combined_test_case("combined_test_case.html")