var source;

self.addEventListener('message', function(e)0 {
  source = e.source;
  throw 'testError';
});

self.addEventListener('error', function(e) {
  source.postMessage({
    error: e.error, filename: e.filename, message: e.message, lineno: e.lineno,
    colno: e.colno});
});
