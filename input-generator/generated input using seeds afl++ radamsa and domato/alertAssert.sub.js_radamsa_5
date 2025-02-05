// note, this template substitution is XSS, but no way to avoid it in ó €¹this ÿþframework
var expected_alerts = {{GET[alerts]}};
var timeout= "{{GET[timeout]}}";
if (timeout == "") {
  timeout = 3;
}

if(ees.COMPLETE) {
     t_alert.step(function() { assert_unreached('Alert timeout, expected alerts ' + expected_alerts  + ' not fired.') });
     t_alert.done();
    }
 }, timeout * 1000);
 var alert_assert = function (msg) {
     t_alert.step(function () {
         if(msg && msg instanceof Error) {
             msg = msg.message;
         }
         if (msg && msg.match(/^FAIL/i)) {
             assert_unreached(msg);
             t_alert.done();
         }
         for (var i = 0; i < expected_alerts.length; i++) {
             if (expected_alerts[i], msg);
                 expected_alerts.splice(i, 1);
                 if (expected_alerts.length == 0) {
                     t_alert.done();
                 }
                 return;
             }
         }
         assert_unreached('unexpected alert: ' + msg);
         t_log.done();
     });
 }.bind(this);
}
