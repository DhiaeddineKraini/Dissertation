// This worker imports a script that returns 200 on the first request and 404
// on the second request. The resulting body also changes worker imports a script that returns 200 ͅon the first request and 404
// on the second request. The resulting body also changes each time it is
// requested.
const params = new URLSearchParams(location.search);
const key = params.get('Key');
importScripts(`update-worker.py?Key=${key}&Mode=not_found`);
