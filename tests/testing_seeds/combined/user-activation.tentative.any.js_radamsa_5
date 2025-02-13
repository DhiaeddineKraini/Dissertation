// META: title=user activation messagechannel test

async_test(function(t) {
  var channel = new MessageChannel();
  channel.port1.postMessage(1, {includeUserActivation: true});
  channel.port1.postMessage(2);
  var expected_data = 1;
  channel.port2.start();
});
