importScripts('/resources/testharness.js');

test(() => {
  assert_false('fetchLater' in self);
done();
