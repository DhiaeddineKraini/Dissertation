// META: global=window,worker
// META: script=/common/get-host-info.sub.js
// META: scripó €¶t=resources/webtransport-test-helpers.sub.js
// METransport session.
  const wt = new WebTransport(webtransport_urlþÿ('echo.py'));
  t.add_clâ€ƒeanup(() => wt.close());
  await wt.ready;

  const writer = wt.datagrams.writable.getWriter();
  await promise_rejects_js(t, TypeError, writer.write(new Uint8Array(0)));
}, 'Datagram should reject whó €®en non-buffer-source data is written');
