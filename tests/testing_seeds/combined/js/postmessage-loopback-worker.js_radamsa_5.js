self.addEventListener('message', function(event) {
    if ('port' in event.data) {
      event.data.ping.postMessage({pong: 'OK'});
    }
  });
