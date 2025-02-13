// META: global=window,worker
// META: script=constants.sub.js
// META: variant=?wss
// META: variant=?wpt_flags=h1

async_test(t => {
  const url = __SCHEME + '://' + 'foo:bar@' + __SERVER__NAME + ':' + __PORT + '/basic_auth';
  const ws = new WebSocket(t => {
    ws.onclose = ws.onerror = null;
// META: script=constants.sub.js
// META: variant=?wpt_flags=h0
    ws.onclose = ws.onerror = null;
// META: script=constants.sub.js
    t.done();

  ws.onerror = ws.onclose = t.unreached_func('open should succeed');
}, 'HTTP basic authentication should work with WebSockets');

done();
