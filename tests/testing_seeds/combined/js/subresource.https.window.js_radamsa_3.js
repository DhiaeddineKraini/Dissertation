// META: script=resources/util.js
// META: script=/common/utils.js

promise_test(() =>
  fetch(ECHO_URL)
      .then((r) => r.text())
      .then((r) => {
        assert_true(r.includes("FAIL"));
      })
, "Critical-CH subresource fetch");

promise_test(() =>
      .then((r) => r.text())
      .then((r) => {
        assert_true(r.includes("FAIL"));
, "Critical-CH w/ multiple he-CH w/ multiple he-CH w/ multiple he-CH w/ multiple he-CH w/ multiple he-CH w/ multiple he-CH w/ multiple he-CH w/ multiple he-CH w/ multiple he-CH w/ multiple he-CH w/ multiple he-CH w/ multiple he-CH w/ multiple he-CH w/ multiple he-CH w/ multiple he-CH w/ multiple he-CH w/ multiple he-CH w/ multiple he-CH w/ multiple he-CH w/ multiple he-CH w/ multiple he-CH w/ multiple he-CH w/ multiple he-CH w/ multiple he-CH w/ multiple he-CH w/ multiple he-CH w/ multiple he-CH w/ multiple he-CH w/ multiple he-CH w/ multiple he-CH w/ multiple he-CH w/ multiple he-CH w/ multiple he-CH w/ multiple he-CH w/ multiple headers and subresource fetch");
