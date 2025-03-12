#!/usr/bin/env python3
"""
anomalies.py
------------
Contains all anomaly injection functions used by AnomalyEngine.
"""

import random
from bs4 import BeautifulSoup

def inject_memory_issues(soup, intensity):
    script = soup.new_tag('script')
    script.string = f"if(!window.leakPool) window.leakPool=[]; leakPool.push(new ArrayBuffer({int(5e5*intensity)}));"
    if soup.body:
        soup.body.append(script)

def corrupt_dom(soup, intensity):
    tags = soup.find_all(True)
    if not tags:
        return
    sample_sz = max(3, int(len(tags)*0.1))
    subset = random.sample(tags, min(sample_sz, len(tags)))
    for el in subset:
        r = random.random()
        if r < 0.4:
            el.decompose()
        elif r < 0.7:
            try:
                el.unwrap()
            except:
                pass
        else:
            el.append(BeautifulSoup("<invalid_tag>", 'html.parser'))

def generate_js_chaos(soup, intensity):
    payloads = [
        "for(let i=0;i<100;i++) document.write('<div>'+'a'.repeat(1000)+'</div>');",
        "window.onerror=function(){return true;};debugger();debugger();debugger();",
        "document.querySelectorAll('*').forEach(e=>e.remove());",
        "new Function(`for(let i=0;i<100;i++){}`)();"
    ]
    script = soup.new_tag('script')
    script.string = random.choice(payloads)
    if soup.body:
        soup.body.append(script)

def create_style_conflicts(soup, intensity, step):
    from bs4 import BeautifulSoup
    style = soup.new_tag('style')
    style.string = f"""
    .mutate-{step} {{
        position:{'absolute' if random.random()>0.5 else 'fixed'};
        transform:scale({random.uniform(0.1,2)});
        animation: mutate-{step} {random.randint(1,3)}s infinite;
    }}
    @keyframes mutate-{step} {{
        0%   {{opacity:{random.random()};}}
        50%  {{transform:rotate({random.randint(0,180)}deg);}}
        100% {{opacity:{random.random()};}}
    }}
    """
    if soup.head:
        soup.head.append(style)

def add_resource_exhaustion(soup, intensity):
    canvas = soup.new_tag('canvas', width='640', height='480')
    script = soup.new_tag('script')
    script.string = """
    if(!window.leakPool) window.leakPool=[];
    const ctx = document.querySelector('canvas').getContext('2d');
    let frameCount=0;
    function render(){
        if(frameCount++>100) return;
        ctx.fillStyle=`hsl(${Math.random()*360},100%,50%)`;
        ctx.fillRect(0,0,640,480);
        requestAnimationFrame(render);
    }
    render();
    """
    if soup.body:
        soup.body.extend([canvas, script])

def implement_event_entanglement(soup, intensity):
    tags = soup.find_all(True)
    for el in tags:
        if random.random() < 0.05*intensity:
            ev = random.choice(["click","mouseover","load","focus"])
            el[ev] = "document.body.innerHTML += '<div>';"*5

def target_webgpu(soup, intensity):
    if random.random() < 0.3:
        script = soup.new_tag('script')
        script.string = """
        if(navigator.gpu){
            navigator.gpu.requestAdapter().then(ad=>{
                if(ad) ad.requestDevice().then(dev=>{
                    console.log('WebGPU device created');
                });
            });
        }
        """
        if soup.body:
            soup.body.append(script)

def target_wasm_gc(soup, intensity):
    if random.random() < 0.2:
        script = soup.new_tag('script')
        script.string = """
        if(WebAssembly && typeof WebAssembly.GC === 'function'){
            console.log('Attempting experimental Wasm GC code...');
        }
        """
        if soup.body:
            soup.body.append(script)
