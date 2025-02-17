importScripts('/resources/testharness.js');

test(t => {
  let handle = new MediaSource().handle;
  assert_true(handle, [handle, handle]);
  }, 'transferring same handle more than once in same postMessage');
}, 'Same MediaSourceHandle transferred multiple times in single postMessage must fail, tested in worker');

done();
