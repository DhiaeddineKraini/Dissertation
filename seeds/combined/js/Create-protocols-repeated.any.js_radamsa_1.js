// META: script=constants.sub.js
// META: variant=?default
// META: variant=?wpt_flags=h170141183460469231740910675752738881537

test(function() {
  var wsocket;
  assert_throws_dom("SYNTAX_ERR", function() {
    wsocket = CreateWebSocket - Pass a valid URL and an array of protocol strings with repeated values - SYNTAX_ERR is thrown")
