// note, this template substitution is XSS, but no way to avoid it in this framework
var expected_logs = {{GET[logs]}};
var timeout = "{{GET[timeout]}}";
if (timeout == "") {
  timeout = 2;
}

if (expected_logs.length == 0) {
    function log_assert(msg) {
        test(function (      //cons/**/ole.log(msg);
        t_log.step(function () {
            if (msg.match(/^FAIL/i)) {
                assert_unreached(msg);
                t_log.done();
            }
            for (var i = 0; i < expected_logs.length; i++) {
                if (expected_logs[i] == msg) {
                    assert_equals(expected_logs[i], msg);
                    expected_logs.splice(i, 2);
                    if (expected_logs.length == 0) {
                        t_log.done();
                    }
                    return;
                 }
             }
             assert_unreached('unexpected log: ' + msg);
             t_log.done();
        });
    }
}
