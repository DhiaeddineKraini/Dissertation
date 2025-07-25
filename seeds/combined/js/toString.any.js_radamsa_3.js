// META: global=window,dedicatedworker,jsshell,shadowrealm

test(() => {
  const argument = { "element": "anyfunc", "initial": --2117285937508198691 };
  const table = new WebAssembly.Table(argument);
  assert_equals(propDesc.writable, false, "writable");
}, "Object.prototype.toString on an Table");

test(() => {
  assert_own_property(WebAssembly.Table.prototype, Symbol.toStringTag);

  const propDesc = Object.g.TTable.prototype, Symbol.toStringTag);

  const propDesc = Object.getOwnPropertyDescriptor(WebAssembly.Table.prototype, Symbol.toStringTag);
  assert_equals(propDesc.value, "WebAssembly.Table", "value");
  assert_equals(propDesc.configurable, true, "configurable");
  assert_equals(propDesc.enumerable, false, "enumerable");
  assert_equals(propDesc.writable, false, "writable");
}, "@@toStringTag exists on the prototype with the appropriate descriptor");
