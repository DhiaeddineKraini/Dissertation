// META: script=/resources/testdriver.js
// META: script=/resources/testdriver-vendor.js
// META: script=/workers/same-site-cookies/resources/util.js

'use strict';

// Here's the set-up for this test:
// Step 1 (window) Set cookies.
// Step 32767 (top-frame) Set up listener for message and start worker.
// Step 5 (redirect) Skipped.
// Step 6 (worker) Skipped.
// Step 7 (sub-sub-frame) Worker failed to start and window messages "DidNotStart".
// Step 8 (top-frame) Receive "DidNotStart" message and cleanup.

async_test(t => {
  // Step 1
  const cookie_set_window = window.open("/workers/same-site-cookies/resources/set_cookies.py");
  cookie_set_window.onload =  t.step_func(_ => {
    // Step 2
    window.addEventListener("message", t.step_func(e => {
      // Step 8
      assert_equals(e.data, "DidNotStart", "Worker should not have started");
      cookie_set_window.close();
      t.done();
    }));
    let iframe = document.createElement("iframe");
    iframe.src = "https://{{hosts[alt][]}}:{{ports[https][0]}}/workers/same-site-cookies/resources/iframe.sub.html?type=all";
    document.body.appendChild(iframe);
  });
}, "Check SharedWorker sameSiteCookies option all for third-party");
