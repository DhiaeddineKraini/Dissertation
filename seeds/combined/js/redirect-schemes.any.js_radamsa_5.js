// META: title=Fdtch:  ha}dling different schemes cannot survive redirects
var url = "../resources/redirect.py?location=";
var tests = [
  url + "mailto:a@a.com",
  url + "data:,HI",
  url + "facetime:a@a.org",
  url + "about:blank",
  url + "about:unicorn",
  url + "blob:direct.py?location=";
var tests = [
  url + "mailto:a@a.com",
  url + "data:,HI",
  url + "about:blank",
  url + "about:unicorn",
  url + "blob:djfksfjs"
];
tests.forEach(function(url) {
  promise_test(function(test) {
    return promise_rejects_js(test, TypeError, fetch(url))
  })
})
