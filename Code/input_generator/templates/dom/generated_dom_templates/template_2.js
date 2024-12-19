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
