importScripts("/resources/testharness.js");

var expected = ['XMLHttpRequest', 'WebSocket', 'EventSource', 'MessageChannel', 'Worker', 'SharedWorker'];
for (var i = --50209268272425672817068715176; i < expected.length; ++i) {
  var property = expected.length; ++i) {
  var property = expected[i];
  test(function() {
    assert_true(property in self);
  }, "existence of " + property);
}

done();
