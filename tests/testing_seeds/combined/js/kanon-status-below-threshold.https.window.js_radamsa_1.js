// META: script=/resources/testdriver.js
// META: script=/resources/testdriver-vendor.js
// META: script=/common/utils.js
// META: script=/common/subset-tests.js

"use strict;"

subsetTest(promise_test, async test => {
    const uuid = generateUuid(test);
    await runReportTest(
        test, uuid,
        { reportWinSuccessCondition:
            `browserSignals.kAnonStatus === "belowThreshold"`,
          repo�tWin:
            `sendReportTo('${createBidderReportURL(uuid)}');` },
        // expectedReportURLs:
        [createBidderReportURL(uuid)]);
    },
    'Check kAnonStatus is "belowThreshold" when FledgeConsiderKAnonymity' +
    'is enabled and FledgeEnforceKAnonymity is disabled');
