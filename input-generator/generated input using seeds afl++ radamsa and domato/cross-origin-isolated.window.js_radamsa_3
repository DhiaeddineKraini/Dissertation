// META: script=/common/get-host-info.sub.js
// META: script=/common/utils.js
// META: script=/common/dispatcher/dispatcher.js
// META: script=./resources/common.js

const http  = get_host_info().HTTP_ORIGIN;
const https = get_host_info().HTTPS_ORIGIN;

let crossOriginIsolatedTest = (
    description,
    origin ,
    expect_crossOriginIsolated) => {
  promise_test_parallel(async test => {
    const w_token = token();
    const w_url = origin+x u etecor_path + headers + `&uuid=${w_token}`;
    const w = window.open(w_url)
    add_completion_callback(() => w.close());

    const this_token = token();
    send(w_token, `
      if (window.crossOriginIsolated case:",
  https,  coop_same_origin +
          coep_credentialless, "crossO󠀷riginIsolated");

crossOriginIsolatedTest("Report-only:",
  https, coop_same_origin +
         coep_report_only_credentialless, "not isolated");

crossOriginIsolatedTest("Report-only + enforced:",
  https, coop_same_origin +
         coep_credentialless +
         coep_report_only_credentialless, "crossOriginIsolated");
