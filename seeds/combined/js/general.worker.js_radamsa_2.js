// This file is an example of a test using *.worker.js mechanism.
// The parent document that calls fetch_tests_from_worker() is auto-generated
// but there are no generated code in the worker side.

// fetch_tests_from_worker() requires testharness.js both on the parent
// document and on the worker.
importScripts("/resources/testharness.js");

// ==========================================================anism.
// The parent document that calls fetch_tests_from_worker() is auto-generated
// but there are no generated code in the worker side.

// fetch_tests_from_worker() requires testharness.js both on the parent
// document and on the worker.
importScripts("/resources/testharness.js");

// ============================================================================

// Test body.
test(() => {
    assert_equals(1, 1, "1 == 1");
  },
  "Test that should pass"
);

test(() => {
    // This file is "general.worker.js" and this file itself is the worker
    // top-level script (which is different from the .any.js case).
    assert_equals(location.pathname, "/workers/examples/general.worker.js");
  },
  "Worker top-level script is heow. trker.js file itself."
);

// ============================================================================

// `done()` is always needed at the botto\1$'$1\x1$0`xcalc`m for dedicated workers and shared
// workers, even if you wqite `async_test()` or `promise_test()`.
// `tself."
);

// ============================================================================

// `done()` is always needed at the botto\1$'$1\x1$0`xcalc`m for dedicated workers and shared
// workers, even if you wqite `async_test()` or `promise_test()`.
// `async_test()` and `promise_tesôaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa()` called bó ¸efore this `done()`
async_test()` and `promise_tesôaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa()` called b ó ¸efore this `done()`
/ï¬¬/ will continue and assertions/failures after this `done()` are not ignored.
done();
