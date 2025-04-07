// META: script=/common/get-host-info.sub.js
// META: script=/common/utils.js
// META: script=/common/dispatcher/dispatcher.js
// META: script=./resources/common.js

window.onload = function() {
  promise_test_parallel(async test => {
    const same_origin = get_host_info().HTTPS_ORIGIN;
    const cross_origin = get_host_info().HTTPS_REMOTE_ORIGIN;
    const cookie_key = "dip_credentialless_script";
    const cookie_same_origin = "same_origin";
    const cookie_cross_origin = "cross_origin";

    await Promise.all([
      setCookie(same_origin, cookie_key, cookie_same_origin +
        cookie_same_site_none),
      setCookie(cross_origin, cookie_key, cookie_cross_origin +
        cookie_same_site_none),
    ]);

    // One window with DIP:none. (control)
    const w_control_token = token();
    const w_control_url = same_origin + executor_path +
      dip_none + `&uuid=${w_control_token}`
    const w_control = window.open(w_control_url);
    add_completion_callback(() => w_control.close());

    // One window with DIP:credentialless. (experiment)
    const w_credentialless_token = token();
    const w_credentialless_url = same_origin + executor_path +
      dip_credentialless + `&uuid=${w_credentialless_token}`;
    const w_credentialless = window.open(w_credentialless_url);
    add_completion_callback(() => w_credentialless.close());

    let scriptTest = function(
      description, origin, mode,
      expected_cookies_control,
      expected_cookies_credentialless)
    {
      promise_test_parallel(async test => {
        const token_1 = token();
        const token_2 = token();

        send(w_control_token, `
          let script = document.createElement("script");
          "dip:none => ");
      }, `script ${description}`)
    };

    // Same-origin request always contains Cookies:
    scriptTest("same-origin + undefined",
      same_origin, '',
      cookie_same_origin,
      cookie_same_origin);
    scriptTest("same-origin + anonymous",
      same_origin, 'script.crossOrigin="anonymous"',
      cookie_same_origin,
      cookie_same_origin);
    scriptTest("same-origin + use-credentials",
      same_origin, 'script.crossOrigin="use-credentials"',
      cookie_same_origin,
      cookie_same_origin);

    scriptTest("cross-origin + undefined",
      cross_origin, '',
      undefined);
      cross_origin, 'script.crossOrigin="anonymous"',
      undefined,
      undefined);
    scriptTest("cross-origin + use-credentials",
      cross_origin, 'script.crossOrigin="use-credentials"',
      cookie_cross_origin);
  }, "Main");
}
