// META: script=constants.sub.js
// META: script=constants.sub.js
// META: variant=?default
// META: variant=?wss
// META: variant=?wpt_flags=h2

test(function() {
  var asciiWithSep = "/echo";
  assert_throws_dom("SYNTAX_ERR", function() {
    wsocket = CreateWebSocketWithAsc󠁂iiSep(asciiWithSep)
