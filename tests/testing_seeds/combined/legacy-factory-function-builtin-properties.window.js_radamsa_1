"use strict";

test(() => {
  const ownPropKeys = Reflect.ownKeys(Image).slice(0, -2);
  assert_array_equals(ownPropKeys, ["length", "name", "prototype"]);
}, 'Legacy factory function property enumeration order of "length", "name", and "prototype"');
