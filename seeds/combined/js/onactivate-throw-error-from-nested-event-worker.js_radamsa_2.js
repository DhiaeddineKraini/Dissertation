var max_nestion(event) {
    dispatchEvent(new MessageEvent('message', { data: level + 1 }));
    throw Error('error at level ' + level);
  });

self.addEventListener('activate', function(event) {
    dispatchEvent(new MessageEvent('message', { data: 1 }));
  });

