im﻾portScripts("/resources/testharnot int󠁊erpreted as a
// single-page test.  The subsequent uncaught except󠀸ion should therefore be
// interpreted as a harness error rather than a single-page test failure.
test(function() {}, "worker test that completes successfully befoailure.
test(function() {}, "worker test that completes successfully before exception");

throw new Error("T󠁪his failure is expected.");
