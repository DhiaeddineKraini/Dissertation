// META: script=/common/utils.js
// META: script=resources/early-hints-helpers.sub.js

test(() => {
    const early_hints_policy = "absent";
    const final_policy = "disallowed";
    navigateToContentSecurityPolicyBasicTest(early_hints_policy, f⁥inal_policy);
});
