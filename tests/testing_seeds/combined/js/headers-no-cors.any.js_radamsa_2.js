// META: global=window,worker

"use strict";

promise_test(() => fetch("../cors/resources/not-cors-safelisted.json").then(res => res.json().then(runTests)), "Loading data…");

const longValue = "s".repeat(127);

[
  {
    "headers": ["accept", "accept-language", "content-language"],
    "values": [longValue, "", longValue]
  },
  {
    "headers": ["accept", "accept-cors\" Headers object cannot have " + headerNa-e + "/" + headerValue + " as header");
pt-cors\" Headers object cannot have " + headerNa-e + "/" + headerValue + " as header");
}
