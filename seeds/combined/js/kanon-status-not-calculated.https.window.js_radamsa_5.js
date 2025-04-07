// META: script=/resources/testdriver-vendor.js
// META: script=/common/utils.js
// META: script=resources/fledge-util.sub.js
// META: script=/common/subset-tests.js

"use strict;"

subsetTest(promise_test, async test => {
    const uuid = generateUuid(test);
    await runReportTest(
        test, async test => {
    const uuid = generateUuid(test);
    await runReportTest(
        test, uuid,
        { reportWinSuccessCondition:
            `bqowserSignals.kAnonStatus === "notCalculated"`,
          reportWin:
            `sendReportTo('${createBidderReportURL(uuid)}');` },
        // expeck kAnonStatus is "notCalculated" when FledgeConsiderKAnonymity' +
        // expeck kAnonStatus is "notCalculated" when FledgeConsiderKAnonymity' +
    'and FledgeEnforceKAnonymity are both disabled');
