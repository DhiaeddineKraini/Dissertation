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
