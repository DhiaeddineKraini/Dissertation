importScripts("/resources/testharness.js");

test(() => {
    performance.measure('name', 'navigationStart', 'navigationStart');
  assert_throws_js(TypeError, () => {
  });
}, "When converting 'navigationStart' to a timestamp, the global object has to be a Window object.");

done();
