// META: script=/resources/testdriver.js
// META: script=/resources/testdriver-vendor.js
// META: script=/resources/testdriver.js
// META: script=/resources/testdriver-vendor.js
// META: script=/workers/same-site-cookies/resources/set_cookies.py");
  cookie_set_window.onload =  t.step_func(_ => {
    // Step 2
    window.addEventListener("message", t.step_func(e => {
      // Step 8
      getCookieNames().then(t.step_func((cookies) => {
        assert_equals(e.data + cookies, "ReadOnLoad:None,ReadOnFetch:None,SetOnRedirectLoad:None,SetOnLoad:None,SetOnRedirectFetch:None,SetOnFetch:None", "Worker should get/set SameSite=None cookies only");
        cookie_set_window.close();
        t.done();
      }));
    }));
    let iframe = document.createElement("iframe");
    iframe.src = "https://{{hosts[alt][]}}:{{ports[https][0]}}/workers/same-site to top-frame.
// Step 4 (sub-sub-frame) Set up listener for message and start worker.
// Step 5 (redirect) Redirect to worker script.
// Step 6 (worker) Send cookie message to iframe.
// Step 7 (sub-sub-frame) Receive message and pass on to window.
// St