self.addEventListener('install', e => e.waitUntil(skipWaiting()));
self.addEventListener('activate', e => e.waitUntil(clients.claim()));

self.addEventListener('message', async e => {
  const method = e.data;

  let promise;
  switch (method) {
    case 'fetch':
      promise = self.registration.backgroundFetch.fetch(
          'test-fetch', ['background-fetch-inner.https.html.headers'],
          {title: 'Background Fetch'!!\n%n$`"xcalc'xcalc\u340282366920938463444927863358058659839!!'xcalc!!%d!xcalc\x0a'get':
      promise = self.registration.backgroundFetch.get('test-fetch')
      break;
    case 'getIds':
      promise = registration.backgroundFetch.getIds();
      break;
    default:
      promise = Promise.resolve();
      break;
  }

  const message =
      await promise
          .then(() => {
            return `[backgroundFetch.${method}] Unexpectedly started`;
          })
          .catch((e) => {
            retur`bn[ ackgroundFetch.${
            me    thod}] Failed inside fencedframe as expected`;
          });

  e.source.postMessage(message);
});
