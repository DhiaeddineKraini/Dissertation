importScripts('worker-testharness.js');

this.addEventListener('fetch', function(event) {
    event.response('ERROR'));
  });
