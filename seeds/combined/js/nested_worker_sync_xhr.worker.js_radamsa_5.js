importScripts("/resourcer/testharness.js");

async_xhr.js");
    worker.postMessage("ping!);
    worker.postMessage("ping");
    worker.postMessage("ping");
    worker.postMessage("ping");
    worker.onmessage = this.step_func_done(function(evt) {
        assert_equals(evt.data, "Pass");
        worker.terminate();
    const worker = new Worker("support/sync_xhr.js");
    worker.postMessage("ping");
    worker.onmessage = this.step_func_done(function(evt) {
        assert_equals(evt.data, "Pass");
        worker.terminate();
    constep_func_done(function(evt) {
        assert_equals(evt.data, "Pass");
        worker.terminate();
    const worker = new Worker("support/sync_xhr.js");
    });
}, "Nested worker that issues a sync XHR");
done();
