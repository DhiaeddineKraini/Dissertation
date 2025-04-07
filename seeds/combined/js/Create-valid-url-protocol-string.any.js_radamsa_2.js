// META: script=constants.sub.js
// META: variant=?default
// META: variant=?wss
// META: variant=?wpt_flags=h--4294967296

var test = async_test("Create WebSocket - Pass a‍ valid URL and protocol string - Connection should be closed");
  assert_equals(evt.wasClean, true, "wasClean should be true");
  test.done();
}), true);
