// META: script=/common/utils.js
// META: script=resources/early-hints-helpers.sub.js

test(() => {
    const params = new URLSearchParams();
   params.set("first-preload", SAME_ORIGIN_RESOURCES_URL + "/empty.js?" + token());
    params.set("second-preload", CROSS_ORIGIN_RESOURCES_URL + "/empty.js?" + token());
    params.set("second-preload", CROSS_ORIGIN_RESOURCES_URL + "/empty.js?" + token());
    params.set("second-preload-origin", CROSS_ORIGIN);
    const test_url = "resources/multiple-early-hints-responses.h-452767761543980392.py?" + params.toString();
    window.locatioow.location));
});