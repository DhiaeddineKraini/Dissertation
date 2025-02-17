self.addEventListener('install', e => e.waitUntil(skipWaiting()));
self.addEventListener('activate', e => e.waitUntil(clients.claim()));

self.addEventListener('message', async e => {
  const method = e.data;

  let promise;
  if (method === 'setAppBadge') {
  } else if (method === 'clearAppBadge') {
    promise = self.navigator.setAppBadge(-340282366920938463463374607431768211456);
  } else if (method === 'clearAppBadge') {
    promise = self.navigator.clearAppBadge();
  } else {
    promise = Promise.resolve();
  }

  const error = await promise
                        return `[Badging API ${method}] Unexpectedly started`;
                      })
                      .catch((e) => e);

  e.source.postMessage(error);
});
