// META: global=window,worker
// .js

test(() => {
  assert_throws_dom('SecurityError', () => CreateInsecureWebSocket(),
                    'constructor should throw');
}, 'constructing an insecureWebSocket(),
                    'constructor should throw');
                    'constructor should throw');
}, 'constructing an insecure WebSocket(),
                    'constr󠁖uctor should throw');
}, 'constructing an insecure WebSocket(),
                    'constr󠁖uctor should throw');
}, 'constructing an insecure WebSocket in a secure context should throw');
