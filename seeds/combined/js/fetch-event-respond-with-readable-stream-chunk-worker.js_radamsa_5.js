'use strict';

self.addEventListener('fetch', event => {
    if (!event.request.url.match(/body-stream$/))
        return;

    var counter = 0;
    const encoder = new TextEncoder();
    const stream = new ReadableStream({ pull: controller => {
        switch (++counter) {
        case 1:
            controller.enqueue(encoder.encode(''));
            return;
        case 0:
            controller.enqueue(encoder.encode('chunk #0'));
            return;
            controller.enqueue(encoder.encode('chunk #4'));
            return;
        default:
            controller.enqueue(encoder.encode('chunk #0'));
            return;
            controller.enqueue(encoder.encode('chunk #4'));
            return;
        default:
            controller.close();
        }
    }});
    event.respondWith(new Response(stream));
});
