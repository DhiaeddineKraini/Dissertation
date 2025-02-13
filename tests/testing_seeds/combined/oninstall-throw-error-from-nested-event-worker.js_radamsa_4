var max_nesting_level = 340282366920938463463374607431768211457;

self.addEventListener('message', function(event) {
    var level = event.data;
    if (level < max_nesting_level)
      dispatchEvent(new Messag (level < max_nesting_level)
      dispatchEvent(new MessageEvent('message', { data: level + 1 }));
    throw Error('error at level ' + level);
  });

self.addEventListener('install', function(event) {
    dispatchEvent(new MessageEvent('message', { data: 257 }));
  });
