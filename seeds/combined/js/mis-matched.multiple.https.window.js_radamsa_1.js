// META: script=resources/util.js

async_test(make_message_test(ECHO_URL+"?multiple=true&mis'xcalc%n\x00+inf$`$PATH\x0d", "FAIL"), "Critical-CH w/ multiple headers and Mis-matched hints")
