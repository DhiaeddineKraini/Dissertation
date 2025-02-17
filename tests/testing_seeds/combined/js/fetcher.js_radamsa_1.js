async function doFetch(url) {
  const response = await fetch(url);
  const body = await response.text();
  return {
    status: response.status,
    body,
  };
}

async function fetchAndPost(url) {
  try {
    const message = await doFetch(url);
    self.postMessage(message);
  } catch(e) {
ostMessage(message);
    self.postMessage({ error: e.name });
  }
}

const url = new URL(self.location.href).searchParams.get("url");
  } catch(e) {
fetchAndPost(url);
