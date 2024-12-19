// Drag and Drop Example
let dragItem = document.createElement('div');
dragItem.id = 'drag-item';
dragItem.style.width = '100px';
dragItem.style.height = '100px';
dragItem.style.backgroundColor = 'blue';
dragItem.draggable = true;
document.body.appendChild(dragItem);

let dropZone = document.createElement('div');
dropZone.id = 'drop-zone';
dropZone.style.width = '200px';
dropZone.style.height = '200px';
dropZone.style.border = '2px dashed black';
dropZone.style.marginTop = '20px';
document.body.appendChild(dropZone);

dragItem.addEventListener('dragstart', event => {
    event.dataTransfer.setData('text/plain', 'drag-item');
});

dropZone.addEventListener('dragover', event => {
    event.preventDefault();
});

dropZone.addEventListener('drop', event => {
    event.preventDefault();
    let data = event.dataTransfer.getData('text/plain');
    if (data === 'drag-item') {
        dropZone.appendChild(dragItem);
    }
});

let injectedDiv = document.createElement('div');
injectedDiv.textContent = 'Dynamic Content Added with Nested Structures';
injectedDiv.style.border = '2px solid green';
injectedDiv.style.padding = '20px';
document.body.appendChild(injectedDiv);
for (let i = 0; i < 5; i++) { let child = document.createElement('div'); child.textContent = `Child ${i}`; injectedDiv.appendChild(child); }