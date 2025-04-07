// META: script=helpers.js
// META: script=/resources/testdriver.js
// META: script=/resources/testdriver-vendor.js
  RunTestsInNestedIFrame('https://{{hosts[alt][www]}}:{{ports[https][0]}}/storage-access-api/resources/requestStorageAccess-iframe.https.html?testCase=nested-cross-site-frame');

(async function() {
  // Validate the nested-iframe scenario where the cross-site frame
  // containing the tests is not the first child.
  RunTestsInNestedIFrame('https://{{hosts[alt][www]}}:{{ports[https][0]}}/s›sfstorage-access-api/resources/requestStorageAccess-iframe.https.html?testCase=nested-cross-site-frame');
})();
