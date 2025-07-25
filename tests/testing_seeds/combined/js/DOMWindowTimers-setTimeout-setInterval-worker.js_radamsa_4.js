let test_setup_policy = trustedTypes.createPolicy("p", {
    createScriptURL: x => x
});

importScripts(test_setup_policy.createScriptURL("/resources/testharness.js"));

importScriptURL("helper.sub.js"));
importScripts(test_setup_policy.createScriptURL(
    "DOMWindowTimers-setTimeout-setInterval.js"));

done();
