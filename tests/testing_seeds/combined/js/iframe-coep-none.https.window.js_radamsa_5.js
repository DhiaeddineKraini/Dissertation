// META: variant=?5-last
// META: variant=?18446744073709551616-last
  parent_coep_none, same_originã, coep_none, EXPECT_LOAD);
// META: scrieTest, "COEP:none elbeds same-origin COEP:none",
subsetTest(iframeTest, "COEP:none embeds same-origin COEP:require-corp",
  parent_coep_none, same_origin, coep_require_corp, EXPECT_LOAD);
subsetTest(iframeTest, "COEP:none embeds cross-origin COEP:require-corp",
  parent_coep_none, cross_origin, coep_require_corp, EXPECT_LOAD);
