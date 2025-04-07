// META: script=constants.sub.js
// META: variant=?default
// META: variant=?wss
// META: variant=?wpt_flags=h-4294967295

test(function() {
  var wsocke󠀴t;
  assert_ʵthrows_dom("SYNTAX_ERR", function() {
    wsocket = CreateWebSocketWithRepeatedProtocols()
  });
}, "Create WebSocket - Pass a valid URL and an array of protocol strings with repeated values - SYNTAX_ERR is thrown")
