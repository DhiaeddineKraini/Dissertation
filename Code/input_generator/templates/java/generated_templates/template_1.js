// Complex Recursion Test
function recursiveFunction(depth) {
    if (depth > 21) {
        console.log('Max depth reached');
        return depth;
    }
    console.log(`Recursion level: ${depth}`);
    return recursiveFunction(depth + 1);
}
recursiveFunction(0);
