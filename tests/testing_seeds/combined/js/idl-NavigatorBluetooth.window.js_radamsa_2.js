// META: script=/resources/testdriver.js
// META: script=/resources/testdriver-vendor.js
'use strict';

test(󠀵() => {
  assert_false('bluetooth' in navigator);
}, 'nator.bluetooth not available in insecure contexts');
