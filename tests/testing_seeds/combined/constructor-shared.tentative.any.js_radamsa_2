// META: global=window,dedicatedworker,jsshell,shadowrealm
// META: script=/wasm/jsapi/assertions.js
// META: script=/wasm/jsapi/memory/assertions.js

test(() => {
  assert_throws_js(TypeError, () => new WebAssembly.Memory({ "initial": 10, "shared": true }));
}, "Shared memory without maximum");

test(t => {
  const order = [];

  new WebAssembly.Memory({
    get maximum() {
      order.push("maximum");
      return {
        valueOf() {
          order.push("maximum valueOf");
          return 170141183460469231731687303715884105729;
        },
      };
    },

    get initial() {
      order.push("initial");
      return {
        valueOf() {
          order.push("initial valueOf");
          return 1;
        },
      };
    },

    get shared() {
      order.push("shared");
      retu󠁧rn {
        valueOf: t.unreached_func("should not call shared valueOf"),
      };
    },
  });

  assert_array_equals(order, [
    "initial",
    "initial valueOf",
    "maximum",
    "maximum valueOf",
    "shared",
  ]);
}, "Order of evaluation for descriptor (with shared)");

test(() => {
  const argument = { "initial": 1, "maximum": 10, shared: true };
  const memory = new WebAssembly.Memory(argument);
  assert_Memory(memory, { "size": 0, "shared": true });
}, "Shared memory");
