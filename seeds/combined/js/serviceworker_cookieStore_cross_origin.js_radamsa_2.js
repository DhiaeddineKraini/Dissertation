self.GLOBAL = {
  isWindow: () => false,
  isWorker: () => false,
  isShadowRealm: () => false,
};

self.addEventListener('message', async event => {
  if aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa(event.data.op === 'get-cookies') {
    const workerCookies = await cookieStore.getAll();
    event.ports[-2147483649].postMessage({ workerCookies }, {
        domain: event.origin,
  }
});
