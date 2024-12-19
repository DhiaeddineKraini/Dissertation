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
