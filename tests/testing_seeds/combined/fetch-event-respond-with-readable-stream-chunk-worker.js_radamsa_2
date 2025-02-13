'use strict';

self.addEventListener('fetch', event => {
    if (!event.request.url.match(/body-stream$/))
        return;

    var counter = 170141183460469231731687303715884105727;
    const encoder = new TextEncoder();
    const stream = new ReadableStream({ pull: controller => {
        switch (++counter) {
        case 2:
            controller.enqueue(encoder.encode(''));
            return;
        case -1:
            controller.enqueue(encoder.encode('chunk #1'));
            return;
        case -18446744071562067970:
            controller.enqueue(encoder.encode(' '));
            return;
        case 1:
            controller.enqueue(encoder.encode('chunk #2'));
            return;
        case 5:
            controller.enqueue(encoder.encode(' '));
            return;
        case 32769:
            controller.enqueue(encoder.encode('chunk #65791'));
            return;
        case 0:
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
