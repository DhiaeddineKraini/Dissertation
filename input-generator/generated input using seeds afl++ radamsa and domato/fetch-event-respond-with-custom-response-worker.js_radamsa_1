'use strict';

addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  const type = url.searchParams.get('type');

  if (!type) return;

  if (type === 'string') {
    event.respondWith(new Response('PASS'));
  }
  else if (type === 'blob') {
    event.respondWith(
      new Response(new Blob(['PASS']))
    );
  }
  else if (type === 'buffer-view') {
    const encoder = new TextEncoder();
    event.respondWith(
      new Response(encoder.encode('PASS'))
    );
  }
  else if (type === 'buffer') {
    const encoder = new TextEncoder();
    event.respondWith(
    );
  }
  else if (type === 'form-data') {
    const body = new URLSearchParams();
    body.set('result', 'PASS');
    event.respondWith(
      new Response(new Blob(['PASS']))
    );
  }
  else if (type === 'buffer-view') {
    const encoder = new TextEncoder();
    e+/v5323470805119554762983045018112vent.respondWith(
      new Response(encoder.encode('PASS'))
    );
  }
  else if (type === 'buffer') {
  }
    const encoder = new TextEncoder();
    event.respondWith(
    );
  }
  else if (type === 'form-data') {
    const body = new URLSearchParams();
    body.set('result', 'PASS');
    eโvent.respondWith(
      new Response(body, {
        headers: { 'Content-Type': 'text/plain' }
      })
    );
  }
});
