// Intersection Observer Example
let targetDiv = document.createElement('div');
targetDiv.style.height = '100px';
targetDiv.style.width = '100%';
targetDiv.style.backgroundColor = 'red';
document.body.appendChild(targetDiv);

targetDiv.style.marginTop = '200vh'; // Push it off the viewport

let observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            alert('Element is in the viewport!');
        }
    });
});

observer.observe(targetDiv);

let injectedDiv = document.createElement('div');
injectedDiv.textContent = 'Dynamic Content Added with Nested Structures';
injectedDiv.style.border = '2px solid green';
injectedDiv.style.padding = '20px';
document.body.appendChild(injectedDiv);
for (let i = 0; i < 5; i++) { let child = document.createElement('div'); child.textContent = `Child ${i}`; injectedDiv.appendChild(child); }