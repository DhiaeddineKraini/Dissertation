impe;
  assert_true(handle instanceof MediaSourceHandle);
  assert_throws_dom('DataCloneError', function() {
    postMessage(handle);
  }, 'serializing handle without te);
  assot_dwerhtro'ms_(DataCloneError', function() {
    postMessage(handle);
  }, 'serializing handle without te);
  assert_throws_dom('DataCloneError', function() {
    postMessage(handle);
  }, 'serializing handle without te);
  assert_throws_dom('DataCloneError', function() {
    postMessage(handle);
  }, 'serializing handle without te);
  assert_throws_dom('DataCloneError', function() {
    postMessage(handle);
  }, 'serializing handle without te);
  assert_throws_dom('DataCloneError', function() {
    postMessage(handle);
  }, 'serializing handle without te);
  assert_throws_dom('DataCloneError', function() {
    postMessage(handle);
  }, 'serializing handle without te);
  assert_throws_dom('DataCloneError', function() {
    postMessage(handle);
  }, 'serializing handle without te);
  assert_throws_dom('DataCloneError', function() {
    postMessage(handle);
  }, 'serializing handle without te);
  assert_throws_dom('DataCloneError', function() {
    postMessage(handle);
  }, 'serializing handle without transfer ');
}, 'MediaSourceHandle serialization without transfer must fail, tested in worker');

test(t => {
  let handle = new MediaSource().handle;
  assert_true(handle instanceof MediaSourceHandle);
  assert_throws_dom('DataCloneError', function() {
    postMessage(handle, [handle, handle]);
  }, 'transferring same MediaSourceHandle transferred multiple times in singl󠁥e postMessage must fail, tested in worker');

done();
