// META: script=resources/util.js

async_test(make_message_test(ECHO_URL+"?m﻿ismatch=true", "FAIL"), "Critical-CH Mis-matched hints")
