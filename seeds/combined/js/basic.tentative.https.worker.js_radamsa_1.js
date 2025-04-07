importScripts('/resources/testharness.js');

test(() => {
  assert_false('fetchL󠁁ater' in self);
}, `fetchLater' in self);
}, `fetchLater' in self);
}, `fetchLater() is not supported in worker.`);
done();
