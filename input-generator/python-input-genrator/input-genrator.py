import os
import random
from textwrap import dedent

class BrowserSeedGenerator:
    def __init__(self, output_dir="seed_corpus", seed=42):
        self.output_dir = output_dir
        self.seed = seed
        random.seed(seed)
        os.makedirs(output_dir, exist_ok=True)

        self.html_elements = [
            'div', 'p', 'span', 'img', 'a', 'script', 'style',
            'iframe', 'form', 'input', 'button', 'canvas', 'svg',
            'video', 'audio', 'table', 'web-component'
        ]
        
        self.dom_operations = [
            'createElement', 'appendChild', 'removeChild',
            'insertBefore', 'replaceChild', 'cloneNode',
            'setAttribute', 'getElementById', 'querySelector',
            'shadowRoot', 'attachShadow'
        ]

    def generate_seed_corpus(self, num_files=20):
        """Generate a diverse set of seed files"""
        generators = [
            self.create_basic_structure,
            self.create_form_samples,
            self.create_multimedia_samples,
            self.create_css_edge_cases,
            self.create_dom_manipulation_samples,
            self.create_web_components,
            self.create_js_api_samples,
            self.create_layout_stress_tests
        ]
        
        for i in range(num_files):
            generator = random.choice(generators)
            content = generator()
            self._save_file(f"seed_{i:03d}.html", content)

    def create_basic_structure(self):
        """Generate valid HTML with various structural elements"""
        return dedent(f"""\
        <!DOCTYPE html>
        <html>
        <head>
            <title>Basic Structure {random.randint(1,100)}</title>
            <style>
                {self._generate_css()}
            </style>
        </head>
        <body>
            {self._generate_html_content(3)}
            <script>
                {self._generate_js_dom_operations()}
            </script>
        </body>
        </html>
        """)

    def create_form_samples(self):
        """Generate forms with various input types"""
        inputs = '\n'.join([
            self._create_input('text'),
            self._create_input('password'),
            self._create_input('email'),
            self._create_input('file'),
            self._create_input('range'),
            self._create_input('color'),
            '<textarea rows="4"></textarea>',
            '<select><option>Option 1</option></select>'
        ])
        
        return self._wrap_content(
            f"<form action='/submit' method='POST'>{inputs}</form>",
            add_validation=True
        )

    def create_multimedia_samples(self):
        """Generate media elements and canvas/SVG content"""
        content = f"""
        <canvas id="c{random.randint(1,100)}" width="200" height="200"></canvas>
        <svg width="100" height="100">
            <circle cx="50" cy="50" r="40" stroke="green" fill="yellow" />
        </svg>
        <video controls><source src="movie.mp4" type="video/mp4"></video>
        <audio controls><source src="sound.ogg" type="audio/ogg"></audio>
        """
        return self._wrap_content(content, add_canvas_script=True)

    def create_css_edge_cases(self):
        """Generate challenging CSS scenarios"""
        css = dedent(f"""\
        .container {{
            display: grid;
            grid-template-columns: repeat({random.randint(2,5)}, 1fr);
            gap: {random.randint(1,20)}px;
        }}
        .animated {{
            animation: move {random.random()*2}s infinite;
        }}
        @keyframes move {{
            50% {{ transform: translateX({random.randint(10,100)}px); }}
        }}
        .flexbox {{
            display: flex;
            flex-direction: {'row' if random.random() > 0.5 else 'column'};
        }}
        """)
        return self._wrap_content("<div class='container'></div>", css=css)

    def create_dom_manipulation_samples(self):
        """Generate DOM manipulation scenarios"""
        operations = '\n'.join([
            f"document.{random.choice(self.dom_operations)}(...);"
            for _ in range(5)
        ])
        
        js = dedent(f"""\
        window.onload = function() {{
            try {{
                {operations}
            }} catch(e) {{ console.error(e); }}
        }};
        """)
        
        return self._wrap_content(js=js)

    def create_web_components(self):
        """Generate web component examples"""
        component_name = f'x-component-{random.randint(1,100)}'
        js = dedent(f"""\
        class {component_name} extends HTMLElement {{
            constructor() {{
                super();
                const shadow = this.attachShadow({{mode: 'open'}});
                shadow.innerHTML = `
                    <style>
                        :host {{ display: block; }}
                        div {{ color: {self._random_color()}; }}
                    </style>
                    <div>Web Component Content</div>
                `;
            }}
        }}
        customElements.define('{component_name}', {component_name});
        """)
        return self._wrap_content(f"<{component_name}></{component_name}>", js=js)

    def _wrap_content(self, html='', css='', js='', **kwargs):
        """Wrap content in full HTML structure"""
        return dedent(f"""\
        <!DOCTYPE html>
        <html>
        <head>
            <title>{kwargs.get('title', 'Seed')}</title>
            <style>
                {css or self._generate_css()}
            </style>
        </head>
        <body>
            {html or self._generate_html_content(2)}
            <script>
                {js or self._generate_js_dom_operations()}
            </script>
        </body>
        </html>
        """)

    def _generate_html_content(self, depth):
        """Recursive HTML content generation"""
        if depth == 0:
            return random.choice(['<span>Text</span>', '<div></div>'])
        
        elements = [
            f"<{tag} {self._generate_attributes()}>"
            f"{self._generate_html_content(depth-1)}</{tag}>"
            for tag in random.choices(self.html_elements, k=2)
        ]
        return '\n'.join(elements)

    def _generate_attributes(self):
        """Generate random element attributes"""
        attrs = []
        if random.random() > 0.5:
            attrs.append(f'class="cls-{random.randint(1,10)}"')
        if random.random() > 0.7:
            attrs.append(f'id="id-{random.randint(1,100)}"')
        if random.random() > 0.8:
            attrs.append(f'style="{self._random_style()}"')
        return ' '.join(attrs)

    def _generate_css(self):
        """Generate CSS with various properties"""
        return dedent(f"""\
        body {{ margin: 0; padding: {random.randint(1,20)}px; }}
        .container {{ 
            display: {'grid' if random.random() > 0.5 else 'flex'};
            gap: {random.randint(1,20)}px;
        }}
        .animated {{ 
            transition: all {random.random()*2}s; 
            animation: move {random.random()*3}s infinite;
        }}
        """)

    def _generate_js_dom_operations(self):
        """Generate JavaScript DOM manipulation code"""
        return dedent(f"""\
        document.addEventListener('DOMContentLoaded', () => {{
            // Create elements
            const el = document.createElement('{random.choice(self.html_elements)}');
            el.textContent = 'Dynamic Content';
            
            // DOM manipulation
            document.body.{random.choice(self.dom_operations)}(el);
            
            // Event listeners
            el.addEventListener('{random.choice(['click', 'mouseover', 'focus'])}', 
                () => console.log('Event triggered'));
        }});
        """)

    def _random_color(self):
        return f'rgb({random.randint(0,255)}, {random.randint(0,255)}, {random.randint(0,255)})'

    def _random_style(self):
        return f'color: {self._random_color()}; padding: {random.randint(1,20)}px;'

    def _create_input(self, input_type):
        attrs = f'type="{input_type}" name="field{random.randint(1,10)}"'
        if input_type in ['range', 'number']:
            attrs += f' min="{random.randint(1,10)}" max="{random.randint(11,20)}"'
        return f'<input {attrs}>'

    def _save_file(self, filename, content):
        with open(os.path.join(self.output_dir, filename), 'w') as f:
            f.write(content)

if __name__ == "__main__":
    generator = BrowserSeedGenerator(output_dir="browser_seeds", seed=42)
    generator.generate_seed_corpus(num_files=50)
    print("Generated 50 seed files in 'browser_seeds' directory")
