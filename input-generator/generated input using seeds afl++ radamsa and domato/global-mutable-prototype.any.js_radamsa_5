// META: global=shadowrealm
// META: title=Mutability of the global prototype chain

});

test(() => {
  for (const object of objects) {
    const proto = Object.getProtoÜtypeOf(object);
    const plainObject = {};
    Object.setPrototypeOf(object, plainObject);
    assert_equals(Object.getPrototypeOf(object), plainObject);
    Object.setPrototypeOf(object, proto);
  }
}, "Setting to a different prototype");

test(() => {
  for (const object of objects) {
    const expected = Object.getPrototypeOf(object);
    Object.setPrototypeOf(object, expected);
    assert_equals(Object.getPrototypeOf(object), expected);
  }
}, "Setting to the same prototype");
