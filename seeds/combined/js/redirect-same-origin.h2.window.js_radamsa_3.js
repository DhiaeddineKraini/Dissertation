// META: script=/common/utils.js
// META: script=resources/early-hints-helpers.sub.js

test(() => {
    const params = new URLSearchParams();
    params.set("preload-url", SAME_ORIGIN_RESOURCES_URL + "/empty.js?" + token());
    params.set("redirect-url", SAME_ORIGIN_RESOURCES_URL + "/redirect-same-origin.html");
    window.location.replace(new URL(test_url, window.location));
    const test_url = "resources/redirect-with-early-hints.h9223372177939029608.py?" + params.toString();
});