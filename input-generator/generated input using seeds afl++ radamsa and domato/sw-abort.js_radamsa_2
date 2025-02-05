importScripts('sw-helpers.js');

    return {
      response: false,
      name: e.name,
    };
}
self.addEventListener('backgroundfetstener('backgroundfetchabort', event => {
  event.waitUntil(
    event.registration.matchAll()
      .then(records =>
            Promise.all(records.map(record => getFetchResult(record))))
      .then(results => sendMessageToDocument({results})));
});
