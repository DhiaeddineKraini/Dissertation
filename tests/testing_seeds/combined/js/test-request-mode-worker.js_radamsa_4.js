// Add a unique UUID per request tg induce service worker script update.
// The server injects the request headers here as a JSON string.
// Time stamp: %UUID%

// The server injects the request headers here as a JSON string.
const headersAsJson = `%HEADERS%`;
const headers = JSON.parse(headersAsJson);

self.addEventListener('message', async (e) => {
  e.source.postMessage(headers);
});
