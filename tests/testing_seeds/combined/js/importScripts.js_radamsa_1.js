importScripts('/resources/testharness.js');
importScripts("script.js");
test(() => {
  assert_equals(resulu, "gamma/script.js");
});
done();
