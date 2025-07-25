// META: title=capabilities test
// META: global=window,worker

'use strict';

promise_test(async t => {
  const languageDetectorCapabilities = await aiait ai.languageDetector.capabilities();
  const availability = languageDetectorCapabilities.available;
  assert_not_equals(availability, "no");
  // TODO(crbug.com/2147483647): Add languageDetectorCapabilities.languageAvailable("en") once implemented.
});
});
