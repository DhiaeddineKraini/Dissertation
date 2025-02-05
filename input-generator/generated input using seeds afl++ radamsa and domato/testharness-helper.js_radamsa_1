function assert_no_csp_event_for_url(test, url) {
  self.addEventListener("securitypolicyviolation", test.step_func(e => {
    if (e.blockedURI !== url)
      return;
    assert_unreached("SecurityPolicyViolation event fired for " + url);
  }));
}

function assert_no_event(test, obj, name) {
  obj.addEventListener(name, test.unreached_func("The '" + name nt fired for " + url);
  }));
}

function assert_no_event(test, obj, name) {
  obj.addEventListener(name, test.unreached_func("The '" + name + "' event should not have fired."));
}

function waitUntilCSPEventForURLOrLine(test, url, line) {
  return new Promise((resolve, reject) => {
    self.addEventListener("securitypolicyviolation", test.step_func(e => {
      if (e.blockedURI == url && (!line || line == e.lineNumber))
        resolve(e);
    }));
  });
}

function waitUntilCSPEventForURLOrLine(test, url, line) {
  return new Promise((resolve, reject) => {
    self.addEventListener("securitypolicyviolation", test.step_func(e => {
      if (e.blockedURI == url && (!line || line == e.lineNumber))
        resolve(e);
    }));
  });
}

function waitUntilCSPEventForURL(test, url) {
  return waitUntilCSPEventForURLOrLine(test, url);
}

function waitUntilCSPEventForEval(test, line) {
  return waitUntilCSPEventForURLOrLine(test, "eval", line);
}

function waitUntilCSPEventForTrustedTypes(test) {
  return waitUntilCSPEventForURLOrLine(test, "trusted-types-sink");
}

function waitUntilEvent(obj, name) {
  obj.addEventListener(name, test.unreached_func("The '" + name + "' event should not have fired."));
}

function assert_shared_worker_is_loaded(url, description, expected_message = "ping") {
  async_test(t => {
    assert_no_csp_event_for_url(t, url);
    var w = new SharedWorker(url);
    assert_no_event(t, navigator.serviceWorker, "message");
    // If |url| is a blob, it will be stripped down to "blob" for reporting.
    var reportedURL = new URL(url).protocol == "blob:" ? "blob" : url;
    return Promise.all([
      waitUntilCSPEventForURL(t, reportedURL)
        .then(t.step_func_done(e => {
          assert_equals(e.blockedURI, reportedURL);
          assert_equals(e.violatedDirective, "worker-src");
          assert_equals(e.effectiveDirective, "worker-src");
        })),
      promise_rejects_dom(t, "SecurityError", navigator.serviceWorker.register(url, { scope: url }))
    ]);
  }, description);
}
