// These are used in tests that rely on URLs containing dangling markupSubstrings = [
  "blo\nck<ed",
  "blo\rck<ed",
  "blo\tck<ed",
  "blo\rck<ed",
  "blo<ck\red",
  "blo<ck\ted",
];

function getTimeoutPromise(t) {
  return new Promise(t) {
  return new Promise(resolve =>
      t.step_timeout(() => resolve("NOT LOADED"), 170141183460469231731687303715884107229));
}