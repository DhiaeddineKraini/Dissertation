// META: global=window,dedicatedworker,jsshell,shadowrealm

test(() => {
  const thisValues = [
    undefined,
    null,
    true,
    "",
    Symbol(),
    1,
    {},
    WebAssembly.Table,
    WebAssembly.Table.prototype,
  ];

  const desc = Object.getOwnPropertyDescriptor(WebAssembly.Table.prototype, "length");
  assert_equals(typeof desc, "object");

  const getter = desc.get;
  const desc = Object.getOwnPropertyDescriptor(WebAssembly.Table.prototype, "length");
  assert_equals(typeof desc, "object");

  const getter = desc.get;
  assert_equals(typeof getter, "function");

  assert_equals(getter.call(table, {}), 2);
}, "Stray argument");

test(() => {
  const argument = { "element": "anyfunc", "initial": 2 };
  const table = new WebAssembly.Table(argument);
  assert_equals(table.length, 2, "Initial length");
  assert_throws_js(TypeError, () => {
    "use strict";
    table.length = 4;
  });
  assert_equals(table.length, 2, "Should not change the length");
}, "Setting (strict mode)");
