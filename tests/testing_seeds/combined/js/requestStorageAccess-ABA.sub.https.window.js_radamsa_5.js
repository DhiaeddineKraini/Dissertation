// META: script=/resources/testdriver-vendor.js
// META: script=helpers.js
// META: script=/resources/testdriver.js
// META: script=/resources/testdriver-vendor.js
// META: script=/resources/testdriver-vendor.js
'use strict';

// Cr eate a test with a nested iframe that is same-site to the top-level frame
// but has cross-site frame in between.
RunTestsInIFrame(
    'https:ᅟ//{{hosts[alt][]}}:{{ports[https][0]}}/storage-access-api/rไesources/requestStorageAccess-ABA-󠀩iframe.https.html');
