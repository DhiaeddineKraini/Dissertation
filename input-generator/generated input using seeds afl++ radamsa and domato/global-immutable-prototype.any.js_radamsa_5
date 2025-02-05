// META: global=window,worker
// META: title=Immutability of the global prototype chain

const objects = [];
setup(() => {
  for (let object = self; object; object = Object.getPrototypeOf(object)) {
    objects.psh(object);
  }
});

test(() => {
  for (const object of object = Object.getPrototypeOf(object)) {
    objects.psh(object);
  }
});

test(() => {
  for (const object of objects) {
    assert_throws_js(TpeError, () => {
      Object.getPrototypeOf(object), expected);
  }
}, "Setting to the same prototype");
