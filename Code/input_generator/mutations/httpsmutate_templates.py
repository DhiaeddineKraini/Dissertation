import random
import os
import re

def mutate_html_template(template):
    template = re.sub(r'class="[^"]*"', lambda _: f'class="mutated-class-{random.randint(1, 100)}"', template)
    if random.random() < 0.5:
        template += "<marquee>Random HTML Mutation</marquee>"
    if random.random() < 0.5:
        nested_elements = "<div>" * 5 + "Nested Mutation" + "</div>" * 5
        template += nested_elements
    return template

def mutate_css_template(template):
    template += f"\n.random-class {{ margin-left: {random.randint(-100, 100)}px; margin-right: {random.randint(-100, 100)}px; }}"
    template += "\n@keyframes randomAnimation { from { transform: scale(1); } to { transform: scale(1.5); } }"
    template += "\nbody { animation: randomAnimation 3s infinite alternate; border: 5px dashed red; }"
    return template

def mutate_js_template(template):
    template += "\ndocument.body.style.backgroundColor = 'rgb(' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ')';"
    template += "\nconsole.log('Injected Complex Mutation Log');"
    template += "\nfor (let i = 0; i < 100; i++) { if (i % 10 === 0) console.log(`Complex Loop Iteration: ${i}`); }"
    return template

def mutate_dom_template(template):
    template += "\nlet injectedDiv = document.createElement('div');"
    template += "\ninjectedDiv.textContent = 'Dynamic Content Added with Nested Structures';"
    template += "\ninjectedDiv.style.border = '2px solid green';"
    template += "\ninjectedDiv.style.padding = '20px';"
    template += "\ndocument.body.appendChild(injectedDiv);"
    template += "\nfor (let i = 0; i < 5; i++) { let child = document.createElement('div'); child.textContent = `Child ${i}`; injectedDiv.appendChild(child); }"
    return template

def load_templates(folder, extension):
    files = [os.path.join(folder, f) for f in os.listdir(folder) if f.endswith(extension)]
    templates = []
    for file in files:
        with open(file, 'r') as f:
            templates.append(f.read())
    return templates

def save_mutated_templates(templates, output_folder, extension):
    os.makedirs(output_folder, exist_ok=True)
    for idx, template in enumerate(templates, start=1):
        filename = os.path.join(output_folder, f"mutated_template_{idx}{extension}")
        with open(filename, 'w') as file:
            file.write(template)

def main():
    # Folders where original templates are stored
    html_folder = "C:\\Users\\Admin\\OneDrive - Oxford Brookes University\\Dissertation\\Code\\input_generator\\templates\\html\\generated_html_templates"
    css_folder = "C:\\Users\\Admin\\OneDrive - Oxford Brookes University\\Dissertation\\Code\\input_generator\\templates\\css\\generated_css_templates"
    js_folder = "C:\\Users\\Admin\\OneDrive - Oxford Brookes University\\Dissertation\\Code\\input_generator\\templates\\java\\generated_templates"
    dom_folder = "C:\\Users\\Admin\\OneDrive - Oxford Brookes University\\Dissertation\\Code\\input_generator\\templates\\dom\\generated_dom_templates"

    # Folders to save mutated templates
    mutated_html_folder = "C:\\Users\\Admin\\OneDrive - Oxford Brookes University\\Dissertation\\Code\\input_generator\\templates\\html\\mutated_html_templates"
    mutated_css_folder = "C:\\Users\\Admin\\OneDrive - Oxford Brookes University\\Dissertation\\Code\\input_generator\\templates\\css\\mutated_css_templates"
    mutated_js_folder = "C:\\Users\\Admin\\OneDrive - Oxford Brookes University\\Dissertation\\Code\\input_generator\\templates\\java\\mutated_js_templates"
    mutated_dom_folder = "C:\\Users\\Admin\\OneDrive - Oxford Brookes University\\Dissertation\\Code\\input_generator\\templates\\dom\\mutated_dom_templates"

    # Load and mutate templates
    html_templates = load_templates(html_folder, ".html")
    css_templates = load_templates(css_folder, ".css")
    js_templates = load_templates(js_folder, ".js")
    dom_templates = load_templates(dom_folder, ".js")

    mutated_html = [mutate_html_template(template) for template in html_templates]
    mutated_css = [mutate_css_template(template) for template in css_templates]
    mutated_js = [mutate_js_template(template) for template in js_templates]
    mutated_dom = [mutate_dom_template(template) for template in dom_templates]

    # Save mutated templates
    save_mutated_templates(mutated_html, mutated_html_folder, ".html")
    save_mutated_templates(mutated_css, mutated_css_folder, ".css")
    save_mutated_templates(mutated_js, mutated_js_folder, ".js")
    save_mutated_templates(mutated_dom, mutated_dom_folder, ".js")

    print("Mutated templates saved successfully.")

if __name__ == "__main__":
    main()