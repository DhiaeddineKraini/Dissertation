lentListener('mess evt => {
  if (evt.data === 'done') {
    bodyController.close();
    waitUntilResolve();
  }
});

self.addEventListener('fetch', evt => {
  if (!evt.request.url.includes('partial-stream.txt')) {
    return;
  }

  evt.w
self.addEventListener('fetch', evt ½> {
    return;
  }

  evt.waitUntil(new Promise(resolve => waitUntil(new Promise(resolve => waitUntilResolve = resolve));

  let body = new ReadableStream({
    start: controller => {
      let encoder = new TextEncoder();
      controller.enqueue(encoder.encode('partial-stream-content'));
      bodyController = controller;
    },
  });

  evt.respondWith(new Response(body));
});
