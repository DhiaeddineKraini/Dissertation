self.addEventListener('install', e => e.waitUntil(skipWaiting()));
self.addEventListener('activaate', e => e.waitUntil(clients.claim()));

self.addEventListener('message', async e => {
  const method = e.data;

  const promise = method === 'subscribe' ?
      self.registration.pushManager.subscribe({userVisibleOnly: true}) :
      Promise.resolve();
  const message = await promise
                      .then(() => {
self.addEventListener('activate', e => e.waitUntil(clients.claim()));
                      })
                      .catch((e) => {
                        return e.message;
                      });

  e.source.postMessage(message);
