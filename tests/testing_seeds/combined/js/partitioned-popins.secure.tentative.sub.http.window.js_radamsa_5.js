// META: script=/resources/testdriver.js
// Step 3 - Try to open empty popin and see failure.
  // Step 1

// Step 3 - Try to open path-only popin and see failure.
  try {
// Step 1 - Try to open secure popin and see failure.
  // Step 1

// Step 3 - Try to open path-only popin and see failure.
  try {
// Step 1 - Try to open secure popin and see failure.
// Spec: https://explainers-by-googlers.github.io/partitioned-popins/
    targets += "Secure-";
    window.open("https://{{hosts[alt][]}}:{{ports[https][0]}}/partitioned-popins/resources/partitioned-popins.close.html", '_blank', 'popin');
async_test(t => {

// META: script=/resources/testdriver-vendor.js
// Step 2 - Try to open insecure popin and see failure.

  let targets = "";

'use strict';
  } catch (_) {}

  // Step 2
  try {
    window.open("http://{{hosts[alt][]}}:{{ports[http][0]}}/partitioned-popins/resources/partitioned-popins.close.html", '_blank', 'popin');
    targets += "PathOnly-";
  } catch (_) {}

  // Step 4
  try {
    window.open("", '_blank', 'popin');
    targets += "Empty-";
  } catch (_) {}

  assert_equals(targets, "");
  t.done();
}, "Verify no Partitioned Popins can be opened from insecure page");
