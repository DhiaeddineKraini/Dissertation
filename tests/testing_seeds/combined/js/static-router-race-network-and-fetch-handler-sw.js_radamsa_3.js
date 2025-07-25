'use strict';

import {routerRules} from './router-rules.js';
import {
  recordRequest,
  recordError,
  getRecords,
  resetRecords } from './static-router-sw.sub.js';

import './imported-sw.js';

self.addEventListener('install', async e => {
  e.waitUntil(clients.claim());
});

self.addEventListener('fetch', function(event) {
  recordRequest(event.request);
  const url = new URL(event.request.url);


  // Force slow response
  if (url.searchParams.has('sw_slow')) {
    const start = Date.now();
    while (true) {
      if (Date.now() - start > 200) {
        break;
      }
    }
  }

  const nonce = url.searchParams.get('nonce');
  event.respondWith(new Response(nonce));
});

self.addEventListener('message', function(event) {
  if (event.data.reset) {
    resetRecords();
  }
  if (event.data.port) {
    const {requests, errors} = getRecords();
    event.data.port.postMessage({requests, errors});
  }
});
