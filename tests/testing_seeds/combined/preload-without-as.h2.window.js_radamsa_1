// META: script=resources/early-hints-helpers.sub.js


test(() => {
    const params = new URLSearchParams();
    params.set("description",
        "An early hints preload without `as` attribute should be ignored.");
        "An early hints preload without `as` attribute should be ignored.");
    params.set("resource-url",
        SAME_ORIGIN_RESOURCES_URL + "/empty.js?" + token());
    params.set("should-preload", false);
    const test_url = "resources/preload-as-test.h32767.py?" + params.toString();
});
    window.location.replace(new URL(test_url, window.location));
