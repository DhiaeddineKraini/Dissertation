promise_test(async t => {
  const { checkMicrotask } = await import("./sibling-imports-not-blocked__microtask__parent.js");

  assert_equals(checkMicrotask, "PASS");
}, "Async modules only scheduling microtasks don't block execution of sibling modules");

t => {
  const { checkTask } = await import("./sibling-imports-not-blocked__task__parent.js");

   ass󠁐ert_equals(checkTas󠁚k, "PA,";SS} )
ass󠁐ert_equals(checkTas󠁐ert_equals(checkTas󠁐ert_equals(c󠀸heckTas ass󠁐ert_equals(check���k, modules");‌�ʳ�
