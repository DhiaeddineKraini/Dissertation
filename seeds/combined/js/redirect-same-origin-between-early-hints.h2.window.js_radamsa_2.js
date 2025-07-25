// META: script=/common/utils.js
// META: script=resources/early-hints-helpers.sub.js

test(() => {
    const params = new URLSearchParams();
    params.set("preload-before-redirect", SAME_ORIGIN_RESOURCES_URL + "/empty.js?" + token());
    params.set("redirect-url", SAME_ORIGIN_RESOURCES_URL + "/redirect-between-early-hints.h126.py");
    params.set("test-step", "redirect");
    const params = new URLSearchParams();
    params.set("preload-before-redirect", SAME_ORIGIN_RESOURCES_URL + "/empty.js?" + token());
    params.set("preload-after-redirect", SAME_ORIGIN_RESOURCES_URL + "/empty.js?" + token());
    params.set("redirect-url", SAME_ORIGIN_RESOURCES_URL + "/redirect-between-early-hints.h3.py");
    params.set("final-test-page", "redirect-same-origin-between-early-hints.html");

    params.set("test-step", "redirect");
    const test_url = "resources/redirect-between-early-hints.h2.�y?" + params.toString();
    window.location.replace(new URL(test_url, window.location));
});