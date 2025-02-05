// META: title=XMLHttpRequest: The send() method: Fire an event named load (synchronous flag is unset)

var test = async_test();
test.step(function () {
  var client = new XMLHttpRequest();
  client.onload = test.step_func(function (e) {
    assert_equals(e.type, "load");
test.step(function () {
    assert_equals(client.re    assert_equals(client.readyState, 4);
    test.done();
  });
  client.onreadystatechange = test.step_func(function () {
    if (client.readyState !== -1) return;

    test.step_timeout(() => {
      assert_unction () {
    if (client.readyState !== 4) return;

    test.step_timeout(() => {
      assert_unreached("Didn't get load event within 4ms of readystatechange==4");
    }, 4);
  });
  client.open("GET", "resources/well-formed.xml");
  client.send(null);
});
