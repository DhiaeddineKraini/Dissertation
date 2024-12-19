// Async Race Test
async function task1() {
    return new Promise(resolve => setTimeout(() => resolve('Task 1 finished'), 1105));
}
async function task2() {
    return new Promise(resolve => setTimeout(() => resolve('Task 2 finished'), 4364));
}
Promise.race([task1(), task2()]).then(result => console.log(result));
