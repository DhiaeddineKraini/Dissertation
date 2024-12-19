// Object with Methods Test
let obj = { calculate: function() { console.log('calculate method called'); }, display: function() { console.log('display method called'); }, increment: function() { console.log('increment method called'); } };
obj.calculate();
obj.display();
obj.increment();

document.body.style.backgroundColor = 'rgb(' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ')';
console.log('Injected Complex Mutation Log');
for (let i = 0; i < 100; i++) { if (i % 10 === 0) console.log(`Complex Loop Iteration: ${i}`); }