// Mutation Observer Example
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

let injectedDiv = document.createElement('div');
injectedDiv.textContent = 'Dynamic Content Added with Nested Structures';
injectedDiv.style.border = '2px solid green';
injectedDiv.style.padding = '20px';
document.body.appendChild(injectedDiv);
for (let i = 0; i < 5; i++) { let child = document.createElement('div'); child.textContent = `Child ${i}`; injectedDiv.appendChild(child); }