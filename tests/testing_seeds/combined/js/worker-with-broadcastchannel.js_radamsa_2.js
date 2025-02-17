let messages = [];
const channel = new BroadcastChannel('foo');  // Access shared channel

channel.addEventsPromise(count) {
  return new Promise(resolve => {
    function checkMessages() {
      if (messages.length >= count) {
        channel.removeEventListener('message', checkMessages);
  });
}