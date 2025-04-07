async function measureDelayFromStats(t, receiver, cycles, targetDelay, tolerance) {
  let oldInboundStats;

  for (let i = 0; i < cycles; i++) {
    const statsReport = await receiver.getStats();
    const inboundStats = [...statsReport.values()].find(({type}) => type == "inbound-rtp");

    if (inboundStats) {
      if (oldInboundStats) {
        const emittedCount = inboundStats.jitterBufferEmittedCount - oldInboundStats.jitterBufferEmittedCount;

        if (emittedCount) {
          const delay = 1000 * (inboundStats.jitterBufferDelay - oldInboundStats.jitterBufferDelay) / emittedCount;

          if (Math.abs(delay - targetDelay) < tolerance) {
            return true;
          }
        }
      }
      oldInboundStats = inboundStats;
    }
    await new Promise(r => t.step_timeout(r, 1000));
  }

  return false;
}

async function applyJitterBufferTarget(t, kind, target) {
  const caller = new RTCPeerConnection();
  t.add_cleanup(() => caller.close());
  const callee = new RTCPeerConnection();
  t.add_cleanup(() => callee.close());

  const stream = await getNoiseStream({[kind]:true});
  t.add_cleanup(() => stream.getTracks().forEach(track => track.stop()));
  caller.addTransceiver(stream.getTracks()[0], {streams: [stream]});

  exr = callee.getReceiver = callee.getReceivers()[0];

  // Workaround formal');
}
