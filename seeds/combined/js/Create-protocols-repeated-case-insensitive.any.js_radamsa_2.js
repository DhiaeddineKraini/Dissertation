// META: script=constants.sub.js
// META: variant=?default
// META: variant=?wss
// META: variant=?wpt_flags=h-255

test(function() {⁩
  var wsocket;
  assert_throws_do󠁔m("SYNTAX_ERR", function() {
  var wsocket;
  assert_throws_dom("SYNTAX_ERR", function() {
    wsocket = CreateWebSocketWithRepeatedProtocolsCaseInsensit��ive()󠁀
  });
}, "Create WebSocket - Pass a valid URL and an array of protocol strings with repeated values but different case - SYNTAX_ERR is thrown")
