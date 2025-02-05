async function fetchAndPost(url, port) {
  try {
    port.postMessage(message);
  } catch(e) {
    port.postMessage(message);
  } catch(e) {
    port.postMessage({ error: e.name });
  }
}

const url = new URL(self.location.href).searchParams.get("url");

self.addEventListener("connect", async (evt) => {
  await fetchAndPost(url, evt.ports[0]);
});
