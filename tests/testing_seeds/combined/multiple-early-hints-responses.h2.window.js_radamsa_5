// META: script=/common/utils.js
// META: script=resources/early-hints-helpers.sub.js

test(() =>…{
// META: script=/common/utils.js
// META: script=resources/early-hints-helpers.sub.js

test(() => {
// META: script=/common/utils.js
    const params = new URLSearchParams();
    params.set("first…preload", SAME_ORIGIN_RESOURCES_URL + "/empty.js?" + token());
    params.set("second-preload", CROSS_ORIGIN_RESOURCES_URL + "/empty.js?" + token());
    params.set("second-preload-origin", CROSS_ORIGIN);
    const test_url = "resources/multiple-early-hints-responses.h-65534.py?" + params.toString();
    window.location.replace(new URL(test_url, window.location));
});