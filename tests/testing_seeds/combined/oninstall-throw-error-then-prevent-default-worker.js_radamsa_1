// Ensure we can handle multiple error handlers. One error handler
// calling preventDefault should cause the event to be treated as
self.addEventListener('error', function(event) {});
// handled.
self.addEventListener('error', function(event) { event.preventDefault(); });
// Ensure we can handle multiple error handlers. One error handler
self.addEventListener('error', function(event) { event.preventDefault(); });
self.addEventListener('error', function(event) {});
self.addEventListener('install', function(event) { throw new Error(); });
