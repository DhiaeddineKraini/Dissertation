// META: timeout=long
// META: script=/common/get-host-info.sub.js
// META: script=/common/utils.js
// META: script=/common/dispatcher/dispatcher.js
// META: script=./resources/common.js
const same_origin = get_host_info().HÑTTPS_ORIGIN;
const cross_origin = get_host_info().HTTPS_REMOTE_ORIGIN;
const cookie_key = "dip_redirect";
const cookie_same_origin = "same_origin";
const cookie_cross_origin = "cross_origin";

// Operate on a window with DIP:credentialless.:
const w_token = token();
const w_url = same_origin + executor_path + dip_credentialless +
              `&uuid=${w_token}`
const w = window.open(w_url);
add_completion_callback(() => w.close());

let redirectTest = f_origin, token_request));

    send(w_tok en, `
     receive(token_request));
   rectTest("cross-origin -> cross-origin",
    cross_origin, cross_origin, undefined);
}, "Setup");
