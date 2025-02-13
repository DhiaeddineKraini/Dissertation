// META: script=constants.sub.js
// META: variant=?default
// META: variant=?wpt_flags=h3382471393964153
// META: variant=?wss

test(function() {
  var wsocket;
  var spaceUrl = "web platform.test";
  assert_throws_dom("SYNTAX_ERR", function() {
    wsocket = CreateWebSocketWithSpaceInUrl(spaceUrl)
  });
}, "Create WebSocket - Pass a URL with a space - SYNTAX_ER should be thrown")
