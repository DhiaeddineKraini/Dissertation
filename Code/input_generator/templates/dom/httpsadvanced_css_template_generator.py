import random
import os

def generate_basic_dom():
    return """// Basic DOM Manipulation
let div = document.createElement('div');
div.textContent = 'Hello, World!';
document.body.appendChild(div);
"""

def generate_nested_dom():
    levels = random.randint(3, 7)
    nested_dom = "let container = document.createElement('div');\n" + \
                 "container.id = 'nested-container';\n"
    for i in range(1, levels + 1):
        nested_dom += f"let level{i} = document.createElement('div');\n" + \
                      f"level{i}.textContent = 'Level {i}';\n" + \
                      (f"level{i-1}.appendChild(level{i});\n" if i > 1 else "container.appendChild(level1);\n")
    nested_dom += "document.body.appendChild(container);\n"
    return f"""// Nested DOM Manipulation
{nested_dom}
"""

def generate_shadow_dom():
    return """// Shadow DOM Example
let host = document.createElement('div');
host.id = 'shadow-host';
let shadowRoot = host.attachShadow({ mode: 'open' });
let shadowContent = document.createElement('p');
shadowContent.textContent = 'This is inside Shadow DOM';
shadowRoot.appendChild(shadowContent);
document.body.appendChild(host);
"""

def generate_dynamic_content_loading():
    return """// Dynamic Content Loading Example
let contentDiv = document.createElement('div');
contentDiv.id = 'content';
document.body.appendChild(contentDiv);

fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(data => {
        contentDiv.textContent = `Title: ${data.title}`;
    })
    .catch(error => {
        contentDiv.textContent = 'Failed to load content';
    });
"""

def generate_drag_and_drop():
    return """// Drag and Drop Example
let dragItem = document.createElement('div');
dragItem.id = 'drag-item';
dragItem.style.width = '100px';
dragItem.style.height = '100px';
dragItem.style.backgroundColor = 'blue';
dragItem.draggable = true;
document.body.appendChild(dragItem);

let dropZone = document.createElement('div');
dropZone.id = 'drop-zone';
dropZone.style.width = '200px';
dropZone.style.height = '200px';
dropZone.style.border = '2px dashed black';
dropZone.style.marginTop = '20px';
document.body.appendChild(dropZone);

dragItem.addEventListener('dragstart', event => {
    event.dataTransfer.setData('text/plain', 'drag-item');
});

dropZone.addEventListener('dragover', event => {
    event.preventDefault();
});

dropZone.addEventListener('drop', event => {
    event.preventDefault();
    let data = event.dataTransfer.getData('text/plain');
    if (data === 'drag-item') {
        dropZone.appendChild(dragItem);
    }
});
"""

def generate_custom_event():
    return """// Custom Event Example
let customButton = document.createElement('button');
customButton.textContent = 'Trigger Custom Event';
document.body.appendChild(customButton);

let customEvent = new CustomEvent('customAction', {
    detail: { message: 'Custom event triggered!' }
});

customButton.addEventListener('customAction', event => {
    alert(event.detail.message);
});

customButton.addEventListener('click', () => {
    customButton.dispatchEvent(customEvent);
});
"""

def generate_mutation_observer():
    return """// Mutation Observer Example
let observedDiv = document.createElement('div');
observedDiv.id = 'observed-div';
observedDiv.textContent = 'Watch me change';
document.body.appendChild(observedDiv);

let observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
        console.log('Mutation detected:', mutation);
    });
});

observer.observe(observedDiv, { attributes: true, childList: true, subtree: true });

setTimeout(() => {
    observedDiv.textContent = 'I have changed!';
    observedDiv.setAttribute('data-changed', 'true');
}, 2000);
"""

def generate_intersection_observer():
    return """// Intersection Observer Example
let targetDiv = document.createElement('div');
targetDiv.style.height = '100px';
targetDiv.style.width = '100%';
targetDiv.style.backgroundColor = 'red';
document.body.appendChild(targetDiv);

targetDiv.style.marginTop = '200vh'; // Push it off the viewport

let observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            alert('Element is in the viewport!');
        }
    });
});

observer.observe(targetDiv);
"""

def generate_dom_templates(count=10):
    generators = [
        generate_basic_dom,
        generate_nested_dom,
        generate_shadow_dom,
        generate_dynamic_content_loading,
        generate_drag_and_drop,
        generate_custom_event,
        generate_mutation_observer,
        generate_intersection_observer
    ]
    templates = []
    for _ in range(count):
        generator = random.choice(generators)
        templates.append(generator())
    return templates

def save_dom_templates_to_files(templates, folder="generated_dom_templates"):
    os.makedirs(folder, exist_ok=True)
    for idx, template in enumerate(templates, start=1):
        filename = os.path.join(folder, f"template_{idx}.js")
        with open(filename, "w") as file:
            file.write(template)

def main():
    count = 10  # Number of templates to generate
    templates = generate_dom_templates(count=count)
    save_dom_templates_to_files(templates)
    print(f"Saved {count} DOM templates to the 'generated_dom_templates' folder.")

if __name__ == "__main__":
    main()
