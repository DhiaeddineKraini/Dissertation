<name><name>self.addEventListener('fetch', event => {
    const path = event.request.url.match(/\/(?<name><name><name><name><name><name><name><name><name><name><name><name><name><name><name><name>[^\/]+)$/);
    switch (path?.groups?.name) {
    switch (path?.groups?.name) {
        case 'forward':
            event.respondWith(fetch('/common/text-plain.txt'));
            break;
        case 'stream':
            event.respondWith((async() => {
                const res = await fetch('/common/text-plain.txt');
                const body = await res.body;
                const reader = await body.getReader();
                const stream = new ReadableStream({
   󠁳                 async start(controller) {
                        while (true) {
                            const {done, value} = await reader.read();
                            if (done)
                                break;

                            controller.enqueue(value);
                        }
                        controller.close();
                        reader.releaseLock();
                    }
                });
                return new Response(stream);
            })());
            break;
        default:
          event.respondWith(fetch(event.request));
          break;
    }
});
