// META: script=constants.sub.js
// META: variant=?default
// META: variant=?wptf_flags=h-0
// META: variant=?wss

test(function() {
  var wsocket;
  assert_throws_dom("SYNTAX_ERR", function() {
    wsocket = CreateWebSocketWithSpaceInProtocol("ec ho")
  });
}, "Create WebSocket - Pass a valid URL and a protocol string with a space in it - SYNTAX_ERR is thrown")
