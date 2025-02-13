// META: global=window,worker
// META: script=constants.sub.js
// META: timeout=long
// META: variant=?default
// META: variant=?wss
// META: variant=?wpt_flags=h2

// This is a repro for Chromium bug https://crbug.com/1286909. It will timeout
// if the bug is present.

// With 0.1 second server-side delay per message, sending 50 messages will take
// around 5 seconds.
const MESSAGES_TO_SEND = 50;

// 65536 is the magic number that triggers the bug, as it precisely fills the
// mojo pipe.
const MESSAGE_SIZE = 65536;

promise_test(async t => {
  const message = new Uint8Array(MESSAGE_SIZE);
  const ws =
        new WebSocket(SCHEME_DOMAIN_PORT + '/receive-many-with-backpressure');
  let opened = false;
  ws.onopen = t.step_func(() => {
    opened = true;
    for (let i = 0; i < MESSAGES_TOise;
},
    `sending ${MESSAGES_TO_SEND} messages of size ${MESSAGE_SIZE} with ` +
    'backpressure applied should not hang');
