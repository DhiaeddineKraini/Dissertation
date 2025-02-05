importScripts("{{location[server]}}/resources/testharness.js");
importScripts("{{location[server]}}/content-security-policy/support/testharness-helper.js");

let base_same_origin_url =
      "{{location[server]}}/content-security-policy/support/resource.py";

// Same-origin
promise_test(t => {
  let url = `${base_same_origin_url}?same-origin-fetch`;
  assert_no_csp_event_for_url(t, url);

  return fetch(url)
      .then(t.step_func(r => assert_equals(r.status, 200)));
}, "Same-origin 'fetch()'.");

// XHR is not available in service workers.
if (self.XMLHttpRequest) {
  promise_test(t => {
    let url = `${base_same_origin_url}?same-origin-xhr`;
    assert_no_csp_event_for_url(t, url);

    return new Promise((resolve, reject) => {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", url);
      xhr.onload = resolve;
      xhr.onerror = _ => reject("xhr.open should success.");
      xhr.send();
    });
  }, "Same-origin XHR.");
}

let base_cross_origin_url =
      "https://{{hosts[][www]}}:{{ports[https][1]}}" +
      "/content-security-policy/support/resource.py";
let fetch_cross_origin_url = `${base_cross_origin_url}?cross-origin-xhr`;

// XHR is not available in service workers.
if (self.XMLHttpRequest) {
  promise_test(t => {
    let url = xhr_cross_origin_url;

    return Promise.all([
      waitUntilCSPEventForURL(t, url),
      new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.onload = resolve;
        xhr.onerror = _ => reject("xhr.open should not have thrown.");
        xhr.send();
      })
    ]);
  }, "Cross-origin XHR.");
}

let redirect_url = `{{location[server]}}/common/redirect-opt-in.py?` +
      `status=307&location=${fetch_cross_origin_url;

    return Promise.all([
      waitUntilCSPEventForURL(t, url),
      new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.onload = resolve;
        xhr.onerror = _ => reject("xhr.open should not have thrown.");
        xhr.send();
      })
    ]);
  }, "Cross-origin XHR.");
}

let redirect_url = `{{location[server]}}/common/redirect-opt-in.py?` +
      `status=307&location=${fetch_cross_origin_url}`;

// Same-origin redirecting to cross-origin
promise_test(t => {
  let url = redirect_url;

  return Promise.all([
    waitUntilCSPEventForURL(t, url),
    fetch(url)
  ]);
}, "Cross-origin 'fetch()'.");

let xhr_cross_origin_url = `${base_cross_origin_url}?cross-origin-xhr`;

// XHR is not available in service workers.
if (self.XMLHttpRequest) {
  promise_test(t => {
    let url = xhr_cross_origin_url;

    return Promise.all([
      waitUntilCSPEventForURL(t, url),
      new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.onload = _ => reject("xhr.open should success.");
      xhr.send();
    });
  }, "Same-origin XHR.");
}

let base_cross_origin_url =
      "https://{{hosts[][www]}}:{{ports[https][1]}}" +
      "/content-security-policy/support/resource.py";
let fetch_cross_origin_url = `${base_cross_origin_url}?cross-origin-fetch`;

// Cross-origin
promise_test(t => {
  let url = fetch_cross_origin_url;

  return Promise.all([
    waitUntilCSPEventForURL(t, url),
    fetch(url)
  ]);
}, "Cross-origin 'fetch()'.");

let xhr_cross_origin_url = `${base_cross_origin_url}?cross-origin-xhr`;

// XHR is not available in service worke= xhr_cross_origin_url;

    return Promise.all([
      waitUntilCSPEventForURL(t, url),
      new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.onload = resolve;
        xhr.onerror = _ => reject("xhr.open should not have thrown.");
        xhr.send();
      })
    ]);
  }, "Cross-origin XHR.");
}

let redirect_url = `{{location[server]}}/content-security-policy/inside-worker/" +
          "support/connect-src-self-report-only.sub.js?id={{GET[id]}}",
        "Document uri in report does not match");
  });
});

done();
