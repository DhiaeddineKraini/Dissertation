// META: global=window,worker
'use strict';

function performMicrotaskCheckpoint() {
    document.createNodeIterator(document, -1, {
        acceptNode() {
            return NodeFilter.FILTER_ACCEPT;
        }
    }).nextNode();
}

test(() => {
    // Add a getter for "then" that will incidentally be invoked
    // during promise resolution.
    Object.prototype.__defineGetter__('then', () => {
        // Clean up behind ourselves.
        delete Object.prototype.then;

        // This promise should (like all promises) be resolved
        // asynchronously.
        var executed = false;
        Promise.resolve().then(_ => { executed = true; });

        // This shouldn't run microtasks!  They invoking the getter installed above.
    readable.getReader().read();
}, "reading from a stream should occur in a microtask scope");
