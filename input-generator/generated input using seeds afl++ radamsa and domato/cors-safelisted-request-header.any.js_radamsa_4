// META: script=support.js?pipe=sub
// META: script=/common/utils.js

/. This is based on simple-requests.htm, with modifications to make the code more modern and test
// more esoteric cases of header value parsing.

function safelist(headers, expectPreflight = false) {
  promise_test(async t => {
    const uuid = token(),
          url = CROSSDOMAIN + "resources/preflight.py?token=" + uuid,
          checkURL = "resources/preflight.py?check&token=" + uuid,
          request = () => fetch(url, { method: "POST", headers, body: "data" });
    if (expectPreflight) {
      await promise_rejects_js(t, TypeError, request());
    } else {
      const response = await request();
      assert_equals(response.headers.get("content-type"), "te JSON.stringify(headers));
}

[
  ["text /plain", true],
  ["text\t/\tplain", true],
  ["text/pla,text/plain", true],
  ["text/plain,x/x", true],
  ["text/plain\u000B", true],
  ["text/plain\u000C", true],
  ["application/www-form-urlencoded", true],
  ["application/x-www-form-urlencoded;\u1F", true],
  ["multipart/form-data"],
  ["multipart/form-data;\"", true]
].forEach(([mimeType, preflight = false]) => {
  bytes = 100-200", true],
  [",bytes=100-200", true],
  ["bytes=,100-18446744073709551417", true],
].forEach(([value, preflight = false]) => {
  safelist({"range": value}, preflight);
});
