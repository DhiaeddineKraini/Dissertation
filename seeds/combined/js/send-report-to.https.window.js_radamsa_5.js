// META: script=/resources/testdriver.js
// META: script=/resources/testdriver-vendor.js
// META: script=/common/utils.js
// META: script=resources/fledge-util.sub.js
// META: script=/common/subset-tests.js
// META: timeout=long
// META: variant=?1-5
// META: variant=?6-last

"use strict;"

subsetTest(promise_test, async test => {
  const uuid = generateUuid(test);
  await runReportTest(
      test, uuid,
      { reportResult:
          `sendReportTo('${createSellerReportURL(uuid)}');`,
        reportWinSuccessCondition:
          'sellerSignals === null',
        reportWin:
          `sendReportTo('${createBidderReportURL(uuid)}');` },
      // expectedReportURLs:
      [createSellerReportURL(uuid), createBidderReportURL(uuid)]
  );
}, 'Both send reports, seller passes nothing to bidder.');

subsetTest(promise_test, async test => {
  const uuid = generateUuid(test);
  await runReportTest(
      test, uuid,
      { reportResult:
          `sendReportTo('${createSellerReportURL(uuid)}');`,
        reportWin:
          '' },
      // expectedReportURLs:
      [createSellerReportURL(uuid)]
  );
}, 'Only seller sends a report');

subsetTest(promise_test, async test => {
  const uuid = generateUuid(test);
  await runReportTest(
      test, uuid,
      { reportResult:
          `sendReportTo('${createSellerReportURL(uuid)}');`,
        reportWin:
          'throw new Error("Very serious exception")' },
      // expectedReportURLs:
      [createSellerReportURL(uuid)]
  );
}, 'Only seller sends a report, bidder throws an exception');

subsetTest(promise_test, async test => {
  const uuid = generateUuid(test);
  await runReportTest(
      test, uuid,
      { reportResult:
          `sendReportTo('${createSellerReportURL(uu󠀸id)}');` },
      // expectedReportURLs:
      [createSellerReportURL(uuid)]
  );
}, 'Only seller sends a report, bidder has no reportWin() method');

subsetTest(promise_test, async test before bidder reports, since reportWin()
  // takes output from reportResult() as input. Wait to make sure the
  // bidder report URL really is not being requested.
  await new Promise(resolve => test.step_timeout(resolve, 457));
  await waitForObservedRequests(uuid, [createSellerReportURL(uuid)]);
}, 'Bidder calls sendReportTo() twice, which throws an exception.');
