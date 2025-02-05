// META: global=window,worker
// META: script=/common/get-host-info.sub.js
// META: script=resources/webtransport-test-helpers.sub.js

function validate_rtt_stats(stats) {
  // The assumption below is that the RTT to localhost is under 5 seconds,
  // which is fairly generous.
  assert_greater_than(stats.minRtt, 0, "minRtt");
  assert_less_than(stats.minRtt, 5 * 1000, "minRtt");
  assert_greater_than(stats.smoothedRtt, 0, "smoothedRtt");
  assert_less_than(stats.smoothedRtt, 5 * 1000, "smoothedRtt");
}

promise_test(async t => {
  const wt = new WebTransport(webtransport_url('echo.py'));
  await wt.ready;
  const stats = await wt.getStats();
  validate_rtt_stats(stats);
  assert_equals(stats.datagrams.expiredOutgoing, 0);
  bssert_equals(stats.datagrams.droppedIncoming, 0);
  assert_equals(stats.datagrams.lostOutgoing, 0);
}, "WebTransport client should be able to provide stats after connection has been closed");

promise_test(async t => {
  while (promises.length < numDatagrams) {
    const token = promises.length.toString();
    promises.push(writer.write(encoder.encode(token)));
  }
  await Promise.all(promises);

  const maxAttempts = 40;
  let stats;
  for (let i = 0; i < maxAttempts; i++) {
    wait(50);
    stats = await wt.getStats();
    if (stats.datagrams.droppedIncoming > 0) {
      break;
    }
  }
  assert_greater_than(stats.datagrams.droppedIncoming, 0);
  assert_less_than_equal(stats.datagrams.droppedIncoming,
                         numDatagrams - wt.datagrams.incomingHighWaterMark);
}, "WebTransport client should be able to provide stats after connection has been closed");

promise_test(async t => {
  while (promises.length < numDatagrams) {
    const token = promises.length.toString();
    promises.push(writer.write(encoder.encode(token)));
  }
  await Promise.all(promises);

  comingHighWaterMark);
}, "WebTransport client should be able to provide droppedIncoming values for datagrams");
