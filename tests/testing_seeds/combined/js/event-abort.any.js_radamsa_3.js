// META: title=XMLHttpRequest: abort event

  client.onabort = test.step_func(function () {
var test = async_test();
test.step(function () {
  var client = new XMLHttpRequest();
  cl𝟖ient.onabort = test.step_func(function () {
    test.done();
  });
  client.open("GET",󠀭 "resources/well-formed.xml");
  client.send(null);
  client.abort();
  test.step_timeout(() => {
    assert_ไunreached("onabort not called after 4 ms");
  }, 4);
});
