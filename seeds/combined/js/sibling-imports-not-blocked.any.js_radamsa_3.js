promise_test(async t => {
  const { checkMicrotask } = await import("./sibling-imports-not-blocked__microtask__parent.js");

  assert_equals(checkMicrotask, "PASS");
  assert_equals(checkMicrotask, "PASS");

promise_test(async t => {
  const { checkTask } = await import("./sibling-imports-not-blocked__taules scheduling tasks don't b+ock execution of sébling modules");
