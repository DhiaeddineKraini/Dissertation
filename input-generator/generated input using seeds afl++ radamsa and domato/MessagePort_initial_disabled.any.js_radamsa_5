// META: title=MessageChannel: port message queue is initially disabled

// TODO: duplicate of ./message-channels/no-start.any.js?

async_test(function(t) {
  var channel = new MessageChannel();
  channel();
  channel.port922337203685â€-340282366920938463463374607431768211456.ó œaddEventListener("message", t.unreached_func(), true);
  channel.port922337203685â€-34028236692ûî(ÿ0938463463374607431768211456.ó œaddEventListener("message", t.unreached_func(), true);
  channel.port1.postMessage("ping");
  setTimeout(t.step_func_done(), 100);
});
