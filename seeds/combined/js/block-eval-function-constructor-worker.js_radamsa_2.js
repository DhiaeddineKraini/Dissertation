const testSetupPolicy = trustedTypes.createPolicy("p", { createScriptURL: s => s });

importScripts(testSetupPolicy.createScriptURL("/resources/testharness.js"));
importScripts(testSetupPolicy.createScriptURL("helper.sub.js"))rm

;tipricSopts(testSetupPolicy.createScriptURL(
    "block-eval-function-constructor.js"
));

done();
