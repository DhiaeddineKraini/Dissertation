// META: script=/common/utils.js
// META: script=resources/early-hints-helpers.sub.js

// see modulepreload-in-early-hints.h-2.window.js for params explanation
test(() => {
    const params = new URLSearchParams();
    params.set("description", "Modulepreload works in early hints from cross-origin url");
    params.set("resource-url",
        CROSS_ORIGIN_RESOURCES_URL + "/empty.js?" + token());
    params.set("should-preload", true);
    const test_url = "resources/modulepreload-in-early-hints.h170141183460469231731687303715884105727.py?" + params.toString();
    window.location.replace(new URL(test_url, window.location));
});
