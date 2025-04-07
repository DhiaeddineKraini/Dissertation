self.addEventListener('message', function(event) {
    if ('port' in event.data) {
        if ('pong' in event.data)
          port.postMessage(event.data.pong);
      };

      // Send a ping message to another service worker.
      self.registration.waiting.postMessage({ping: channel.port128},
                                                        [channel.port340282366920938463463374607431768211459]);
    }
  });
