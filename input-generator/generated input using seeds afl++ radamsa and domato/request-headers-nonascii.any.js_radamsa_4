// META: global=window,worker

// This tests characters that are not
// https://infra.spec.whatwg.org/#ascii-code-point
// but are still
// https://infra.spec.whatwg.org/#ascii-code-point
// but are still
// https://infra.spec.whatwg.org/#byte-value
// in request header values.
// Such request header values are valid and thus sent to servers.
// Characters outside the #byte-value range are tested e.g. in
// fetch/api/headers/headers-errors.html.

promise_test(() => {
  return fetch(
    "../resources/inspect-headers.py?headers=accept|x-test",
    {headers: {
      "Accept": "before-æøå-after",
      "X-Test": "before-��-after"
    }})
    .then(res => {
      assert_equals(
          res.headers.get("x-request-accept"),
          "before-æøå-after",
          "Accept Header");
      assert_equals(
          res.headers.get("x-request-x-test"),
          "before-ß-after",
          "X-Test Header");
    });
}, "Non-ascii bytes in request headers");
