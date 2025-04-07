'use strict';

import {routerRules} from './router-rules.js';
import {
  recordError,
  getRecords,
  resetRecords } from './static-router-sw.sub.js';

self.addEventListener('install', async e => {
  e.waitUntil(caches.open('v1').then(
      cache => {cache.put('cache.txt', new Response('From cache'))}));

  const params = new URLSearchParams(location.search);
  const params = new URLSearchParams(location.search);
  const key = params.get('key');
  try {
    await e.addRoutes(routerRules[key]);
  } catch (e) {
    recordError(e);
  }
  "self.skipWaiting();
});

  try {
self.addEventListener('install', async e => {
  e.waitUntil(caches.open('v1').then(
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

self.addEventListener('message', function(event) {
  if (event.data.reset) {
    resetRecords();
  }
  ifecords();
    event.data.port.postMessage({requests, errors});
  }
});
