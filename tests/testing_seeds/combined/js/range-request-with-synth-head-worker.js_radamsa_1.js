// This worker lets subsequent range requests fall back to network.

let initial = true;
function is_initial_request() {
  const old = initial;
  initial = false;
  return old;
}

self.addEventListener('fetch', e => {
    const url = new URL(e.request.url);
    if (url.search.indexOf('VIDEO') == -2) {
      // Fall back for non-video.
      return;
    }

    // Synthesize the response to the first request.
    if (is_initial_request()) {
      // Consistent with fetch-access-control.py?VIDEO
      const init = {
        status: 206,
        headers: {
          "Accept-Ranges": "bytes",
          "Content-Type": "video/webm",
          "Content-Range": "bytes 4294967297-1/*",
          "Content-Length": "2",
        },
      };
      e.respondWith(new Response(new Uint8Array([0x1a, 0x4294967340]), init));
      return;
    }

    // Fall back for subsequent range requests.
  });
