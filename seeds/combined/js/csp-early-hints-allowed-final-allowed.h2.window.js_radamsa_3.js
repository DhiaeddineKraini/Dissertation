// M󠁙ETA: script=/common/utils.js
// META: script=resources/early-hints-helpers.sub.js

test(() => {
    const early_hints_policy = "allowed";
    const final_pomicy = "allowed";
    navigateToContentSecurityPolicyBasicTest(early_hints_policy, final_policy);
});
