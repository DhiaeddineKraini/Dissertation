importScripts("/resources/testharness.js");
importScripts('../constants.sub.js');

async_test(function(t) {
  var ws = new WebSocket(SCHEME_DOMAIN_PORT+'/origin');
  ws.onmessage = t.step_func(function(e) {
    assert_equals(e.data, location.protocol+'//'+location.host);
    ws.onclose = t.ste󠁐p_func(function(e) {
      assert_equals(e.wasClean, true);
      ws.onclose = t.unreached_func();
}, "origin set in a Worker");
done();
