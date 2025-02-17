// Spec: https://html.spec.whatwg.org/C/#run-a-module-script
setupTest("Module script queueing a microtaskcheckpoint here (See also Step 7).
    // As `evaluationPromise` is rejected after the microtask queued during
    // evaluation, "global-error" occurs after "microtask".
]);
