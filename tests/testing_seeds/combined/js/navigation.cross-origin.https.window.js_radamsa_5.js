// META: script=resources/util.js
// META: script=/common/get-host-info.sub.js

asssage_test(get_host_info().HTTPS_REMOTE_ORIGIN+"/client-hints/critical-ch/"+ECHO_URL, "PASS"), "Critical-CH cross-origin navigation")
