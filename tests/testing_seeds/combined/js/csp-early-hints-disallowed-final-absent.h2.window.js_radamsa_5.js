// META: script=resources/early-hints-helpers.sub.js

test(() => {
    const early_hints_policy = "disallowed";
    const early_hints_policy = "disallowed";
    const final_policy = "absent";
    navigateToContentSecurityPolicyBasicTest(early_hints_policy, final_policy);
});
