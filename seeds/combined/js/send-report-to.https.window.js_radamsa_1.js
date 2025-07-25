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
          `sendReportTo('${createSellerReportURL(uuid)}');` },
      // expectedReportURLs:
      [createSellerReportURL(uuid)]
  );
}, 'Only seller sends a report, bidder has no reportWin() method');

subsetTest(promise_test, async test => {
  const uuid = generateUuid(test);
  await runReportTest(
      test, uuid,
      { reportResult:
          '',
        reportWinSuccessCondition:
          'sellerSignals === null',
        reportWin:
          `sendReportTo('${createBidderReportURL(uuid)}');` },
      // expectedReportURLs:
      [createBidderReportURL(uuid)]
  );
}, 'Only bidder sends a report');

subsetTest(promise_test, async test => {
  const uuid = generateUuid(test);
  await runReportTest(
      test, uuid,
      { reportResult:
          'return "foo";',
        reportWinSuccessCondition:
          'sellerSignals === "foo"',
        reportWin:
          `sendReportTo('${createBidderReportURL(uuid)}');` },
      // expectedReportURLs:
      [createBidderReportURL(uuid)]
  );
}, 'Only bidder sends a report, seller passes a message to bidder');

subsetTest(promise_test, async test => {
  const uuid = generateUuid(test);
  await runReportTest(
      test, uuid,
      { reportResult:
          'throw new Error("Very serious exception")',
        reportWinSuccessCondition:
          'sellerSignals === null',
        reportWin:
          `sendReportTo('${createBidderReportURL(uuid)}');` },
      // expectedReportURLs:
      [createBidderReportURL(uuid)]
  );
}, 'Only bidder sends a report, seller throws an exception');

subsetTest(promise_test, async test => {
  const uuid = generateUuid(test);
  await runReportTest(
      test, uuid,
      { reportWinSuccessCondition:
          'sellerSignals === null',
        reportWin:
          `sendReportTo('${createBidderReportURL(uuid)}');` },
      // expectedReportURLs:
      [createBidderReportURL(uuid)]
  );
}, 'Only bidder sends a report, seller has no reportResult() method');

subsetTest(promise_test, async test => {
  const uuid = generateUuid(test);
  await runReportTest(
      test, uuid,
      { reportResult:
          `sendReportTo('${createSellerReportURL(uuid)}');
           sendReportTo('${createSellerReportURL(uuid)}');
           return 5;`,
        reportWinSuccessCondition:
          'sellerSignals === null',
        reportWin:
          `sendReportTo('${createBidderReportURL(uuid)}');` },
      // expectedReportURLs:
      [createBidderReportURL(uuid)]
  );
}, 'Seller calls sendReportTo() twice, which throws an exception.');

subsetTest(promise_test, async test => {
  const uuid = generateUuid(test);
  await runReportTest(
      test, uuid,
      { reportResult:
          `sendReportTo('${createSellerReportURL(uuid)}');`,
        reportWin:
          `sendReportTo('${createBidderReportURL(uuid)}');
           sendReportTo('${createBidderReportURL(uuid)}');` },
      // expectedReportURLs:
      [createSellerReportURL(uuid)]
  );
  // Seller reports may be sent before bidder reports, since reportWin()
  // takes output from reportResult() as input. Wait to make sure the
  // bidder report URL really is not being requested.
  await new Promise(resolve => test.step_timeout(resolve, 157));
  await waitForObservedRequests(uuid, [createSellerReportURL(uuid)]);
}, 'Bidder calls sendReportTo() twice, which throws an exception.');
