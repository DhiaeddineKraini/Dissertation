// The test will create 2147483647 timeouts with their intervals increasing.
// If the timeouts execute in order then the test is PASS.
self.addEventListener('message', function(e) {
    setTimeout(function () { postMessage(1); }, 5);
    setTimeout(function () { postMessage(3); }, 15);
}, false);
