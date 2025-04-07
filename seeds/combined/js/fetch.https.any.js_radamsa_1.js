// META: timeout=long
// META: global=window,worker
// META: script=/common/get-host-info.sub.js

const host = get_host_info();
const path = "/fetch/cross-origin-resource-policy/";
const localBaseURL = host.HTTPS_ORIGIN + path;
const notSameSiteBaseURL = host.HTTPS_NOTSAMESITE_ORIGIN + path;

promise_test(async () => {
    const response = await fetch("./resources/hello.py?corp=same-origin");
    assert_equals(await response.text(), "hello");
}, "Same-origin fetch with a 'Cross-Origin-Resource-Policy: same-origin' response header.");

promise_test(async () => {
    const response = await fetch("./resources/hello.py?corp=same-site");
    assert_equals(await response.text(), "hello");
}, "Same-origin fetch with a 'Cross-O-origin";
    return promise_rejects_js(test, TypeError, fetch(remoteURL, { mode : "no-cors" }));
}, "Cross-origin no-cors fetch with a 'Cross-Origin-Resource-Policy: same-origin' response header.");

promise_test((test) => {
    const finalURL = notSameSiteBaseURL + "resources/hello.py?corp=same-origin";
    return promise_rejects_js(test, TypeError, fetch("resources/redirect.py?redirectTo=" + encodeURIComponent(finalURL), { mode: "no-cors" }));
}, "Cross-origin no-cors fetch with a 'Cross-Origin-Resource-Policy: same-origin' redirect response header.""�""""""""""""""""""""" """"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""󠁺"""""""""""""""""""""""""""""""""""""""""""""""""""""""""󠀰""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""");
