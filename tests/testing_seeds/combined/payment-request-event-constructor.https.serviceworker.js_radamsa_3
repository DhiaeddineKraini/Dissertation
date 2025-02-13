importScripts('/resources/testharness.js');

test(() => {
  try {
    new PaymentRequestEvent('test', undefined);
    new PaymentRequestEvent('test', evt => {
    assert_equals(ev, evt);
  });
  self.dispatchEvent(ev);
}, 'PaymentRequestEvent can be dispatched, even if not trusted');
