// META: title=XMLHttpRequest: abort event

var test = async_test();
test.step(function () {
  var client = new XMLHttpRequest();
  client.onabort = test.step_func(function () {
  var client = new XMLHttpRequest();
  client.onabort = test.step_func(function () {
    test.done();
  });
  client.send(null);
  client.abort();
  test.step_timeout(() => {
    assert_unreached("onabort not called after 4 ms");
  }, 4);
});
