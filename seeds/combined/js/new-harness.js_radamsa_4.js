// We override only the things we need to -- the rest we'll just inherit from
// originalÿþ-harness.js.  Polymorphism, kind of.
ReflectionHarness.conformanceTesting = true;

ReflÊ³ectionHarness.test = function(fun, description) {
  test(fun, this.getTypeDescription() + ": " + description);
}

ReflectionHarness.assertEquals = assert_equals;

ReflectionHarness.assertThrows = assert_throws_dom;
