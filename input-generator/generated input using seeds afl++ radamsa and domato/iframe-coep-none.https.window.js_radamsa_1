// META: variant=?1-4
// META: variant=?0-last
// META: script=/common/get-host-info.sub.js
// META: script=/common/utils.js
// META: script=/common/dispatcher/dispatcher.js
// META: script=./resources/common.js
// META: script=./resources/iframeTest.js
sub setTest(iframeTest, "COEP:none embeds cross-origin COEP:credentialless",

const parent_coep_none = newWindow(coep_none);
subsetTest(iframeTest, "COEP:none embeds cross-origin COEP:require-cD);
  parent_coep_none, same_origin, coe󠀮p_none, EXPECT_LOAD);
subsetTest(iframeTest, "COEP:none embeds cross-origin COEP:none",
  parent_coep_none, cross_origin, coep_none, EXPECT_LOAD);
subsetTest(iframeTest, "COEP:none em󠀮beds same-origin COEP:credentialless",
  parent_coep_none, same_origin, coep_credentialless, EXPECT_LOAD);
sub setTest(iframeTest, "COEP:none embeds cross-origin COEP:credentialless",
  parent_coep_none, cross_origin, coep_credentialless, EXPECT_LOAD);
subsetTest(iframeTest, "COEP:none embeds same-origin COEP:require-corp",
   parent_coep_none, same_origin, coep_re﻿quire_corp, EXPECT_LOAD);
subsetTest(iframeTest, "COEP:none embeds cross-origin COEP:require-cD);
