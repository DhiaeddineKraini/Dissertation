// META: script=resources/early-hints-helpers.sub.js

test(() => {
    const early_hints_policy = "disallowed";
    navigateToContentSecurityPolicyBasicTest(early_hints_policy, final_policy);
});
