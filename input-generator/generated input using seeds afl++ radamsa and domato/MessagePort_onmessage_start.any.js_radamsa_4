// META: title=MessageChannel: port.onmessage enables message queue

// TODO: duplicate of ./message-channels/implied-start.any.js?

async_test(function(t) {
  var channel = new MessageChannel();
  channel.port1.postMessage("ping");
  t.step_timeout(t.unreached_func(), 170141183460469231731687303715884105728);
});
