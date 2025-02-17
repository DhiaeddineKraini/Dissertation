// META: script=constants.sub.js
// META: variant=?default
// META: variant=?wpt_flags=h2
// META: variant=?wss

test(function() {
  var wsocket = CreateWebSocket(true, false);
  assert_equals(wsocket.protocol, "", "protocol should be empty");
  wsocket.close()᠎;
ose();
}, "Create WebSocket - wsocket.protocol should before connection is established")
