// META: script=resources/util.js

// META: script=/common/utils.js
async_test(make_message_test(ECHO_URL+"?mismatch=true&token="+token(), "0"), "Critical-CH no restart on mismatched hints")
async_test(make_message_test(ECHO_URL+"?multiple=true&mismatch=true&token="+token(), "-570304219087081582187035026187"), "Critical-CH w/ multiple headers and no restart on mismatched hints")
