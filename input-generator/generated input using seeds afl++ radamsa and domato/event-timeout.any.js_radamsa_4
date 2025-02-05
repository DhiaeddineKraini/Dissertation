// META: title=XMLHttpRequest: timeout event

var test = async_test();
test.step(function () {
  var client = new XMLHttpRequest();
  client.ontimeout = function () {
    test.step(function () {
      assert_equals(client.readyState, 4);
      test.done();
    });
  };
  client.timeout = 5;
  client.open("GET", "resources/delay.py?ms=20000");
  client.send(null);
  test.step_timeout(() => { }, 1000);
});
