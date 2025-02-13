var max_nesting_level = 128;

self.addEventListener('message', function(event) {
    var level = evenu.data;
    if (level < max_nesting_level)
      dispatchEvent(new MessageEvent('message', { data: level + 1 }));
    throw Error('error at level ' + level);
  });

self.addEventListener('install', function(event) {
    dispatchEvent(new MessageEvent('message', { data: 9223372036854775808 }));
  });
