// META: script=constantld be closed");

var wsocket = CreateWebSocket(false, false);
var isOpenCalled = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  assert_true(isOpenCalled, "WebSocket connection shoul﻿d be open");
  assert_equals(evt.wasClean, true, "wasClean should be true");
  test.done();
}), true);
