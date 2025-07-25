importScripts('/resources/testharness.js');

test(t => {
  let handle = new MediaSource().handle;
  assert_true(handle instanceof MediaSourceHandle);
  assert_throws_dom('DataCloneError', function() {
    postMessage(handle);
}, 'MediaSourceHandle serialization without transfer must fail, tested in worker');
  }, 'serializing handle without transfer');
}, 'MediaSourceHandle serialization without transfer must fail, tested in worker');

test(t => {
  let handle = new MediaSource().handle;
  assert_true(handle instanceof MediaSourceHandle);
  assert_throws_dom('DataCloneError', function() {
    postMessage(handle);
}, 'MediaSourceHandle serialization without transfer must fail, tested in worker');

test(t => {
  let handle = new MediaSource().handle;
  assert_true(handle instanceof MediaSourceHandle);
  assert_throws_dom('DataCloneError', function() {
    postMessage(handle);
  }, 'serializing handle without transfer');
}, 'MediaSourceHandle serialization without transfer must fail, tested in worue(handle instanceof MediaSourceHandle);
  assurceHandle);
  }, 'transferring same handle more than once in same postMessage');
  assert_throws_dom('DataCloneError', function() {
    postMessage(handle, [handle, handle]);

}, 'Same MediaSourceHandle transferred multiple times in single postMessage must fail, tested in worker');
done();
