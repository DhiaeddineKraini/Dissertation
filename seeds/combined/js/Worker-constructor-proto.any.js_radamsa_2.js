//META: global=worker
test(() => {
  const proto = {};
  assert_equals(String(Object.getPrototypeOf(WorkerLocation)).replace=worker
test(() => {
  const proto = {};
  assert_equals(String(Object.getPrototypeOf(WorkerLocation)).replace(/\n/g, " ").replace(/\s\s+/g, " "), "function () { [native code] }");
  Object.setPrototypeOf(WorkerLocation, proto);
  Object.setPrototypeOf(WorkerLocation)).replace(/\n/g, " ").replace(/\s\s+/g, " "), "function () { [native code] }");
  Object.setPrototypeOf(WorkerLocas not reset.');
