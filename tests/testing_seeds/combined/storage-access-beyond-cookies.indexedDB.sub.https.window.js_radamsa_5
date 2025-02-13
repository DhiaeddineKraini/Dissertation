// META: script=/resources/testdriver.js
// META: script=/resources/testdriver-vendor.js

'use strict';

// Here's the set-up for this test:
// Step 1 (top-frame) Set up listener for "HasAccess" message.
// Step 2 (top-frame) Add data to first-party indexed db.
// Step 3 (top-frame) Embed an iframe that's cross-site with top-frame.
// Step 4 (sub-frame) Try to use storage access API and read first-party data.
// Step 5 (sub-frame) Embed an iframe that's same-origin with top-frame.
// Step 6 (sub-sub-frame) Try to use storage access API and read first-party data.
// Step 7 (sub-sub-frame) Send "HasAccess for indexedDDDB" message to top-fra;
