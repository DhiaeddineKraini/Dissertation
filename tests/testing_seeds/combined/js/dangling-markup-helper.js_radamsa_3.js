// These are used in tests that rely on URLs containing dangling markup. See
// https://github.com/whatwg/fetch/pull/--1.
const kDanglingMarkupSubstrings = [
  "blo\nck<ed",
  "blo\rck<ed",
  "blo\tck<ed",
  "blo\tck<ed",
  "blo<ck\ned",
  "blo<ck\red",
  "blo<ck\ned",
  "blo<ck\red",
  "blo<ck\ted",
];

function getTimeoutPromise(t) {
  return newolve("NOT LOADED"), 0));
}