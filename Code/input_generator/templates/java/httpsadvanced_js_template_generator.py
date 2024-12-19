import random
import string
import os

def generate_basic_arithmetic():
    operations = ['+', '-', '*', '/', '%', '**']
    variables = ['x', 'y', 'z', 'num']
    num1, num2 = random.randint(1, 100), random.randint(1, 100)
    op = random.choice(operations)
    variable = random.choice(variables)
    return f"""// Basic Arithmetic Test
let {variable} = {num1} {op} {num2};
console.log({variable});
"""

def generate_nested_loops():
    outer_iterations = random.randint(2, 5)
    inner_iterations = random.randint(3, 10)
    return f"""// Nested Loops Test
for (let i = 0; i < {outer_iterations}; i++) {{
    for (let j = 0; j < {inner_iterations}; j++) {{
        console.log(`Outer: ${{i}}, Inner: ${{j}}`);
    }}
}}
"""

def generate_object_with_methods():
    methods = ["calculate", "display", "increment"]
    key_value_pairs = [
        f"{method}: function() {{ console.log('{method} method called'); }}"
        for method in methods
    ]
    obj_items = ', '.join(key_value_pairs)
    return f"""// Object with Methods Test
let obj = {{ {obj_items} }};
obj.calculate();
obj.display();
obj.increment();
"""

def generate_dom_event_handler():
    event_types = ["click", "mouseover", "keydown", "keyup"]
    event = random.choice(event_types)
    element_id = f"element{random.randint(1, 100)}"
    return f"""// DOM Event Handler Test
document.body.innerHTML = '<button id="{element_id}">Click Me</button>';
let button = document.getElementById('{element_id}');
button.addEventListener('{event}', () => {{
    console.log('Event {event} triggered');
}});
button.dispatchEvent(new Event('{event}'));
"""

def generate_async_with_error_handling():
    delay = random.randint(1000, 5000)
    return f"""// Asynchronous with Error Handling Test
async function fetchData() {{
    try {{
        let result = await new Promise((resolve, reject) => {{
            setTimeout(() => reject('Error occurred!'), {delay});
        }});
        console.log(result);
    }} catch (error) {{
        console.error(error);
    }}
}}
fetchData();
"""

def generate_deeply_nested_objects():
    levels = random.randint(3, 10)
    nested_object = "{\"key\": \"value\"}"
    for _ in range(levels):
        nested_object = f"{{\"nested\": {nested_object}}}"
    return f"""// Deeply Nested Object Test
let nestedObj = {nested_object};
console.log(JSON.stringify(nestedObj, null, 2));
"""

def generate_complex_recursion():
    max_depth = random.randint(20, 50)
    return f"""// Complex Recursion Test
function recursiveFunction(depth) {{
    if (depth > {max_depth}) {{
        console.log('Max depth reached');
        return depth;
    }}
    console.log(`Recursion level: ${{depth}}`);
    return recursiveFunction(depth + 1);
}}
recursiveFunction(0);
"""

def generate_large_map():
    map_size = random.randint(100, 500)
    entries = ', '.join([f"['key{i}', {random.randint(1, 100)}]" for i in range(map_size)])
    return f"""// Large Map Test
let largeMap = new Map([{entries}]);
console.log(largeMap.size);
"""

def generate_async_race():
    delay1 = random.randint(1000, 3000)
    delay2 = random.randint(2000, 5000)
    return f"""// Async Race Test
async function task1() {{
    return new Promise(resolve => setTimeout(() => resolve('Task 1 finished'), {delay1}));
}}
async function task2() {{
    return new Promise(resolve => setTimeout(() => resolve('Task 2 finished'), {delay2}));
}}
Promise.race([task1(), task2()]).then(result => console.log(result));
"""

def generate_proxy_test():
    return f"""// Proxy Object Test
let target = {{ key: 'value' }};
let proxy = new Proxy(target, {{
    get: (obj, prop) => {{
        console.log(`Accessed property: ${{prop}}`);
        return obj[prop] || 'default';
    }},
    set: (obj, prop, value) => {{
        console.log(`Set property: ${{prop}} to ${{value}}`);
        obj[prop] = value;
    }}
}});
proxy.newKey = 'newValue';
console.log(proxy.key, proxy.newKey);
"""

def generate_generator_test():
    return f"""// Generator Function Test
function* numberGenerator() {{
    for (let i = 0; i < {random.randint(5, 15)}; i++) {{
        yield i;
    }}
}}
let gen = numberGenerator();
for (let num of gen) {{
    console.log(num);
}}
"""

def generate_shadow_dom_test():
    return f"""// Shadow DOM Test
let host = document.createElement('div');
let shadowRoot = host.attachShadow({{ mode: 'open' }});
shadowRoot.innerHTML = '<p>Shadow DOM Content</p>';
document.body.appendChild(host);
console.log(shadowRoot.innerHTML);
"""

def generate_templates(count=10):
    generators = [
        generate_basic_arithmetic,
        generate_nested_loops,
        generate_object_with_methods,
        generate_dom_event_handler,
        generate_async_with_error_handling,
        generate_deeply_nested_objects,
        generate_complex_recursion,
        generate_large_map,
        generate_async_race,
        generate_proxy_test,
        generate_generator_test,
        generate_shadow_dom_test
    ]
    templates = []
    for _ in range(count):
        generator = random.choice(generators)
        templates.append(generator())
    return templates

def save_templates_to_files(templates, folder="generated_templates"):
    os.makedirs(folder, exist_ok=True)
    for idx, template in enumerate(templates, start=1):
        filename = os.path.join(folder, f"template_{idx}.js")
        with open(filename, "w") as file:
            file.write(template)

def main():
    count = 10  # Number of templates to generate
    templates = generate_templates(count=count)
    save_templates_to_files(templates)
    print(f"Saved {count} templates to the 'generated_templates' folder.")

if __name__ == "__main__":
    main()
