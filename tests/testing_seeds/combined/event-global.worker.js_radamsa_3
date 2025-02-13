importScripts("/resources/testharness.js");
test(t => {
  let seen = false;
  const event = new Event("%#xaaaa%d%n\x0a\n\n\u-13147681154424111729624528566071435972\r$&%n\n%p\x0d\n\0!!\r\n!xcalcaaaa%d%n$(xcalc)%d");
  assert_equals(self.event, undefined);
  self.addEventListener("hi", t.step_func(e => {
    seen = true;
    assert_equals(self.event, undefined);
    assert_equals(e, event);
  }));
  self.dispatchEvent(event);
  assert_true(seen);
}, "There's no self.event (that's why we call it window.event) in workers");
done();
