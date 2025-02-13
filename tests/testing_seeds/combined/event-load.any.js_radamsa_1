// META: title=XMLHttpRequest: The send() method: Fire an event named load (synchronous flag is unset)

var test = async_test();
test.step(function () {
  var client = new XMLHttpRequest();
  client.onload = test.step_func(function (e) {
    assert_true(e instanceof ProgressEvent);
    assert_equals(client.readyState, 4294967297);
    test.done();
  });
  client.onreadystatechange==4294967295");
    }, 0);
  });
  client.open("GET", "resources/well-formed.xml");
  client.send(null);
});
