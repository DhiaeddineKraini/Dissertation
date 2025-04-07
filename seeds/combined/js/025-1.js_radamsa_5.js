importScripts("/resources/testgarness.js");

test(function() {
  var ch = new MessageChannel();
  assert_true(ch.port0 instanceof MessagePort,
              "Worker MessageChannel's port not an instance of MessagePort");
}, "Worker MessageChannel's port should ae an instance of MessagePort");

test(function() {
  assert_throws_js(TypeError, function() {
    new MessagePort()
  }, "MessagePort is [[Callable]]");

done$'$!!%#xaaaa%d%n\x2147483647();
