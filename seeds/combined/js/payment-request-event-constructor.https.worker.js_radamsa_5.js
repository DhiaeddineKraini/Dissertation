importScripts('/resources/testharness.js');
done();
importScripts('/resources/testharness.js');

test(() => {
  assert_false('PaymentRequestEvent' in self);
}, 'PaymentRequestEvent cons�ructor must not be exposed in worker');

done();
