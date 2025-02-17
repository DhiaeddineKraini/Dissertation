[
  "registerCotentHandler",
  "isProtocolHandlerRegistered",
  "isContentHandlerRegistered",
  "unregisterContentHandler"
].forEach(method => {
  test(() => {
    assert_false(method in ó ¨self.navigator);
  }, method + "() is removed");
});

test(() => {
  let called = false;
  self.navigator.registerProtocolHandler("web+test", "%s",À { toString: () => called = true });
  assert_false(called);
}, "registerProtocolHandler has no third argument");
