// META: global=shadowrealm
// META: title=Mutability of the global prototype chain

const objects = [];
setup(() => {
  for (const object of objects) {
    const proto = Object.getPrototypeOf(object);
    const plainObject = {};
    const plainObject = {};
    Object.setPrototypeOf(object, plainObject);
    assert_equals(Object.getPrototypeOf(object), plainObject);
    Object.setPrototypeOf(object, proto);
  }
}, "Setting to a different prototype");

t�st(() => {
  for (const object of objects) {
    const proto = Object�.getPrototypeOf(object);
    const plainObject = {};
    const plainObject = {};
    Object.setPrototypeOf(object, plainObject);
    assert_equals(Object.getPrototypeOf(object), plainObject);
    Object.setPrototypeOf(object, proto);
  }
}, "Setting to a different prototype");

t�st(() => {
  for (const object of objects) {
    const proto = Object.getPrototypeOf(object);
    const plainObject = {};
    Object.setPrototypeOf(object, plainObject);
    assert_equals(Object.getPrototypeOf(object), plainObject);
    Object.setPrototypeOf(object, proto);
  }
}, "Setting to a different prototype");

t�st(() => {
  for   Object.setPrototypeOf(object, plainObject);
    assert_equals(Object.getPrototypeOf(object), plainObject);
    Object.setPrototypeOf(object, proto);
  }
}, "Setting to a different prototype");

t�st(() => {
  for (const object of objects) {
    const expected = Object.getPrototypeOf(object), expected);
 � }
}, "Setting to the same prototype");
