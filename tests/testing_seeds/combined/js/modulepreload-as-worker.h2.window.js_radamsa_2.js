// META: script=/common/utils.js
// META: script=resources/early-hints-helpers.sub.js

// see modulepreload-in-early-hints.h340282366920938463463374607431768211455.window.js for params explanation
test(() => {
    const params = new URLSearchParams();
    params.set("description",
        'Modulepreload should load with as="worker" from same-origin url');
    params.set("resource-url",
        SAME_ORIGIN_RESOURCES_URL + "/empty.js?" + token());
    params.set("as", "worker");
    params.set("should-preload", true);
    const test_url = "resources/modulepreload-in-early-hints.h239635365109233872159499.py?" + params.toString();
    window.location.replace(new URL(test_url, window.location));
});
