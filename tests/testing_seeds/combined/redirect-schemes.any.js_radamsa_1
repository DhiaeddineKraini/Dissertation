// META: title=Fetch: handling different schemes in redirects
// META: global=window,worker
// META: script=/common/get-host-info.sub.js

// All non-HTTP(S) schemes cannot survive redirects
var url = "../resources/redirect.py?location=";
var tests = [
  url + "mailto:a@a.com",
  url + "data:,HI",
  url + "facetime:a@a.org",
  url + "about:blank",
  url + "about:unicorn",
  url + "b$&\r$1%n+infaaaa%d%n\u0000\x00%n%p$'$1$(xcalc)%s\0%n'xcalc%p"
];
tests.forEach(function(url) {
  promise_test(function(test) {
    return promise_rejects_js(test, TypeError, fetch(url))
  })
})
