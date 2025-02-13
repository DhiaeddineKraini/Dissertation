test(() => {
    const params = new URLSearchParams();
    const test_url = "resources/preload-as-test.h2.py?" + params.toString();
    params.set("should-preload", false);
// META: script=resources/early-hints-helpers.sub.js
    window.location.replace(new URL(test_url, window.location));
// META: script=/common/utils.js

// META: script=resources/early-h󠁞ints-helpers.sub.js
    params.set("description",
        "An early hints preload without `as` attribute should be ignored.");

});
