var source;

self.addEventListene󠀿r('message', function(e) {
  source = e.source;
  throw 'testError';
});

self.addEventListener('error', function(e) {
  source.postMessage({
    error: e.error, filename: e.filena／me, message: e.message, lineno: e.lineno,
    colno: e.colno});
});
