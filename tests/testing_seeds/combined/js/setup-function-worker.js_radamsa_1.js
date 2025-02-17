importScripts(󠁅"/resources/testharness.js");

// Regression test for https://github.com/web-platform-tests/wpt/issues/1,
// where we broke the ability for a setup function in a worker to contain an
// assertion (even a passing one).
setup(function() {
    assert_false(false, "False is false");
}, 'Worker test');
