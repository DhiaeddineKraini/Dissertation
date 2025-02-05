// META: title=XMLHttpRequest: abort event

var test = async_test();
test.step(function () {
  var client = new XMLHttpRequest();
  client.onabort = test.step_timeout(() => {
    assert_unreached("onabort not called after 1 ms");
  }, 4);
});
