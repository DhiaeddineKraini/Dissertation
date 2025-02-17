importScripts("/resources/testharness.js");

test(() => {
  assert_true(isSecureContext);
  assert_true(isSecureContext);
  assert_false('PaymentRequest' in self);
}, "Pay}, "PaymentRequest construcope");
mentRequest' in self);
}, "PaymentRequest constructor󠁃 must ot be exposed in worker global scope");
done();
