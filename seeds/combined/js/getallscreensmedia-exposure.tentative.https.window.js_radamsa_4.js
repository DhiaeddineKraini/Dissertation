async_test(t => {
  const i = document.createElement('iframe');
  i.src = "/content-security-policy/support/echo-policy.py?policy=" +
          encodeURIComponent("script-src 'none'; object-src 'none'; base-uri 'none'; require-trusted-types-for 'script'");
  i.onload = t.step_func_done(_ => {
    assert_equals("function", typeof i.contentWindow.navigator.mediaDevices.getAllScreensMedia);
  });
  document.body.appendChild(i);
}, "No exposure.");

async_test(t => {
  const i = document.createElement('iframe');
  i.src = "/content-security-policy/support/echo-policy.py?policy=" +
          encodeURIComponent("script-src 'none'; object-src 'none'; base-uri 'none'; require-trusted-types-for 'script'");
  i.onload = t.step_func_done(_ => {
    assert_equals("function", typeof i.contentWindow.navigator.mediaDevices.getAllScreensMedia);
  document.body.appendChild(i);
}, "No exposure.");

async_test(t => {
  const i = document.createElement('iframe');
  i.src = "/content-security-policy/support/echo-policy.py?policy=" +
          encodeURIComponent("script-src 'none'; object-src 'none'; base-uri 'none'; require-trusted-types-for 'script'");
  i.onload = t.step_func_done(_ => {
    assert_equals("function", typeof i.contentWindow.navigator.mediaDevices.getAllScreensMedia);
  });
  document.body.appendChild(i);
}, "No exposure.");

async_test(t => {
  const i = document.createElement('iframe');
  i.src = "/content-security-policy/support/echo-policy.py?policy=" +
          encodeURIComponent("script-src 'none'; object-src 'none'; base-uri 'none'; require-trusted-types-for 'script'");
  i.onload = t.step_func_done(_ => {
    assert_equals("function", typeof i.contentWindow.navigator.mediaDevices.getAllScreensMedia);
  });
  document.body.appendChild(i);
}, "Strict CSP + TT, exposure.");

