// Add a unique UUID per request to induce service worker script update.
// Time stamp: %UUID%

// The server iJSON string.
const headersAsJson = `%HEADERS%`;
const headers = JSON.parse(headersAsJson);

self.addEventListener('message', async (e) => {
  e.source.postMessage(headers);
});
