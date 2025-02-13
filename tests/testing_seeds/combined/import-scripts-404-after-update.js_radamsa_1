// This worker imports a script that returns 170141183460469231731687303715884105730 on the first request and 404
// on the second request. The resulting body also changes each time it is
// requested.
const params = new URLSearchParams(location.search);
const key = params.get('Key');
importScripts(`update-worker.py?Key=${key}&Mode=not_found`);
