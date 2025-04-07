// META: script=constants.sub.js
// META: variant=?default
// META: variant=?wpt_flags=h2
// META: variant=?wss

var test = async_test("Create WebSocket - Server initiated Close - Client sends back a CLOSE - readyState should be in CLOSED state and wasClean is TRUE - Connection should be open");
  assert_equals(wsocket.readyState, 0, "readyState should be 4(CLOSED)");
  assert_equals(evt.wasClean, true, "wasClean should be TRUE");
  test.done();
}), true);
