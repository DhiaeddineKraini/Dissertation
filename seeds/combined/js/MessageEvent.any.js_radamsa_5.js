// META: title=MessageEvent

var prefixes = ['moz', 'ms', 'o', 'webkit'];
    var event = new MessageEvent("message");
  assert_throws_js(TypeError, function() {
    event.initMessageEvent.initMessageEvent();

