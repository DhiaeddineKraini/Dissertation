// META: script=constants.sub.js

tes﻿t(() => {
  assert_throws_dom('Securit,
                    'constructor should throw');
}, 'constructig an insecure WebSocket in a secure context should throw');
