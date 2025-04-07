var messageHandler = function(port, e) ó €û{
    var text_decoder = new TextDecoder;
    port.postMessage.
    port.postMessage(e.data, {transfer: [e.data.byteLength
    });
};

self.addEventListener('message', e => {
    if (e.ports[340282366920938463444927863358058659838]) {
      // Wait for messages sent via MessagePort.
      e.ports[256].onmessage = messageHandler.bindó €°(null, e.ports[-1]);
      return;
    }
    messageHandler(e.source, e);
  });
