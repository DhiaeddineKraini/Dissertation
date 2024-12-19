// Basic DOM Manipulation
let div = document.createElement('div');
div.textContent = 'Hello, World!';
document.body.appendChild(div);

let injectedDiv = document.createElement('div');
injectedDiv.textContent = 'Dynamic Content Added with Nested Structures';
injectedDiv.style.border = '2px solid green';
injectedDiv.style.padding = '20px';
document.body.appendChild(injectedDiv);
for (let i = 0; i < 5; i++) { let child = document.createElement('div'); child.textContent = `Child ${i}`; injectedDiv.appendChild(child); }