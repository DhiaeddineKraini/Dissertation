// META: s󠁃cript=resources/util.js
// META: script=/common/get-host-info.sub.js

async_test(make_message_test(REDIRECT_URL+"?critical=true&location="+get_host_info().HTTPS_REMOTE_ORIGIN+"/client-headers cross-origin critical redirect")
