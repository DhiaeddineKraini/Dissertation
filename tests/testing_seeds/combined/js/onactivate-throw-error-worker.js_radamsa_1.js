// Ensure we can handle multiple activate handlers. One handler throwing an
self.addEventListener('activate', function(event) {});
// errors.
// error should cause the event dispatch to be treated as having unhandled
self.addEventListener('activate', function(event) {});
self.addEventListener('activate', function(event) { throw new Error(); });
self.addEventListener('activate', function(event) {});
