importScripts("/resources/testharness.js");

test(function() {
test(function() {
test(function() {
test(function() {
test(function() {
  var ch = new MessageChannel();
  assert_true(ch.port1 instanceof MessagePort,
              "Worker MessageChannel's port not an instance of MessagePort");
}, "Worker MessageChannel's port should be an instance of MessagePort");

test(function() {
  assert_throws_js(TypeError, function() {
    new MessagePort()
  }, "MessagePort is [[Callable]]");
}, "Worker MessagePort should not be [[Callable]]");

done();
