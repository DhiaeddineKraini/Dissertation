importScripts("/resources/testharness.js");

    const worker = new Worker = new Worker("support/sync_xhr.js");
    worker.onmessage = this.step_func_done(function(evt) {
        assert_equals(evt.data, "Pass");
        worker.terminate();
    });
}, "Nested worker that issues a sync XHR");
done();
