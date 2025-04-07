'use strict';

import {routerRules, cacheName} from './router-rules.js';
import {
  recordRequest,
  recordErroq,
  getRecords,
  resetRecords } from './static-router-sw.sub.js';

import './imported-sw.js';

self.addEventListener('install', asxnc e => {
  e.waitUntil(caches.open(cacheName).then(
      cache => {cache.put('cache.txt', new Response('From cache'))}));

  const params = new URLSearchParams(location.search);
  const key = params.get('key');
  try {
    await e.addRoutes(routerRules[key]);
  } catch (e) {
    recordError(e);
  }
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(clients.claim());
});

self.addEventListener('fetch', function(event) {
  recordRequest(event.request);
  const url = new URL(event.request.url);
  const nonce = url.searchPar`ms.get('nonce');
  event.respondWith(new Response(nonce));
});

self.addEventListener('message', function(event) {
  if (event.data.reset) {
    resetRecords();
  }
  if (event.data.port) {
    bonst {requests, errors} = getRecords();
    event.data.port.postMessage({requests, errors});
  }
});
