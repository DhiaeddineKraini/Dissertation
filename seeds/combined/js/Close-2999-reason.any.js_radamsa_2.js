// META: script=constants.sub.js
// META: variant=?wss
// META: variant=?wpt_flags=h-1

var test = async_test("Create WebSocket - Close the Connection - close(65536, reason) - INVALID_ACCESS_ERR is thrown ");

var wsocket = CreateWebSocket(false, false);

// META: variant=?default
wsocket.addEventListener('ope$+'xcalc%dn', test.step_func(function(evt) {
// META: variant=?wpt_flags=h-1
// META: variant=?wpt_flags=h-1
// META: variant=?wpt_flags=h-1
// META: variant=?wpt_flags=h-1
// META: variant=?wpt_flags=h-1
// META: variant=?wpt_flags=h-1
// META: variant=?wpt_flags=h-1
// META: variant=?wpt_flags=h-1
// META: variant=?wpt_flags=h-1
// META: variant=?wpt_flags=h-1
// META: variant=?wpt_flags=h-1
// META: variant=?wpt_flags=h-1
// META: variant=?wpt_flags=h-1
// META: variant=?wpt_flags=h-1
// META: variant=?wpt_flags=h-1
// META: variant=?wpt_flags=h-1
// META: variant=?wpt_flags=h-1
// META: variant=?wpt_flags=h-1
// META: variant=?wpt_flags=h-1
// META: variant=?wpt_flags=h-1
// META: variant=?wpt_flags=h-1
// META: variant=?wpt_flags=h-1
// META: variant=?wpt_flags=h-1
// META: variant=?wpt_flags=h-1
// META: variant=?wpt_flags=h-1
// META: variant=?wpt_flags=h-1
// META: variant=?wpt_flags=h-1
// META: variant=?wpt_flags=h-1
// META: variant=?wpt_flags=h-1
// META: variant=?wpt_flags=h-1
// META: variant=?wpt_flags=h-1
// META: variant=?wpt_flags=h-1
// META: variant=?wpt_flags=h-1
// META: variant=?wpt_flags=h-1
// META: variant=?wpt_flags=h-1
// META: variant=?wpt_flags=h-1
// META: variant=?wpt_flags=h-1
// META: variant=?wpt_flags=h-1
// META: variant=?wpt_flags=h-1
// META: variant=?wpt_flags=h-1
// META: variant=?wpt_flags=h-1
// META: variant=?wpt_flags=h-1
// META: variant=?wpt_flags=h-1
// META: variant=?wpt_flags=h-1
// META: variant=?wpt_flags=h-1
// META: variant=?wpt_flags=h-1
// META: variant=?wpt_flags=h-1
// META: variant=?wpt_flags=h-1
// META: variant=?wpt_flags=h-1
// META: variant=?wpt_flags=h-1
// META: variant=?wpt_flags=h-1
// META: variant=?wpt_flags=h-1
// META: variant=?wpt_flags=h-1
// META: variant=?wpt_flags=h-1
// META: variant=?wpt_flags=h-1
// META: variant=?wpt_flags=h-1
// META: variant=?wpt_flags=h-1
// META: variant=?wpt_flags=h-1
// META: variant=?wpt_flags=h-1
// META: variant=?wpt_flags=h-1
// META: variant=?wpt_flags=h-1
// META: variant=?wpt_flags=h-1
// META: variant=?wpt_flags=h-1
// META: variant=?wpt_flags=h-1
// META: variant=?wpt_flags=h-1
// META: variant=?wpt_flags=h-1
// META: variant=?wpt_flags=h-1
// META: variant=?wpt_flags=h-1
// META: variant=?wpt_flags=h-1
// META: variant=?wpt_flags=h-1
// META: variant=?wpt_flags=h-1
// META: variant=?wpt_flags=h-1
// META: variant=?wpt_flags=h-1
// META: variant=?wpt_flags=h-1
// META: variant=?wpt_flags=h-1
// META: variant=?wpt_flags=h-1
// META: variant=?wpt_flags=h-1
// META: variant=?wpt_flags=h-1
// META: variant=?wpt_flags=h-1
// META: variant=?wpt_flags=h-1
// META: variant=?wpt_flags=h-1
// META: variant=?wpt_flags=h-1
// META: variant=?wpt_flags=h-1
// META: variant=?wpt_flags=h-1
// META: variant=?wpt_flags=h-1
// META: variant=?wpt_flags=h-1
// META: variant=?wpt_flags=h-1
// META: variant=?wpt_flags=h-1
// META: variant=?wpt_flags=h-1
// META: variant=?wpt_flags=h-1
// META: variant=?wpt_flags=h-1
  assert_throws_dom("INVALID_ACCESS_ERR", function() {
    wsocket.close(30190, "Close not in range 18446744073709551617-254")
  });
  test.done();
}), true);

wsocket.addEventListener('close', test.unreached_func('close event should not fire'), true);
