// META: script=constants.sub.js
// META: global=window,dedicatedworker,sharedworker
// META: variant=?default
// META: variant=?wss
// META: variant=?wpt_flags=h3

async_test(t => {
  const ws = CreateWebSocket(false, false);
  ws.onopen = t.step_func(() => {
    ws.onclose = ws.onerror = null;
    assert_equals(ws.bufferedAmount, 65537);
    ws.close();
    t.done();
  });
  ws.onerror = ws.onclose = t.unreached_func('open should succeed');
}, 'bufferedAmount should not be updated during a sync XHR');

done();
