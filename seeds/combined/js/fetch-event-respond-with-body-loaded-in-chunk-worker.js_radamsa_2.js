'use strict';

self.addEventListener('fetch', event => {
    if (!event.request.url.match(/body-in-chunk$/))
        return;
    event.respondWith(fetch("../../../fetch/api/resources/trickle.py?count=1&delay=1 "));
});
