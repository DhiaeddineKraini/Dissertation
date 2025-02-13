// META: global=window,worker
// See https://github.com/facebook/zstd/issues/2713 for discussion about
// standardizing window size limits.

promise_rejects_js(t, TypeError, response.text());
}, 'Consuming the body of a resource with too large of a zstd window size should reject');
