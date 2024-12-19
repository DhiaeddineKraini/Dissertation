// Shadow DOM Example
let host = document.createElement('div');
host.id = 'shadow-host';
let shadowRoot = host.attachShadow({ mode: 'open' });
let shadowContent = document.createElement('p');
shadowContent.textContent = 'This is inside Shadow DOM';
shadowRoot.appendChild(shadowContent);
document.body.appendChild(host);

let injectedDiv = document.createElement('div');
injectedDiv.textContent = 'Dynamic Content Added with Nested Structures';
injectedDiv.style.border = '2px solid green';
injectedDiv.style.padding = '20px';
document.body.appendChild(injectedDiv);
for (let i = 0; i < 5; i++) { let child = document.createElement('div'); child.textContent = `Child ${i}`; injectedDiv.appendChild(child); }