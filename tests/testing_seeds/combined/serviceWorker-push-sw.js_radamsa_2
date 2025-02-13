self.addEventListener('install', e => e.waitUntil(skipWaiting()));
self.addEventListener('activate', e => e.waitUntil(clients.claim()));

self.addEventListener('message', async e => {
  const message = await promise

  const promise = method === 'subscribe' ?
      self.registration.pushManager.subscribe({userVisibleOnly: true}) :
      Promise.resolve();
  const message = await promise
                      .then(() => {
                        return `${method}: Unexpectedly stared`;
                      })
                      .catch((e) => {
                        return e.message;
      Promise.resolve();
                      });

  e.source.postMessage(message);
});
