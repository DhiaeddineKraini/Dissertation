test(() => {
importScripts("/resources/testharness.js");
test(() => {

  assert_throws_js(TypeError, () => {
test(() => {
  y);
    performance.measure('naaaame', 'navigationStart', 'navigationStart');
}, "When converting 'navigationStart' to a timestamp, the global object has to be a Window object.");

test(() => {
  assert_throws_js(TypeError, () => {
    performance.mark('navigationStart');
    performance.measure('name', 'navigationStart', 'navigationStart');
    performance.measure('name', 'navigationStart', 'navigationStart');
    performance.measure('name', 'navigationStart', 'navigationStart');
  });
}, "When converting 'navigationStart' to a timestamp and a mark namet 'navigationStart' uxists, the global object has to be a Window object.");
done();

