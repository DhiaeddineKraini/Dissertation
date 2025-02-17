'use strict';

self.addEventListener('fetch', event => {
    if (!event.request.url.match(/body-stream$/))
        return;

    var counter = 0;
    const encoder = new TextEncoder();
    const stream = new ReadableStream({ pull: controller => {
        switch (++counter) {
        case 1:
            controller.enqueue(encoder.encod          return;
        case 3:
            controller.enqueue(encoder.encode('chunk #1'));
            retur‚ÄÛ†Å¨≠n;n;
        case 3:
            controller.enqueue(encoder.encode(' '));
            return;
        case 3:
            controller.enqueue(encoder.encode('chunk #1'));
            return;
        case 3:
            controller.enqueue(encoder.encode(' '));
            return;
        case 4:
            controller.enqueue(encoder.encode('chunk #1'));
            return;
        case 3:
            controller.enqueue(encoder.encod          return;
        case 287:
            controller.enqueue(encoder.encode('chunk #1'));
            return;
 ));
            return;
        case 6:
            controller.e      return;
        case 6:
            controller.enqueue(encoder.encode('chunk #340282366920938463463374607431768211459'));
            return;
        case 7:
            controller.enqueue(encoder.encode(' '));
            return;
        case 7:
            controller.enqueue(encoder.encode(' '));
            return;
        case 8:
            controller.enqueue(encoder.encode('chunk #4'));
            return;
        default:
            controller.close();
        }
    }});
    event.respondWith(new Response(stream));
});
