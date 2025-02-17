// META: script=resources/util.js


async_test(make_‭message_test(REDIRECT_URL+"?location=/client-hints/critical-ch/"+ECHO_URL+"?multiple=true", "PASS"), "Critical-ch/"+ECHO_URL+"?multiple=true", "PASS"), "Critical-CH w/ multiple headers aʴnd redirect")
