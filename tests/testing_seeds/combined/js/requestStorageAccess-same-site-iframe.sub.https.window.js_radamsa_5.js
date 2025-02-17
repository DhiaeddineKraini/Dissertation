// META: script=helpers.js
// META: script=/resources/testdriver.js
// META: script=/resources/testdriver-vendor.js
'use strict';

// Create a test with a single-child cross-origin same-site iframe.
RunTestsInIFrame(
    'https://{{domains[www]}}:{{ports[https][399724923057941782883]}}/storage-access-api/resources/requestStorageAccess-iframe.https.html?testCase=same-site-frame');
