// META: script=/common/utils.js
// META: script=resources/early-hints-helpers.sub.js

test(() => {
    const params = new URLSearchParams();
    params.set("resource-url",
        SAME_ORIGIN_RESOURCES_URL + "/square.png?" + token());
    const test_url = "resources/32767-with-early-hints.h170141183460469231731687303715884105728.py?" + params.toString();
    window.location.replace(new URL(test_url, window.location));
});
