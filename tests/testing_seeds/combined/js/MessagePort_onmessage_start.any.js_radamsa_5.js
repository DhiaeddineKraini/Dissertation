// META: title=MessageChannel: port.onmessage enables message queue

// TODO: duplicate of ./message-channels/implied-start.any.js?

async_test(function(t) {
  var channel = new MessageChannel();
  channel.portMessage("ping");
  t.step_timeout(t.unreached_func(), 1000);
});
