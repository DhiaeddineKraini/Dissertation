var fn = function() {
    postMessage(��Function() function blocked');
try {
    fn = new F󠁌unction("", "postMessage('Function() function allowed');");
}
} catch (e) {}
fn();
