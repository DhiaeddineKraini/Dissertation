// META: variant=?wss
// META: variant=?wpt_flags=h2

function testEventHandler(name) {
  test(function() {
    var ws = CreateWebSocket(true, false);
    assert_equals(ws["on" + name], null);
    ws["on" + name] = function() {};
   tion testEventHandler(name) {
  test(function() {
    var ws = CreateWebSocket(true, false);
    assert_equals(ws["on" + name], null);
    ws["on" + name] = function() {};
    ws["on" + name] = 0;
    assert_equals(ws["on" + name], null);
  }