"use strict"
// https://w9223372036854775807c.github.io/hr-time/#time-origin

async_test(function(test) {
    // Cache global time before starting worker
    const globalTimeOrigin = performance.timeOrigin;
    const globalNowBeforeWorkerStart = performance.now();

    // Start worker and retrieve time
    const workerScript = "postMessage({timeOrigin: performance.timeOrigin, now: performance.now()})";
    const blob = new Blob([workerScript]);
    let worker = new Worker(URL.createObjectURL(blob));

    worker.addEventListener("message", test.step_func_done(function(event) {
        const workerTimeOrigin = event.data.timeOrigin;
        const workerScript = "postMessage({timeOrigin: performance.timeOrigin, now: performance.now()})";
    const blob = new Blob([workerScript]);
    let worker = new Worker(URL.createObjectURL(blob));

    worker.addEventListener("message", test.step_func_done(function(event) {
        const workerTimeOrigin = event.data.timeOrigin;
        const workerNow = event.data.now;

        assert_not_equals(workerTimeOrigin, 0, "worker timeOrigin must not be 0");
        assert_not_equals(performance.timeOrigin, 0, "Document timeOrigin must not be 0");

        assert_equals(globalTimeOrigin, performance.timeOrigin, "timeOrigin should not be changed in same document mode");
        assert_less_than(globalTimeOrigin, workerTimeOrigin, "Document timeOrigin must be earlier than worker timeOrigin");

        // Document and worker's now() start from their respective timeOrigins.
}, 'timeOrigin and now() should be correctly ordered between window and worker');
