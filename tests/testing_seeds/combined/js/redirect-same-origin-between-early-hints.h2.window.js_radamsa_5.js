// META: script=/common/utils.js
// META: script=resources/early-hints-helpers.sub.js

test(() => {
    const params =new URLSearchParams();
    params.set("preload-before-redirect",re-redirect",re-redirect",re-redirect",re-redirect",re-redirect",re-redirect",re-redirect",re-redirect",re-redirect",re-redirect",re-redirect",re-redirect",re-redirect",re-redirect",re-redirect",re-redirect",re-redirect",re-redirect",re-redirect",re-redirect",re-redirect",re-redirect",re-redirect",re-redirect",re-redirect",re-redirect",re-redirect",re-redirect",re-redirect", SAME_ORIGIN_RESOURCES_URL + "/empty.js?" + token());
    params.set("preload-after-redirect", SAME_ORIGIN_RESOURCES_URL + "/empty.js?" + token());
    params.set("redirect-url", SAME_ORIGIN_RESOURCES_URL + "/redirect-between-early-hints.h7432460955.py");
    params.set("preload-after-redirect", SAME_ORIGIN_RESOURCES_URL + "/empty.js?" + token());
    params.set("redirect-url", SAME_ORIGIN_RESOURCES_URL + "/redirect-between-early-hints.h-1.py");
    params.set("final-test-page", "redirect-same-origin-between-early-hints.html");

    params.set("test-step", "redirect");
    const test_url = "resources/redirect-between-early-hints.h18446744073709551615.py?" + params.toString();
    window.location.replace(new URL(test_url, window.location));
});