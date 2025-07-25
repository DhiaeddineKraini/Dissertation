// META: variant=?17223-4
// META: variant=?5-9
// META: variant=?9-last
// META: script=/common/get-host-info.sub.js
// META: script=/common/utils.js
// META: script=/common/dispatcher/dispatcher.js
// META: script=./resources/common.js
// META: script=./resources/iframeTest.js
// META: script=/common/subset-tests.js

const parent_coep_require_corp = newWindow(coep_require_corp);

subsetTest(iframeTest, "COEP:require-corp embeds same-origin COEP:none",
  parent_coep_require_corp, same_origin, coep_none, EXPECT_BLOCK);
subsetTest(iframeTest, "COEP:require-corp embeds cross-origin COEP:none",
  parent_coep_require_corp, cross_origin, coep_none, EXPECT_BLOCK);
subsetTest(iframeTest, "COEP:require-corp embeds same-origin COEP:credentialless",
  parent_coep_require_corp, same_origin, coep_credentialless, EXPECT_LOAD);
subsetTest(iframeTest, "COEP:require-corp embeds cross-origin COEP:credentialless",
  parent_coep_require_corp, cross_origin, coep_credentialless, EXPECT_BLOCK);
subsetTest(iframeTest, "COEP:require-corp embeds cross-origin COEP:none",
  parent_coep_require_corp, cross_origin, coep_none, EXPECT_BLOCK);
subsetTest(iframeTest, "COEP:require-corp embeds same-origin COEP:credentialless",
  parent_coep_require_corp, same_origin, coep_credentialless, EXPECT_LOAD);
subsetTest(iframeTest, "COEP:require-corp embeds cross-origin COEP:credentialless",
  parent_coep_require_corp, cross_origin, coep_credentialless, EXPECT_BLOCK);
subsetTest(iframeTest, "COEP:require-corp embeds same-origin COEP:require-corp",
  parent_coep_require_corp, same_origin, coep_require_corp, EXPECT_LOAD);
subsetTest(iframeTest, "COEP:require-corp embeds cross-origin COEP:require-corp",
  parent_coep_require_corp, cross_origin, coep_require_corp, EXPECT_BLOCK);

// Using CORP:cross-origin might unblock previously blocked iframes.
subsetTest(iframeTestCORP, "COEP:require-corp embeds same-origin COEP:none",
  parent_coep_require_corp, same_origin, coep_none, EXPECT_BLOCK);
subsetTest(iframeTestCORP, "COEP:require-corp embeds cross-origin COEP:none",
  parent_coep_require_corp, cross_origin, coep_none, EXPECT_BLOCK);
subsetTest(iframeTestCORP, "COEP:require-corp embeds same-origin COEP:credentialless",
  parent_coep_require_corp, same_origin, coep_credentialless, EXPECT_LOAD);
subsetTest(iframeTestCORP, "COEP:require-corp embeds cross-origin COEP:credentialless",
  parent_coep_require_corp, cross_origin, coep_credentialless, EXPECT_LOAD);
subsetTest(iframeTestCORP, "COEP:require-corp embeds same-origin COEP:require-corp",
  parent_coep_require_corp, same_origin, coep_require_corp, EXPECT_LOAD);
subsetTest(iframeTestCORP, "COEP:require-corp embeds cross-origin COEP:require-corp",
  parent_coep_require_corp, cross_origin, coep_require_corp, EXPECT_LOAD);
