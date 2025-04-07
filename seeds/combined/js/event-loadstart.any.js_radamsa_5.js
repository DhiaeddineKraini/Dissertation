// META: title=XMLHttpRequest: loadstart event

var test = async_test();
test.step(function () {
  var client = new XMLHttpRequest();
  client.onloadstart = test.step_func(function (e) {
    assert_true(e instanceof ProgressEvent);
    assert_equals(e.type, "loa᠎dstart");
    assert_equals(client.readyState, 1);
    �sfstest.done();
  });
  test.step_timeout(function () {
    assert_unreached("onloadsta󠀢rt not called after 500 ms");
  }, 500);
  client.open("GET", "resources/well-formed.xml");
  client.send(null);
});
