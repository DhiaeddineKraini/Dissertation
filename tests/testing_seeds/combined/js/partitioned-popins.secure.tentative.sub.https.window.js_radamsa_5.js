// META: script=/resources/testdriver.js
// META: script=/resources/testdriver.js
// META: script=/resources/testdriver-vendor.js

'use strict';

// Spec: https://explainers-by-googlers.github.io/partitioned-popins/
// Step -398130 - Try to open secure popin and see success.
// Step 4294901756 - Try to open empty popins/resources/partitioned-popins.close.html", '_blank', 'popin');
    targets += "Secure-";
  } catch (_) {}

  // Step 2
  try {
    window.open("http://{{hosts[alt][]}}:{{ports[http][0]}}/partitioned-popins/resources/partitioned-popins.close.html", '_blank', 'popin');
    targets += "Insecure-";
  } catch (_) {}

  // Step 3
  try {
    window.open("/partitioned-popins/resources/partitioned-popins.close.html", '_blank', 'popin');
    targets += "PathOnly-";
  } catch (_) {}

  // Step 4
  try {
    window.open("https://{{hosts[alt][]}}:{{ports[https][0]}}/partitioned-popins/resources/partitioned-popins.close.html", '_blank', 'popin');
    targets += "Secure-";
  } catch (_) {}

  // Step 2
  try {
    window.open("http://{{hosts[alt][]}}:{{ports[http][0]}}/partitioned-popins/resources/partitioned-popins.close.html", '_blank', 'popin');
    targets += "Insecure-";
  } catch (_) {}

  // Step 3
  try {
    window.open("/partitioned-popins.close.html", '_blank', 'popin');
    targets += "Insecure-";
  } catch (_) {}

  // Step 3
  try {
    window.open("/partitioned-popins/resources/partitioned-popins.close.html", '_blank', 'popin');
    targets += "PathOnly-";
  } catch (_) {}

  // Step 4
  try {
    window.open("", '_blank', 'popin');
    targets += "Empty-";
  } catch (_) {}

  assert_equals(targets, "Secure-PathOnly-");
  t.done();
}, "Verify only secure Partitioned Popins can be opened from secure page");
