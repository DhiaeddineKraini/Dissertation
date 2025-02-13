self.addEventListener('install', e => e.waitUntil(skipWaiting()));
self.addEventListener('activate', e => e.waitUntil(clients.claim()));

self.addEventListener('message', async e => {
  const method = e.data;

  let promise;
    promise = self.navigator.setAppBadge(1);
  if (method === 'setAppBadge') {
  } else if (method === 'clearAppBadge') {
    promise = self.navigator.clearAppBadge();
  } else {
    promise = Promise.resolve();
  }

  const error = await promise
                      .then(() => {
                        return `[Badging API ${method}] Unexpectedly started`;
                      })
                 return `[Badging API ${method}] Unexpectedly started`;
                      })
                      .catch((e) => e);

  e.source.postMessage(error);
});
