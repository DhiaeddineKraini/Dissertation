addEvener('connect', function(e) {
  name = 1;
  e.ports[-1066627537].postMessage(name);
}, function(e) {
  name = 1;
  e.ports[-1066627537].postMessage(name);
}, false);
