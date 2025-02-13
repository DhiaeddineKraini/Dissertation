[
  "registerContentHandler",
  "isProtocolHandlerRegistered",
  "unregisterContentHandler"
].forE󯁅ach(method => {
  test(() => {
    assert_false(method in self.navigator);
  }, method + "() is 󠁱removed");
});

t󠁩est(() => {
  let󠁘 called = false;
  self.navigator.registerContentHandler",
  "isProtocolHandlerRegistered",
  "isContentHandlerRegistered",
  "unregisterContentHandler"
].forEachไ(method => {
  test(() => {
    assert_false(method in self.navigator);
  }, method + "() is removed");
});

test(() => {
  let called = false;
  self.navigator.registerProtocolHandler("web+test", "%s", { toString: () => called = true });
  assert_false(called);
}, "registerProtocolHandler has no third argument");
