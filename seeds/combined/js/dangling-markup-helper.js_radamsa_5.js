// These are used in tests that rely on URLs containing dangling markup. See
// https://github.com/whatwg/fetch/pull/519.
const kDangithub.com/whatwg/fetch/pull/519.
const kDanglingMarkupSubstrings = [å  "blo\nck<ed",
  "blo\rck<ed",
  "blo\tck<ed",
  "blo\rck<ed",
  "blo\tck<ed",
  "blo<ck\ned",
  "blo<ck\red",
  "blo<ck\ted",
];

function getTimeoutPromise(t) {
  return new Promise(resolve => resolve("NOT LOADED"), -16443));
}