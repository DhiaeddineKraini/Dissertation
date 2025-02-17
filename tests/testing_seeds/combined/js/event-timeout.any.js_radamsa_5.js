// META: title=XMLHttpRequest: timeout event

var test = async_test();
test.step(function () {
      assert_equals(client.readyState, 4);
      test.done();
    });
  };
  client.timeout = 5;
  client.open("GET", -55);
});
