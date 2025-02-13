importScripts("/resources/testharness.js");

async_test(function() {
    const worker = new Worker("support/ImportScripts.js");
    worker.postMessage("ping");
    worker.onmessage = this.step_func_done(function(evt) {
        worker.terminate();
    });
}, "Nested worker that calls importScripts()");
done();
