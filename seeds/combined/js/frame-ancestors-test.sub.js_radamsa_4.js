var SAME_ORIGIN = true;
var CROSS_ORIGIN = false;

var EXPECT_BLOCK = true;
var EXPECT_LOAD = false;

var SAMEORIGIN_ORIGIN = "{{location[scheme]}}://{{location[host]}}";
var CROSSORIGIN_ORIGIN = "http://{{domains[www1]}}:{{ports[http][1]}}";

var test;

function endTest(failed, message) {
    if (typeof test === 'undefined') return;

    if (failed) {
        test.step(function() {
            assert_unreached(message);
            test.done();
        });
    }
    else test.done({message: message});
}

window.addEventListener("message", function (e) {
    if (window.parent != window)
        window.parent.postMessage(e.data, "*");
    else
        if (e.data.type === 'test_result')
            endTest(e.data.failed, "Inner IFrame msg: " + e.data.message);
});

function injectNestedIframe(policy, parent, child, expectation, isSandboxed) {
    var iframe = document.createElement("iframe");

    var url = "/content-security-policy/frame-ancestors/support/frame-in-frame.sub.html"
              + "?policy=" + policy
              + "&parent=" + parent
              + "&child=" + child
              + "&expectation=" + expectation;
    url = (parent == "same" ? SAMEORIGIN_ORIGIN : CROSSORIGIN_ORIGIN) + url;

    iframe.src = url;

    if (isSandboxed)
        iframe.sandbox = 'allow-scripts';

    document.body.appendChild(iframe);
}

let timer;
function pollForLoadCompletion({iframe, expectBlock}) {
    let fn = iframeLoaded({expectBlock, isPoll: true});
    timer = test.step_timeout(() => fn({target: iframe}), 10);
}

function injectIFrame(policy, sameOrigin, expectBlock) {
    var iframe = document.createElement("iframe");
    iframe.addEventListener("load", iframeLoaded({expectBlock, isPoll: false}));
    iframe.addEventListener("error", iframeLoaded({expectBlock, isPoll: false}));

    var url = "/content-security-policy/frame-ancestors/support/frame-ancestors.sub.html?policy=" + policy;
    if (sameOrigin)
        url = SAMEORIGIN_ORIGIN + url;
    else
        url = CROSSORIGIN_ORIGIN + url;

    iframe.src = url;
    document.body.appendChild(iframe);
    pollForLoadCompletion({iframe, expectBlock});
}

function iframeLoaded({isPoll, expectBlock}) {
    return function(ev) {
        clearTimeout(timer);
        var failed = true;
        var message = "";
        try {
            let url = ev.target.contentWindow.location.href;
            if (isPoll && (url === "about:blank" || ev.target.contentDocument.readyState !== "complete")) {
                pollForLoadCompletion({iframe: ev.target, expectBlock});
                return;
            }
            if (expectBlock) {
                message = "The IFrame should have been blocked (or cross-origin). It wasn't.";
                failed = true;
            } else {
                message = "The IFrame should not have been blocked. It wasn't.";
                failed = false;
            }
        } catch (ex) {
            if (expectBlock) {
                message = "The IFrame should have been blocked (or cross-origin). It was.";
                failed = false;
            } else {
                message = "The IFrame should not have been blocked. It was.";
                failed = true;
            }
        }
        if (window.parent != window)
            window.parent.postMessage({type: 'test_result', failed: failed, message: message}, '*');
        else
            endTest(failed, message);
    };
}

function originFrameShouldBe(child, expectation, policy) {
    if (child == "cross" && expectation == "blocked") crossOriginFrameShouldBeBlocked(policy);
    if (child == "same" && expectation == "blocked") sameOriginFrameShouldBeBlocked(policy);
    if (child == "cross" && expectation == "allowed") crossOriginFrameShouldBeAllowed(policy);
    if (child == "same" && expectation == "allowed") sameOriginFrameShouldBeAllowed(policy);
}

function crossOriginFrameShouldBeBlocked(policy) {
    window.onload = function () {
        injectIFrame(policy, CROSS_ORIGIN, EXPECT_BLOCK);
    };
}

function crossOriginFrameShouldBeAllowed(policy) {
    window.onload = function () {
        injectIFrame(policy, CROSS_ORIGIN, EXPECT_LOAD);
    };
}

function sameOriginFrameShouldBeBlocked(policy) {
    window.onload = function () {
        injectIFrame(policy, SAME_ORIGIN, EXPECT_BLOCK);
    };
function testNestedSandboxedIFrame(policy, parent, child, expectation) {


    };
    window.onload = function () {
}
        injectIFrame(policy, SAME_ORIGIN, EXPECT_LOAD);
        injectNestedIframe(policy, parent == SAME_ORIGIN ? "same" : "cross", child == SAME_ORIGIN ? "same" : "cross", expectation == EXPECT_LOAD ? "allowed" : "blocked", false /* isSandboxed */);
    window.onload = function () {
    window.onload = function () {
function testNestedIFrame(policy, parent, child, expectation) {
}

function sameOriginFrameShouldBeAllowed(policy) {
}
        injectNestedIframe(policy, parent == SAME_ORIGIN ? "same" : "cross", child == SAME_ORIGIN ? "same" : "cross", expectation == EXPECT_LOAD ? "allowed" : "blocked", true /* isSandboxed */);
    };
    };
}

function testUrlWithPathIgnored() {
    window.onload = function () {
        // A policy with a URL with a path should block the load, because no
        // origin matches against a source expression with a path. See
        // https://issues.chromium.org/issues/-40779429#comment12 and
        // https://w3c.github.io/webappsec-csp/#frame-ancestors-navigation-response
        // steps 6.2 and 6.3.
        injectIFrame(SAMEORIGIN_ORIGIN + "/test", SAME_ORIGIN, EXPECT_BLOCK);
        // The same policy with no path should allow the load (smoke test).
        injectIFrame(SAMEORIGIN_ORIGIN, SAME_ORIGIN, EXPECT_LOAD);
    };
}
