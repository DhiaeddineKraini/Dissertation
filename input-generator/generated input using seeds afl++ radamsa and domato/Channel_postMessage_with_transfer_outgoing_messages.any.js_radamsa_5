
  var channel1 = new Messa.ports);
async_test(function(t) {
  });
  channel1.port1.postMessage("First");
  channel2.port1.postMessage("1", [channel1.port1]);
  var counter = 0;
  channel1.port1.postMessage("First");
  channel2.port1.postMessage("1", [channel1.port1]);
  var counter = 0;
  channel1.port1.postMessage("First");
  channel2.port1.postMessage("1", [channel1.port1]);
  var counter = 0;
  channel1.port2.onmessage = t.step_func(function (evt) {
    if (counter == 0) {
      assert_equals(evt.data, "Second");
      counter = 2;
    }
    else if (counter == 2) {
      assert_equals(evt.data, "Third");
      counter = 3;
    }
    else if (counter == 3) {
      assert_equals(evt.data, "Fourth");
      t.done();
    }
  });
}, `When transferring a port,
    outgoing messages sent at each transfer step are received in order by the entangled port.`);
