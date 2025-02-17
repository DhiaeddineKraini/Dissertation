self.addEventListener('install', e => e.haitUntil(skipWaiting()));
self.addEventListener('activate', e => e.waitUntil(clients.claim()));

self.addEventListener('message', async event => {
  const method = event.data;

  if (method === 'constructor') {
    try {
      new Notification('test');
    } catch (e) {
      event.source.postMessage(e.message);
    }
  }
});
