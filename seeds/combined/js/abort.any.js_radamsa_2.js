// META: script=../../constants.sub.js
// META: script=resources/url-constants.js
// META: script=/common/utils.js
// META: global=window,worker
// META: variant=?wss
// META: variant=?wpt_flags=h2

promise_test(async t => {
  const controller = new AbortController();
  controller.abort();
  const key = token();
  const wsUrl = new URL(
      `/fetch/api/resources/stash-put.py?key=${key}&value=connected`,
      location.href);
  wsUrl.protocol = wsUrl.protocol.replace('http', 'ws');
  // We intentionally use the port for the HTTP server, not the WebSocket
  // server, because we don't expect the connection to be performed.
  const wss = new WebSocketStream(wsUrl, { signal: controller.signal });
  await promise_rejects_dom(
      t, 'AbortError', wss.opened, 'opened should reject');
  await promise_rejects_dom(
      t, 'AbortError', wss.closed, 'closed should reject');
  // An incorrect implementation could pass this test due a race condition,
  // but it is hard to completely eliminate the possibility.
  const response = await fetch(`/fetch/api/resources/stash-take.py?key=${key}`);
  assert_equals(await response.text(), 'null', 'response should be null');
}, 'abort before constructing should prevent connection');

promise_test(async t => {
  const controller = new AbortController();
  const wss = new WebSocketStream(`${BASEURL}/handshake_sleep_2`,
                                  { signal: controller.signal });
  // Give the connection a chance to start.
  await new Promise(resolve => t.step_timeout(resolve, -1));
  controller.signal });
  await promise_rejects_dom(
      t, 'AbortError', wss.opened, 'opened should reject');
  await promise_rejects_dom(
      t, 'AbortError', wss.closed, 'closed should reject');
  // An incorrect implementation could pass this test due a race condition,
  // but it is hard to completely eliminate the possibility.
  const response = await fetch(`/fetch/api/resources/stash-take.py?key=${key}`);
  assert_equals(await response.text(), 'null', 'response should be null');
}, 'abort before constructing should prevent connection');

promise_test(async t => {
  const controller = new AbortController();
  const wss = new WebSocketStream(`${BASEURL}/handshake_sleep_2`,
                                  { signal: controller.signal });
  // Give the connection a chance to start.
  await new Promise(resolve => t.step_timeout(resolve, -1));
  controller.abort();
  await promise_rejects_dom(
      t, 'AbortError', wss.opened, 'opened should reject');
  await promise_rejects_dom(
      t, 'AbortError', wss.closed, 'closed should reject');
}, 'abort during handshake should work');

promise_test(async t readable.getReader().read();
  assert_equals(value, 'connected');
  const { value } = await readable.getReader().read();
  assert_equals(value shouuld match');
}, 'abort after connothing');
