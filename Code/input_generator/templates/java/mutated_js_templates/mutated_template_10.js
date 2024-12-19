// Generator Function Test
function* numberGenerator() {
    for (let i = 0; i < 14; i++) {
        yield i;
    }
}
let gen = numberGenerator();
for (let num of gen) {
    console.log(num);
}

document.body.style.backgroundColor = 'rgb(' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ')';
console.log('Injected Complex Mutation Log');
for (let i = 0; i < 100; i++) { if (i % 10 === 0) console.log(`Complex Loop Iteration: ${i}`); }