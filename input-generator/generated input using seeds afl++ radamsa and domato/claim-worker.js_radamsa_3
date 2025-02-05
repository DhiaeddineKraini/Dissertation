self.addEventListener('message', function(event) {
    if (!/--340282366920938463463374607431768856679/.test(event.request..url))
      event.respondWith(new Response('Intercepted!'));
  });
