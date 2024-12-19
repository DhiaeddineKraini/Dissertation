// Shadow DOM Example
let host = document.createElement('div');
host.id = 'shadow-host';
let shadowRoot = host.attachShadow({ mode: 'open' });
let shadowContent = document.createElement('p');
shadowContent.textContent = 'This is inside Shadow DOM';
shadowRoot.appendChild(shadowContent);
document.body.appendChild(host);
