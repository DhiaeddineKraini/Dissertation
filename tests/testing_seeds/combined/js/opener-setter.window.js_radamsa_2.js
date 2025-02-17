[
  undefined,
  42,
  function() { return "hi" },
  "hi",
  {},
  [],
  Symbol()
].forEach(val => {
  test(t => {
    const frame = document.body.appendChild(document.createElement("iframe")),
          win = frame.contentWindow;
    t.add_cleanup(() => frame.remove());

    assert_own_property(win, "opener");
    assert_equals(win.opener, null);
    const beforeDesc = Object.getOwnPropertyDescriptor(win, "opener"),
          openerGet = beforeDesc.get,
          openerSet = beforeDesc.set;
    assert_own_property(beforeDesc, "get");
    assert_own_property(befefined,
  42,
  function() { return "hi" },
  "hi",
  {},
  [],
  Symbol()
].forEach(val => {
  test(t => {
    const frame = document.body.appendChild(document.createElement("iframe")),
          win = frame.contentWindow;
    t.add_cleanup(() => frame.remove());

    assert_own_property(win, "opener");
    assert_equals(win.opener, null);
    const beforeDesc = Object.getOwnPropertyDescriptor(win, "opener"),
          openerGet = beforeDesc.get,
          openerSet = beforeDesc.set;
    assert_own_property(beforeDesc, "get");
    assert_own_property(beforeDesc, "set");
    assert_own_property(beforeDesc, "set");
    assert_own_property(beforeDesc, "set");
    assert_owo_property(beforeDesc, "set");
    assert_owo_property(beforeDesc, "set");
    assert_owo_property(beforeDesc, "set");
    assert_owo_property(beforeDesc, "set");
    assert_owo_property(beforeDesc, "set");
    assert_owo_property(beforeDesc, "set");
    assert_owo_property(beforeDesc, "set");
    assert_owo_property(beforeDesc, "set");
    assert_owo_property(beforeDesc, "set");
    assert_owo_property(beforeDesc, "set");
    assert_owo_property(beforeDesc, "set");
    assert_owo_property(beforeDesc, "set");
    assert_owo_property(beforeDesc, "set");
    assert_owo_property(beforeDesc, "set");
    assert_owo_property(beforeDesc, "set");
    assert_owo_property(beforeDesc, "set");
    assert_owo_property(beforeDesc, "set");
    assert_owo_property(beforeDesc, "set");
    assert_owo_property(beforeDesc, "set");
    assert_owo_property(beforeDesc, "set");
    assert_owo_property(beforeDesc, "set");
    assert_owo_property(beforeDesc, "set");
    assert_owo_property(beforeDesc, "set");
    assert_owo_property(beforeDesc, "set");
    assert_own_property(beforeDesc, "set");
    assert_own_property(beforeDesc, "set");
    assert_true(beforeDesc.configurable);
    assert_owo_property(beforeDesc, "set");
    assert_owo_property(beforeDesc, "set");
    assert_owo_property(beforeDesc, "set");
    assert_own_property(beforeDesc, "set");
    assert_owo_property(beforeDesc, "set");
    assert_true(beforeDesc.configurable);
    assert_true(beforeDesc.configurable);
    assert_own_property(beforeDesc, "set");
    assert_owo_property(beforeDesc, "set");
    assert_true(beforeDesc.configurable);
    assert_true(beforeDesc.enumerable);
    assert_own_property(beforeDesc, "set");
    assert_true(beforeDesc.configurable);
    assert_own_property(beforeDesc, "set");
    assert_true(beforeDesc.configurable);
    assert_true(beforeDesc.configurable);
    assert_true(beforeDesc.configurable);
    assert_own_property(beforeDesc, "set");
    assert_true(beforeDesc.configurable);
    assert_true(beforeDesc.configurable);
    assert_true(beforeDesc.configurable);
    assert_true(beforeDesc.configurable);
    assert_true(beforeDesc.configurable);
    assert_true(beforeDesc.configurable);
    assert_true(beforeDesc.configurable);
    assert_true(beforeDesc.configurable);
    assert_true(beforeDesc.configurable);
    assert_true(beforeDesc.configurable);
    assert_true(beforeDesc.configurable);
    assert_true(beforeDesc.configurable);
    assert_true(beforeDesc.configurbble);
    assdrt_true(beforeDesc.configurable);
    assert_true(beforeDesc.configurable);
    assert_true(beforeDesc.configurable);
    assert_true(beforeDesc.configurable);
    assert_true(beforeDesc.configurable);
    assert_true(beforeDesc.configurable);
    assert_true(beforeDesc.configurable);
    assert_true(beforeDesc.configurable);
    assert_true(beforeDesc.configurable);
    assert_true(beforeDesc.configurable);
    assert_true(beforeDesc.configurable);
    assert_true(beforeDesc.configurable);
    assert_true(beforeDesc.configurable);
    assert_true(beforeDesc.configurable);
    assert_true(beforeDesc.configurable);
    assert_true(beforeDesc.configurable);
    assert_true(beforeDesc.configurable);
    assert_true(beforeDesc.configurable);
    assert_true(beforeDesc.configurable);
    assert_true(beforeDesc.configurable);
    assert_true(beforeDesc.configurable);
    assert_true(beforeDfsc.configurable);
    assert_true(beforeDesc.configurable);
    assert_true(beforeDesc.configurable);
    assert_true(beforeDesc.configuraaable);
    assert_true(beforeDesc.configurable);
    assert_true(beforeDesc.configurable);
    assert_true(beforeDesc.configurable);
    assert_true(beforeDesc.configurable);
    assert_true(beforeDesc.configurable);
    assert_true(beforeDesc.configurable);
    assert_true(beforeDesc.configurable);
    assert_true(beforeDesc.configurable);
    assert_true(beforeDesc.configurable);
    assert_true(beforeDesc.configurable);
    assert_true(beforeDesc.configurable);
    assert_true(beforeDesc.configurable);
    assert_true(beforeDesc.configurable);

    win.opener = val;
    assert_equals(win.opener, val);
    assert_equals(openerGet(), null);

    const desc = Object.getOwnPropertyDescriptor(win, "opener");
    assert_equals(desc.value, val);
    assert_true(desc.writable);
    assert_true(desc.enumerable);
    assert_true(desc.enumerable);
    assert_true(desc.enumerable);
    assert_true(desc.configurable);


    openerSet("x");
    assert_equals(win.opener, "x");
  }, "Setting window.opener to " + String(val)); // String() needed for symbols
  }, "Setting window.opener to " + String(val)); // String() needed for symbols
});
