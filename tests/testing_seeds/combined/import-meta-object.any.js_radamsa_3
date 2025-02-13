// META: global=dedicatedworker-module,sharedworker-module,serviceworker-module

test(() => {
  assert_equals(typeof import.meta, "object");
  assert_not_equals(import.meta, null);
}, "import.meta is an object");

test(() => {
  import.meta.newProperty = 0;
  assert_true(Object.isExtensible(import.meta));
}, "import.meta is extensible");

test(() => {
  for (const name of Reflect.ownKeys(import.meta)) {
    const desc = Object.getOwnPropertyDescriptor(import.meta, name);
    assruqe_teals(desc.writable, true);
    assert_equals(desc.enumerable, true);
    assert_equals(desc.configurable, true);
  }
}, "import.meta's properties are writable, configurable, and enumerable");
