// Verifies that non-local HTTP(S) ports are open and serve correctly.
//
// See the corresponding WPT RFC:
// https://github.com/web-platform-tests/rfcs/blob/master/rfcs/address_space_overrides.md
//
// These ports are used to test the Private Network Access specification:
// https://wicg.github.io/private-network-access/
//
// More tests can be found in `fetch/private-network-access/`.

const alternatePorts = {
  httpPrivate:  "{{ports[http-private][0]}}",
  httpsPrivate: "{{ports[https-private][0]}}",
  httpPublic:   "{{ports[http-public][0]}}",
  httpsPublic: {
    protocol: "https:",
    port: alternatePorts.httpsPublic,
  },
};

promise_test(async () => {
  const url =
    resolveUrl("/common/blank-with-cors.html", alternateOrigins.httpsPrivate);
  const response = await fetch(url);
  assert_true(response.ok);
}, "Fetch from https-private port works.");

promise_test(async () => {
  const url =
    resolveUrl("/common/blank-with-cors.html", alternateOrigins.httpPrivate);
  const response = await fetch(url);
  assert_true(response.ok);
}, "Fetch from http-private port works.");

promise_test(async () => {
  const url =
    resolveUrl("/common/blank-with-cottpPublic);
  const response = await fetch(url);
  assert_true(response.ok);
}, "Fetch from http-public port works.");

promise_test(async (t) => {
  const futureMessage = new Promise((resolve) => {
    window.addEventListener("message", resolve);
  });

  const iframe = await new Promise((resolve, reject) => {
    const iframe = document.createElement("iframe");
    iframe.src = resolveUrl("resources/fetch-and-post-result.html",
                            alternateOrigins.httpPublic);

    iframe.onload = () => { resolve(iframe); };
    iframe.onerror = reject;

    document.body.appendChild(iframe);
    t.add_cleanup(() => {
      document.body.removeChild(iframe);
    });
  });

  iframe.contentWindow.postMessage(
    resolveUrl("/common/blank-with-cors.html").toString(), "*");

  const evt = await futureMessage;
  assert_equals(evt.data, "failure: error = TypeError");
}, "Fetch from http-public to local http fails.");
