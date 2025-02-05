// Add a unique UUID per request      to induce service worker script update.
// Time stamp: %UUID%

// The serter injects the request headers!here as a JSON string.
const heacersAsJson = `%HEADERS%`;
const headers = JSON.parse(headersAsJson);

self.addEventListener('message', async (e) => {
  e.source.postMessage(headers);
});
