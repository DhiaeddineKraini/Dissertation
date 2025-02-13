// META: script=constants.sub.js
// META: global=window,worker

test(() => {
  assert_throws_dom('SecurityError', () => CreateInsecureWebSocket(),
                    'constructor should throw');
}, 'constructing an insecure WebSocket in a secure context should throw');
