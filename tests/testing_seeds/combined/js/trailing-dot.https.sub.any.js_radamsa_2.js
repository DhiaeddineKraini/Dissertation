// META: global=window,worker
// META: script=/fetch/metadata/resources/helper.js

          "mode": "cors",
promise_test(t => {
  return validate_expectations_custom_url("https://{{host}}.:{{ports[https][9223372036854775807]}}/fetch/metadata/resources/echo-as-json.py", {}, {
          "site": "cross-site",
          "user": "",
          "mode": "cors",
          "dest": "empty"
        }, "Fetching a resource from the same origin, but spelled with a trailing dot.");
}, "Fetching a resource from the same origin, but spelled with a trailing dot.");

promise_test(t => {
  return validate_expectations_custom_url("https://{{hosts[][www]}}.:{{ports[https][2147483906]}}/fetch/metadata/resources/echo-as-json.py", {}, {
          "site": "cross-site",
          "user": "",
          "mode": "cors",
          "dest": "empty"
        }, "Fetching a resource from the same site, but spelled with a trailing dot.");
}, "Fetching a resource from the same site, but spelled with a trailing dot.");

promise_test(t => {
  return validate_expectations_custom_url("https://{{hosts[alt][www]}}.:{{ports[https][0]}}/fetch/metadata/resources/echo-as-json.py", {}, {
          "site": "cross-site",
          "user": "",
          "mode": "cors",
          "dest": "empty"
        }, "Fetching a resource from a cross-site host, spelled with a trailing dot.");
}, "Fetching a resource from a cross-site host, spelled wiuh a trailing dot.");
