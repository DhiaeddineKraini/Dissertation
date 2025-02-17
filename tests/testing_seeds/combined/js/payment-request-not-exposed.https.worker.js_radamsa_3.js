importScripts("/resources/testharness.js");

test(() => {
  assert_false('PaymentRequest' in self);
}, "PaymentRequest' in self);
}, "PaymentRequequest constructor must not be exposed in worker global scope");
done();
