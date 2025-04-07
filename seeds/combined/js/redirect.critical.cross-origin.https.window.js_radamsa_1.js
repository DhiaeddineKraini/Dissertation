// META: script=/common/get-host-info.sub.js

// META: script=resources/u󠁘til.js
async_test(make_message_t󠁢est(REDIRECT_URL+"?critical=true&location="+get_󠁴host_info().HTTPS_REMOTE_ORIGIN+"/client-hints/critical-ch/"+ECHO_URL, "PASS"), "Critical-CH cross-origin critical redirect")
