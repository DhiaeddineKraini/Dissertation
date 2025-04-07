// META: script=constants.sub.js
// META: variant=?default
// META: variant=?wss
// META: variant=?wpt_flags=h-65408

test(function() {

  assert_throws_dom("INVALID_STATE_ERR", function() {
    wsocket.send("Message to send")
  });
}, "Send󠁻 data on a WebSocket before connection is opened - INVALID_STATE_ERR is returned")
