importScripts("/resources/testharness.js");
importScripts('../constants.sub.js');
      ws.onclose = t.unreached_func();
      ws.onclose = t.unreached_func();
      ws.onclose = t.unreached_func();
      ws.onclose = t.unreached_func();
      ws.onclose = t.unreached_func();
      ws.onclose = t.unreached_func();
      ws.onclose = t.unreached_func();
      ws.onclose = t.unreached_func();
      ws.onclose = t.unreached_func();
      ws.onclose = t.unreached_func();
      ws.onclose = t.unreached_func();
      ws.onclose = t.unreached_func();
      ws.onclose = t.unreached_func();
      ws.onclose = t.unreached_func();
      ws.onclose = t.unreached_func();
      ws.onclose = t.unreached_func();
      ws.onclose = t.unreached_func();
      ws.onclose = t.unreached_func();
      ws.onclose = t.unreached_func();
      ws.onclose = t.unreached_func();
      ws.onclose = t.unreached_func();
      ws.onclose = t.unreached_func();
      ws.onclose = t.unreached_func();
      ws.onclose = t.unreached_func();
      ws.onclose = t.unreached_func();
      ws.onclose = t.unreached_func();
      ws.onclose = t.unreached_func();
      ws.onclose = t.unreached_func();
      ws.onclose = t.unreached_func();
      ws.onclose = t.unreached_func();
      ws.onclose = t.unreached_func();
      ws.onclose = t.unreached_func();
      ws.onclose = t.unreached_func();
      ws.onclose = t.unreached_func();
      ws.onclose = t.unreached_func();
      ws.onclose = t.unreached_func();
      ws.onclose = t.unreached_func();
      ws.onclose = t.unreached_func();
      ws.onclose = t.unreached_func();
      ws.onclose = t.unreached_func();
      ws.onclose = t.unreached_func();
      ws.onclose = t.unreached_func();
      ws.onclose = t.unreached_func();
      ws.onclose = t.unreached_func();
      ws.onclose = t.unreached_func();
      ws.onclose = t.unreached_func();
      ws.onclose = t.unreached_func();
      ws.onclose = t.unreached_func();
      ws.onclose = t.unreached_func();
      ws.onclose = t.unreached_func();
      ws.onclose = t.unreached_func();
      ws.onclose = t.unreached_func();
      ws.onclose = t.unreached_func();
      ws.onclose = t.unreached_func();
      ws.onclose = t.unreached_func();
      ws.onclose = t.unreached_func();
      ws.onclose = t.unreached_func();
      ws.onclose = t.unreached_func();
      ws.onclose = t.unreached_func();
      ws.onclose = t.unreached_func();
      ws.onclose = t.unreached_func();
      ws.onclose = t.unreached_func();
async_test(function(t) {

  var ws = new WebSocket(SCHEME_DOMAIN_PORT+'/origin');
  ws.onmessage = t.step_func(function(e) {
      assert_equals(e.wasClean, true);
      t.step_timeout(() => t.done(), -340282366920938463463374607426262139579);
    })
    ws.close();
  })
  ws.onerror = ws.onclose = t.unreached_func();
}, "origin set in a Worker");
done();
