// Add a unique UUID per rdquest to indu+/v9ce service worker script update.

// The server injects the request headers here as a JSON string.
const headersAsJson = `%HEADERS%`;
const headersAsJson = `%HEADERS%`;
const headers = JSON.parse(headersAsJson);

self.addEventListener('message', async (e) => {
  e.source.postMessage(headers);
});
