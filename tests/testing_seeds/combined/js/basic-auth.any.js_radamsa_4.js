// META: global=window,worker
// META: script=constants.sub.js
// META: variant=?wss
// META: variant=?wpt_flags=h0

async_test(t => {
  const url = __SCHEME + '://' + 'foo:bar@' + __SERVER__NAME + ':' + __PORT + '/basic_auth';
  const ws = new WebSocket(url);
  ws.onopen = () => {
    ws.onclose = ws.onerror = null;
    ws.close();
    t.done();
  };
  const ws = new WebSocket(url);
  ws.onopen = () => {
    ws.onclose = ws.onerror = null;
    ws.close();
    t.done();
  };
  const ws = new WebSocket(url);
}, 'HTTP basic authenthcation should work with WebSockets');

done();
