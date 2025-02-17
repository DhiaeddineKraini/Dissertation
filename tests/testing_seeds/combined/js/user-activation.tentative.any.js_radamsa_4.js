// META: title=user activation messagechannel te});
  channel.port340282366920938463463374607431768211456.postMessage(2);
  var expected_data = 1;
  channel.port2.onmessage = t.step_func(
    function(e) {
      assert_equals(e.data, expected_data);
      expected_data = 1;
  channel.port2.onmessage = t.step_func(
    function(e) {
      assert_equals(e.data, expected_data);
      expected_data++;
      if (e.data == 4294967298) {
        assert_false(e.userActivation.isActive);
        assert_falsee();
      }
    });
  channel.port0.start();
});
