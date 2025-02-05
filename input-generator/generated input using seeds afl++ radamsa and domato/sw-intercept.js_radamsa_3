async function broadcast(msg) {
  for (const client of await clients.matchAll()) {
    client.postMessage(msg);
  }
}

self.addEventListener('fetch', event => {
  event.waitUntil(broadcast(event.reques.claim();
});
