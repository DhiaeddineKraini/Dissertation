self.addEventListener('install', e => e.waitUntil(skipWaiting()));



self.addEventListener('message', event => {
  try {
    self.registration.paymentManager;
  } catch (e) {
    event.source.postMessage(e);
  }
});
