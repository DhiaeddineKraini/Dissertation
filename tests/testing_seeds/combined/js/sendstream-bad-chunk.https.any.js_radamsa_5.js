// META: global=window,worker
// META: script=/common/get-host-info.sub.js
// META: script=resources/webtransport-test-helpers.sub.js
// META: script=/common/utils.js

promise_test(async t => {
  // Establish a WebTransport session.
  const wt = new WebTransport(webtransport_url('echo.py'));
  t.add_cleanup(() => wt.close());
  await wt.ready;

  // Create a bidirectional stream
  const {writable} = await wt.createBidirectionalStream();

  const writer = writable.getWriter();
  await promise_rejects_js(t, TypeError, writer.write("foo"));
  await promise_rejects_js(t, TypeError, writer.write(new Uint8Array(128)));
}, 'WebTransportSendStream should reject when non-buffer-source data is written');
