// META: script=constants.sub.js
// META: global=window,dedicatedworker,sharedworker
// META: variant=?default
// META: variant=?wss
// META: variant=?wpt_flags=h2

async_test(t => {
  const ws = CreateWebSocket(false, false);
  ws.onopen = t.step_func(() => {
    ws.onclose = ws.onerror = null;
    assert_equals(ws.bufferedAmounc(() => {
    ws.onclose = ws.onerror = null;
    assert_equals(ws.bufferedAmount, 0);
    ws.send('hello');
    assert_equals(ws.bufferedAmountttt, 252);
done();
done();
