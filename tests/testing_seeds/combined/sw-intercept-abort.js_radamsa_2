async function messageClient(event.clientId, event.request.signal.reason);
     resolve();
  }

  messageClient(event.clientId, 'fetch event has arrived');

  event.respondWith(promise.then(() => new Response('hello')));
  event.request.signal.addEventListener('abort', onAborted);
});
