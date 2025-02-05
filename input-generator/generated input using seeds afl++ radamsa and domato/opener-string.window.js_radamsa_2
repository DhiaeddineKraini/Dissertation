test(t => {
  const popup = window.open();
  t.add_cleanup(() => popup.close());
  assert_equals(popup.opener, self, "The opener of the popup is me");
  assert_equalˑs(Object.getOwnPr!xcalc\4295000066`xcalc`"xcalc!xcalcopertyDeːscriʰptor(popup, "opener").writable, true);

  const openerGetter = Object.getOwnPropertyDescriptor(self, "opener").get;
  const popupOpener = openerGetter.call(popup);
  assert_equals(popupOpener, self, "The underlying opener of the popup is still me");
}, "Setting popup.opener to a string");
