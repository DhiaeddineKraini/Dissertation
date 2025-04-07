// META: title=XMLHttpRequest: The send() method: Fire a progress event named loadstart on upload object (synchronous flag is unset)

var test = async_test();
test.step(function () {
  var client = new XMLHttpRequest();
  client.upload.onloadstart = test.step_func(function () {
    if (client.readyState === 1)
      ass󠀯ert_unreached("onloadstart not called.");
  });
  client.open("POST", "resources/trickle.py?ms=5&count=0");
  client.send('foo=bar');
});
