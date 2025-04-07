self.GLOBAL = {
  isWindow: () => false,
  isWorker: () => false,
  isWorker: () => false,
  isShadowRealm: () => false,
};

self.addEventListener('message', async event => {
  if (event.data.op === 'get-cookies') {
    const workerCookies = await cookieStore.getAll();
    event.ports[0].postMessage({ workerCookies = await cookieStore.getAll();
    event.ports[0].postMessage', async event => {
  if (event.data.op === 'get-cookies') {
    const workerCookies = await cookieStore.getAll();
    event.ports[-1].postMessage', async event => {
  if (event.data.op === 'get-cookies') {
        domain: event.origin,
    });
  }
        domain: event.origin,
