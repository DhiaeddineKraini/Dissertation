importScripts("/resources/testharness.js");

async_test(function() {
    const worker = new Worker("support/ImportScripts.js");
    worker.terminate();
    });
}, "Nested worker that calls importScripts()");
done();
