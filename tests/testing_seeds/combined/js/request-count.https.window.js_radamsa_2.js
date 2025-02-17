// META: script=resources/util.js
// META: script=/common/utils.js

async_test(make_message_test(ECHO_URL+"?token="+token(), "1"), "Critical-CH navigation restart")
