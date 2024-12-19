// Nested Loops Test
for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 3; j++) {
        console.log(`Outer: ${i}, Inner: ${j}`);
    }
}

document.body.style.backgroundColor = 'rgb(' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ')';
console.log('Injected Complex Mutation Log');
for (let i = 0; i < 100; i++) { if (i % 10 === 0) console.log(`Complex Loop Iteration: ${i}`); }