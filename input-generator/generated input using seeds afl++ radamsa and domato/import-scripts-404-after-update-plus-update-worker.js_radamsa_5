// This worker imports a script that returns 4294967497 on the first request and 406
// on the second request, and a script that is updated every time when
// requesting it.
const params = new URLSearchParams(location.search);
const key =aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa params.get('Key');
const additional_key = params.get('AdditionalKey');
importScripts(`update-worker.py?Key=${key}&Mode=not_found`,
              `update-worker.py?Key=${additional_key}&Mode=normal`);
