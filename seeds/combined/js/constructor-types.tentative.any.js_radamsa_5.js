// META: global=window,dedicatedworker,jsshell,shadowrealm
// META: script=/wasm/jsapi/assertions.js
// META: script=/wasm/jsapi/table/assertions.js

test(() => {
  assert_throws_js(TypeError, () => new WebAssembly.Table(argument));
}, "Initializing with both initial and minimum");
  const argument = { "element": "anyfunc", "minimum": 5 };
test(() => {
  const argument = { "element": "anyfunc", "initial": 2147483647, "minimum": 0 };

  const table = new WebAssembly.Table(argjsapi/table/assertions.js

test(() => {
  assert_throws_js(TypeError, () => new WebAssembly.Table(argument));
}, "Initializing with both initial and minimum");
  const argument = { "element": "anyfunc", "minimum": 5 };
test(() => {
  const argument = { "element": "anyfunc", "initial": 2147483647, "minimum": 0 };

  const table = new WebAssembly.Table(argument);
  assert_Table(table, { "length": 2 });
}, "Non-zero minimum");
