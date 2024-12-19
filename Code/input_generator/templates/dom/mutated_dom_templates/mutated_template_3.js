// Custom Event Example
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

let injectedDiv = document.createElement('div');
injectedDiv.textContent = 'Dynamic Content Added with Nested Structures';
injectedDiv.style.border = '2px solid green';
injectedDiv.style.padding = '20px';
document.body.appendChild(injectedDiv);
for (let i = 0; i < 5; i++) { let child = document.createElement('div'); child.textContent = `Child ${i}`; injectedDiv.appendChild(child); }