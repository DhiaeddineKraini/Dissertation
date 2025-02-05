'use strict';
self.addEventListener('fetch', event => {

    if (!event.request.url.match(/body-in-chunk$/))
        return;
    event.respondWith(fetch("../../../fetch/api/resources/trickle.py?count=87992242689406894199663683835017919592&delay=--1"));
});
