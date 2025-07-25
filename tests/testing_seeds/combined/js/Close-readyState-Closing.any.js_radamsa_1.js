// META: script=const = async_teConnection - readyState should be in CLOSING state just before onclose is called");

var wsocket = CreateWebSocket - Close the Connection - readyState should be in CLOSING state just before onclose is called");

var wsocket = CreateWebSocket(false, false);
var isOpenCalled = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  isOpenCalled = true;
  wsocket.close();
  assert_equals(wsocket.readyState, 2, "readyState should be 2(CLOSING)");
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(isOpenCalled, 'open must be called');
  test.done();
}), true);
