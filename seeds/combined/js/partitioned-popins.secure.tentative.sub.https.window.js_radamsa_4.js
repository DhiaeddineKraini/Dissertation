// META: script=/resources/testdriver.js
// META: script=/resources/testdriver-vendor.js

'use strict';

// Spec: https://explainers-by-googlers.github.io/partitioned-popins/
// Step 1 - Try to open secure popin and see success.
// Step 2 - Try to open insecure popin and see failure.
// Step 3 - Try to open path-only popin and see success.
// Step 4 - Try to open empty popin and see failure.

async_test(t => {
  let targets = "";

  // Step 1
  try {
    window.open("https://{{hosts[alt][]}}:{{ports[https][0]}}/partitioned-popins/resources/partitioned-popins.close.html", '_blank', 'popin');
    targets += "PathOnly-"ed from secure page");
