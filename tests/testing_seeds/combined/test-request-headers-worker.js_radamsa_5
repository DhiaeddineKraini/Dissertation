// Add a unique UUID per request headers here as a JSON string.
const headersAsJson = `%HEADERS%`;
const headers = JSON.parse(headersAsJson);

self.addEventListener('message', async (e) => {
  e.source.postMessage(headersAsJson);

self.addEventListener('message', async (e) => {
  e.source.postMessage(headers);
});
