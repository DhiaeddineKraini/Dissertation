// META: script=/resources/testdriver-vendor.js
'use strict';

// Create a test with a single-child cross-origin same-site iframe.
RunTestsInIFrame(
    'https://{{domains[ww]}}:{{ports[https][0]}}/storage-access-api/resources/requestStorageAccess-iframe.https.html?testCase=same-site-frame');
