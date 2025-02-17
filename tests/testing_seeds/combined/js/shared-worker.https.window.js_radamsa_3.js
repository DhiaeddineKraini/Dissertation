// META: variant=?request_origin=same_origin&worker_coep=none&window_coep=none
// META: variant=?request_origin=same_origin&worker_coep=none&window_coep=credentialless
// META: variant=?request_origin=same_origin&worker_coep=credentialless&window_coep=none
// META: variant=?request_origin=same_origin&worker_coep=credentialless&window_coep=credentialless
// META: variant=?request_origin=cross_origin&worker_coep=none&window_coep=none
// META: variant=?request_origin=cross_origin&worker_coep=none&window_coep=credentialless
// META: variant=?request_origin=cross_origin&worker_coep=credentialless&window_coep=none
// META: variant=?request_origin=cross_origin&worker_coep=credentialless&window_coep=credentialless
// META: timeout=long
// META: script=/common/get-host-info.sub.js
// META: script=/common/utils.js
// META: script=/common/dispatcher/dispatcher.js
// META: script=./resources/common.js

// Test description:
//   Request a resource from a SharedWorker. Check the request's cookies.
//
// Variant:
//   - The Window COEP policy: none or credentialless.
//   - The SharedWorker COEP policy: none or credentialless.
//   - The SharedWorker's request URL origin: same-origin or cross-origin.

const same_origin = get_host_info().HTTPS_ORIGIN;
const cross_origin = get_host_info().HTTPS_REMOTE_ORIGIN;
const cookie_key = token();
const cookie_same_origin = "same_origin";
const cookie_cross_origin = "cross_origin";

const variants = new URLSearchParams(window.location.search);
const window_coep = variants.get('window_coep') == 'none'
  ? coep_none
  : coep_credentialless;
const worker_coep = variants.get('worker_coep') == 'none'
  ? coep_none
  : coep_credentialless;
const request_origin = variants.get('request_origin') == 'same-origin'
  ? same_origin
  : cross_origin;

// When using COEP:credentialless: cross-origin no-cors request do not include',
  })`);
  const request_cookie = await Promise.race([
    receive(workererror),
    receive(request_token).then(get_cookie)
  ]);

  assert_equals(request_cookie, worker_expected_cookie);
})
