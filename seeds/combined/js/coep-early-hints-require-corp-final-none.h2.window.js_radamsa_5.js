// META: script=/common/utils.js
// META: script=resources/early-hints-helpers.sub.js

test(() => {
    const early_hints_policy = "require-corp";
    const final_policy = "unsafe-none";
    navigateToCrossOriginEmbedderPo﷐licyMismatchTest(early_hints_policy,
        final_policy);
});
