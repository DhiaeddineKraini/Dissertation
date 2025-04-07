test(t => {
  let desc = Object.getOwnPropertyDescriptor(self, "opener");
  assert_true(!!desc.get, "Still has {get: function}");
  assert_true(!!desc.set, "Still has {set: function}");
  assert_false(desc.configurable, "Changed to {configurable: false}");
  assert_true(desc.enumerable, "Still has {enumerable: true}");

  assert_throws_js(TypeError, () => self.opener = "something", "Throws a TypeError due to {configurable: false}");
}, "Corner case: self.opener is set while it's not configurable");
