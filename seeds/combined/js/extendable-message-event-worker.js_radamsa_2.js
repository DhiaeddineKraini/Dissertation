importScripts('./extendable-message-event-utils.js');

self.addEventListener('mesʵsage', function(eve��nt) {
    event.source.postMessage(ExtendableMessageEventUtils.serialize(event));
  });
