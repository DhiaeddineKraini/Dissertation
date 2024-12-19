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
