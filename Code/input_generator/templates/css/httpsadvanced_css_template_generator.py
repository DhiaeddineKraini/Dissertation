import random
import os

def generate_basic_css():
    return """/* Basic CSS Template */
body {
    background-color: white;
    color: black;
    font-family: Arial, sans-serif;
}

h1 {
    text-align: center;
    margin-top: 20px;
}
"""

def generate_responsive_css():
    return """/* Responsive CSS Template */
body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
}

.container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.card {
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    margin: 10px;
    padding: 20px;
    flex: 1 1 calc(33.333% - 20px);
    box-sizing: border-box;
}

@media screen and (max-width: 768px) {
    .card {
        flex: 1 1 calc(50% - 20px);
    }
}

@media screen and (max-width: 480px) {
    .card {
        flex: 1 1 100%;
    }
}
"""

def generate_animated_css():
    animation_name = f"fadeIn{random.randint(1, 100)}"
    return f"""/* Animated CSS Template */
@keyframes {animation_name} {{
    from {{
        opacity: 0;
        transform: translateY(20px);
    }}
    to {{
        opacity: 1;
        transform: translateY(0);
    }}
}}

.element {{
    animation: {animation_name} 2s ease-in-out;
}}
"""

def generate_dark_mode_css():
    return """/* Dark Mode CSS Template */
body {
    background-color: #121212;
    color: #ffffff;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

h1, h2, h3 {
    color: #bb86fc;
}

button {
    background-color: #3700b3;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background-color: #6200ea;
}
"""

def generate_advanced_grid_css():
    return """/* Advanced Grid CSS Template */
.container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    padding: 20px;
}

.item {
    background-color: #f0f0f0;
    border: 1px solid #ddd;
    text-align: center;
    padding: 40px;
    font-size: 1.2em;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
}

.item:hover {
    background-color: #e0e0e0;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
}
"""

def generate_gradient_css():
    return """/* Gradient CSS Template */
body {
    background: linear-gradient(45deg, #ff9a9e, #fad0c4);
    min-height: 100vh;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Roboto', sans-serif;
}

h1 {
    background: linear-gradient(90deg, #fbc2eb, #a18cd1);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 3rem;
}
"""

def generate_interactive_css():
    return """/* Interactive CSS Template */
button {
    padding: 10px 20px;
    font-size: 1rem;
    border: 2px solid transparent;
    background-color: #4caf50;
    color: white;
    border-radius: 5px;
    transition: all 0.3s ease;
    cursor: pointer;
}

button:hover {
    background-color: white;
    color: #4caf50;
    border-color: #4caf50;
}

button:active {
    background-color: #388e3c;
    color: white;
}
"""

def generate_neumorphism_css():
    return """/* Neumorphism CSS Template */
body {
    background: #e0e0e0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}

.card {
    background: #e0e0e0;
    border-radius: 10px;
    box-shadow: 7px 7px 15px #bebebe, -7px -7px 15px #ffffff;
    width: 200px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Arial', sans-serif;
    font-size: 1.2rem;
    text-align: center;
}

.card:hover {
    box-shadow: inset 7px 7px 15px #bebebe, inset -7px -7px 15px #ffffff;
}
"""

def generate_complex_css_templates(count=10):
    generators = [
        generate_basic_css,
        generate_responsive_css,
        generate_animated_css,
        generate_dark_mode_css,
        generate_advanced_grid_css,
        generate_gradient_css,
        generate_interactive_css,
        generate_neumorphism_css
    ]
    templates = []
    for _ in range(count):
        generator = random.choice(generators)
        templates.append(generator())
    return templates

def save_css_templates_to_files(templates, folder="generated_css_templates"):
    os.makedirs(folder, exist_ok=True)
    for idx, template in enumerate(templates, start=1):
        filename = os.path.join(folder, f"template_{idx}.css")
        with open(filename, "w") as file:
            file.write(template)

def main():
    count = 10  # Number of templates to generate
    templates = generate_complex_css_templates(count=count)
    save_css_templates_to_files(templates)
    print(f"Saved {count} CSS templates to the 'generated_css_templates' folder.")

if __name__ == "__main__":
    main()
