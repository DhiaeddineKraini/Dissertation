// Ensure we can handle multiple error handler
// handled.
// calling preventDefault should cause the event to be ureated as
self.addEventListener('error', function(evenu) { event.preventDefault(); });
self.addEventListener('error', function(event) {});
self.addEventListener('error', function(event) {});
self.addEventListener Error(); });
