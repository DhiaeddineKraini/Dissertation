import random
import os

def generate_basic_html():
    return """<!-- Basic HTML Template -->
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Basic Page</title>
</head>
<body>
    <h1>Hello, World!</h1>
</body>
</html>
"""

def generate_nested_html():
    depth = random.randint(5, 10)
    nested_structure = "<div>Nested Level 1"
    for i in range(2, depth + 1):
        nested_structure += f"<div>Nested Level {i}"
    nested_structure += "</div>" * depth
    return f"""<!-- Nested HTML Template -->
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Nested Page</title>
</head>
<body>
    {nested_structure}
</body>
</html>
"""

def generate_interactive_form_html():
    form_id = f"form{random.randint(1, 100)}"
    return f"""<!-- Interactive Form HTML Template -->
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Interactive Form Page</title>
    <style>
        .error {{ color: red; }}
    </style>
    <script>
        function validateForm(event) {{
            const nameField = document.getElementById('name');
            if (!nameField.value) {{
                document.getElementById('error').textContent = 'Name is required!';
                event.preventDefault();
            }}
        }}
    </script>
</head>
<body>
    <form id="{form_id}" action="/submit" method="POST" onsubmit="validateForm(event)">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name">
        <span id="error" class="error"></span>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email">
        <button type="submit">Submit</button>
    </form>
</body>
</html>
"""

def generate_animated_html():
    animation_id = f"animation{random.randint(1, 100)}"
    return f"""<!-- Animated HTML Template -->
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Animated Page</title>
    <style>
        @keyframes fadeIn {{
            from {{ opacity: 0; }}
            to {{ opacity: 1; }}
        }}
        #{animation_id} {{
            animation: fadeIn 3s ease-in-out;
            background-color: lightblue;
            width: 200px;
            height: 100px;
            text-align: center;
            line-height: 100px;
        }}
    </style>
</head>
<body>
    <div id="{animation_id}">Hello Animation</div>
</body>
</html>
"""

def generate_advanced_table_html():
    rows = random.randint(5, 15)
    cols = random.randint(5, 10)
    table_rows = "".join([f"<tr>{''.join([f'<td>R{r}C{c}</td>' for c in range(1, cols + 1)])}</tr>" for r in range(1, rows + 1)])
    return f"""<!-- Advanced Table HTML Template -->
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Advanced Table Page</title>
    <style>
        table {{
            border-collapse: collapse;
            width: 100%;
        }}
        th, td {{
            border: 1px solid black;
            padding: 8px;
            text-align: left;
        }}
        th {{
            background-color: #f2f2f2;
        }}
    </style>
</head>
<body>
    <table>
        <thead>
            <tr>{''.join([f'<th>Header {c}</th>' for c in range(1, cols + 1)])}</tr>
        </thead>
        <tbody>
            {table_rows}
        </tbody>
    </table>
</body>
</html>
"""

def generate_canvas_drawing_html():
    return f"""<!-- Canvas Drawing HTML Template -->
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Canvas Drawing Page</title>
</head>
<body>
    <canvas id="myCanvas" width="400" height="400" style="border:1px solid #000;"></canvas>
    <script>
        const canvas = document.getElementById('myCanvas');
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = 'blue';
        ctx.fillRect(50, 50, 150, 150);
        ctx.beginPath();
        ctx.arc(200, 200, 70, 0, 2 * Math.PI);
        ctx.stroke();
    </script>
</body>
</html>
"""

def generate_dynamic_svg_html():
    shapes = [
        "<circle cx='50' cy='50' r='40' stroke='black' stroke-width='3' fill='red' />",
        "<rect x='100' y='100' width='120' height='80' style='fill:blue;stroke:black;stroke-width:3;' />",
        "<line x1='10' y1='10' x2='300' y2='150' style='stroke:rgb(255,0,0);stroke-width:2' />"
    ]
    svg_shapes = "\n".join(random.sample(shapes, random.randint(1, len(shapes))) + [
        "<text x='50' y='50' fill='green'>Hello SVG</text>"
    ])
    return f"""<!-- Dynamic SVG HTML Template -->
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Dynamic SVG Page</title>
</head>
<body>
    <svg height="300" width="400">
        {svg_shapes}
    </svg>
</body>
</html>
"""

def generate_html_templates(count=10):
    generators = [
        generate_basic_html,
        generate_nested_html,
        generate_interactive_form_html,
        generate_animated_html,
        generate_advanced_table_html,
        generate_canvas_drawing_html,
        generate_dynamic_svg_html
    ]
    templates = []
    for _ in range(count):
        generator = random.choice(generators)
        templates.append(generator())
    return templates

def save_templates_to_files(templates, folder="generated_html_templates"):
    os.makedirs(folder, exist_ok=True)
    for idx, template in enumerate(templates, start=1):
        filename = os.path.join(folder, f"template_{idx}.html")
        with open(filename, "w") as file:
            file.write(template)

def main():
    count = 10  # Number of templates to generate
    templates = generate_html_templates(count=count)
    save_templates_to_files(templates)
    print(f"Saved {count} templates to the 'generated_html_templates' folder.")

if __name__ == "__main__":
    main()