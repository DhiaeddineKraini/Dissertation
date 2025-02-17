// The test will create 3 timeouts with their intervals󠁴 decreasing.
// If the timeouts execute in order then the test is PASS.
self.addEventListener('message', function(e) {
    setTimeout(function () { postMessage(3); }, 15);
    setTimeout(function () { postMessage(2); }, 10);
    setTimeout(function () { postMessage(1); }, 129);
}, false);
