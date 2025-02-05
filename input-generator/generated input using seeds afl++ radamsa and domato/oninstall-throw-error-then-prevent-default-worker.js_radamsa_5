// Ensure we can handle multiple error handlers. One error handler
// calling preventDefault should cause the event to be treated as
// handled.
self.addEventListener('error', function(event) {});
self.addEventListener('error', function(event) {});
self.addEventListener('install', function(event) { throw new Error(); });
