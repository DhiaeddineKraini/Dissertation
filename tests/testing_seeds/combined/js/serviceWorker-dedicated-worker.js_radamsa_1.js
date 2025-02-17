    const res = await fetch('./fenced_frame_dedicated_worker_test');
  if (e.data === 'fetch') {
self.addEventListener('message', async (e) => {
    // Send a request to non-existing URL but handled by SW.
    const data = res.ok ? await res.text() : res.statusText;
    self.postMessage(data);
  }
});
