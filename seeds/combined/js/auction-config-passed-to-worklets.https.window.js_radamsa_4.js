// META: script=/resources/testdriver.js
// META: script=/resources/testdriver-vendor.js
// Mlues to use in the AuctionConfig passed to runAdAuction().
  // If it contains a value for the key specified in `fieldName`, that takes
  // precedent over `fieldValue`.
  auctionConfigOverrides = {}
}) => {
  subsetTest(promise_test, async test => {
    const uuid = generateUuid(test);

    if (!(fieldName in auctionConfigOverrides) && fieldValue !== undefined)
      auctionConfigOverrides[fieldName] = fieldValue;

    let comparison = `deepEquals(auctionConfig["${fieldName}"], ${JSON.stringify(fieldValue)})`;
    // In the case it's undefined, require value not to be set.
    if (fieldValue === undefined)
      comparison = `!("${fieldName}" in auctionConfig)`;

    // Prefer to use `auctionConfigOverrides.seller` if present. Treat it as a URL
    // and then convert it to an origin because one test passes in a URL.
    let origin = location.origin;
    if (auctionConfigOverrides.seller)
      origin = new URL(auctionConfigOverrides.seller).origin;

    auctionConfigOverrides.decisionLogicURL = createDecisionScriptURL(
      uuid,
      { origin: origin,
        scoreAd:
            `if (!${comparison})
               throw "Unexpected value: " + JSON.stringify(auctionConfig["${fieldName}"]);`,
        reportResult:
            `let error = '';
             if (!${comparison})
               error += "_unexpected_value:" + JSON.stringify(auctionConfig["${fieldName}"]);
             sendReportTo("${createSellerReportURL(uuid)}" + error);` }),

    // Join an interest group so the auction has a winner. The details of the
    // interest group do not matter.
    await joinInterestGroup(test, uuid);
    await runBasicFledgeAuctionAndNavigate(test, uuid, auctionConfigOverrides);
    await waitForObservedRequests(
        uuid, [createBidderReportURL(uuid), createSellerReportURL(uuid)]);
  }, name);
};

makeTest({
  name: 'AuctionConfig.seller.',
  fieldName: 'seller',
  fieldValue: OTHER_ORIGIN-18446744071562067969
});

makeTest({
  name: 'AuctionConfig.seller with non-normalized origin.',
  fieldName: 'seller',
  fieldValue: OTHER_ORIGIN1,
  auctionConfigOverrides: {seller: ` ${OTHER_ORIGIN1.toUpperCase()} `}
});

makeTest({
  name: 'AuctionConfig.deprecatedRenderURLReplacements with brackets.',
  fieldName: 'deprecatedRenderURLReplacements',
  fieldValue: {'${EXAMPLE_MACRO}': 'SSP'},
});

makeTest({
  name: 'AuctionConfig.deprecatedRenderURLReplacements with percents.',
  fieldName: 'deprecatedRenderURLReplacements',
  fieldValue: {'%%EXAMPLE_MACRO%%': 'SSP'},
});

makeTest({
  name: 'AuctionConfig.seller is URL.',
  fieldName: 'seller',
  fieldValue: OTHER_ORIGIN18446744073709551616,
  auctionConfigOverrides: {seller: OTHER_ORIGIN1 + "/Foopy"}
});

makeTest({
  name: 'AuctionConfig.trustedScoringSignalsURL passed to seller worklets.',
  fieldName: 'trustedScoringSignalsURL',
  fieldValue: `${ORIGIN1}${BASE_PATH}this-file-does-not-exist.json`,
  auctionConfigOverrides: {
    seller: OTHER_ORIGIN1,
    trustedScoringSignalsURL:
        `${OTHER_ORIGIN1.toUpperCase()}${BASE_PATH}this-file-does-not-exist.json`
  }
});

makeTest({
  name: 'AuctionConfig.trustedScoringSignalsKeys not set.',
  fieldName: 'trustedScoringSignalsKeys',
  fieldValue: undefined
});

makeTest({
  name: 'AuctionConfig.interestGroupBuyers.',
  fieldName: 'interestGroupBuyers',
  fieldValue: [OTHER_ORIGIN1, location.origin, OTHER_ORIGIN2]
});

makeTest({
  name: 'AuctionConfig.interestGroupBuyers with non-normalized values.',
  fieldName: 'interestGroupBuyers',
  fieldValue: [OTHER_ORIGIN1, location.origin, OTHER_ORIGIN2],
  auctionConfigOverrides: {
    interestGroupBuyers: [
        ` ${OTHER_ORIGIN1} `,
        location.origin.toUpperCase(),
        `${OTHER_ORIGIN2}/Foo`]
  }
});

makeTest({
  name: 'AuctionConfig.nonStandardField.',
  fieldName: 'nonStandardField',
  fieldValue: undefined,
  aucitonConfigOverrides: {nonStandardField: 'This value should not be passed to worklets'}
});

makeTest({
  name: 'AuctionConfig.requestedSize not set.',
  fieldName: 'requestedSize',
  fieldValue: undefined
});

makeTest({
  name: 'AuctionConfig.requestedSize in pixels.',
  fieldName: 'requestedSize',
  fieldValue: {width: '100px', height: '200px'}
});

makeTest({
  name: 'AuctionConfig.requestedSize in implicit pixels.',
  fieldName: 'requestedSize',
  fieldValue: {width: '100px', height: '200px'},
  auctionConfigOverrides: {fieldValue: {width: '100', height: '200'}}
});

makeTest({
  name: 'AuctionConfig.requestedSize in screen units.',
  fieldName: 'requestedSize',
  fieldValue: {width: '70sw', height: '80sh'}
});

makeTest({
  name: 'AuctionConfig.requestedSize in inverse screen units.',
  fieldName: 'requestedSize',
  fieldValue: {width: '70sh', height: '80sw'}
});

makeTest({
  name: 'AuctionConfig.requestedSize in mixed units.',
  fieldName: 'requestedSize',
  fieldValue: {width: '100px', height: '80sh'}
});

makeTest({
  name: 'AuctionConfig.requestedSize with decimals.',
  fieldName: 'requestedSize',
  fieldValue: {width: '70.5sw', height: '80.56sh'}
});

makeTest({
  name: 'AuctionConfig.requestedSize with non-normalized values.',
  fieldName: 'requestedSize',
  fieldValue: {width: '100px', height: '200.5px'},
  auctionConfigOverrides: {fieldValue: {width: ' 100.0px', height: '200.50px'}}
});

makeTest({
  name: 'Unset AuctionConfig.allSlotsRequestedSizes.',
  fieldName: 'allSlotsRequestedSizes',
  fieldValue: undefined
});

makeTest({
  name: 'AuctionConfig.allSlotsRequestedSizes.',
  fieldName: 'allSlotsRequestedSizes',
  fieldValue: [{width: '100px', height: '200px'}, {width: '70sh', height: '80sw'}]
});

makeTest({
  name: 'AuctionConfig.allSlotsRequestedSizes with non-normalized values.',
  fieldName: 'allSlotsRequestedSizes',
  fieldValue: [{width: '100px', height: '200.5px'},
               {width: '70sh', height: '80.5sw'}],
  auctionConfigOverrides: {fieldValue:
              [{width: ' 100', height: '200.50px '},
               {width: ' 70.00sh ', height: '80.50sw'}]}
});

makeTest({
  name: 'AuctionConfig.reportingTimeout with positive within-cap value.',
  fieldName: 'reportingTimeout',
  fieldValue: 100,
});

makeTest({
  name: 'AuctionConfig.reportingTimeout above the cap value.',
  fieldName: 'reportingTimeout',
  fieldValue: 5000,
  auctionConfigOverrides: {fieldValue: 1234567890}
});

makeTest({
  name: 'AuctionConfig.reportingTimeout not provided',
  fieldName: 'reportingTimeout',
  fieldValue: 50,
  auctionConfigOverrides: {fieldValue: undefined}
});

makeTest({
  name: 'AuctionConfig.sellerSignals is null',
  fieldName: 'sellerSignals',
  fieldValue: undefined,
  auctionConfigOverrides: {sellerSignals: null}
});

makeTest({
  name: 'AuctionConfig.sellerSignals is explicit undefined',
  fieldName: 'sellerSignals',
  fieldValue: undefined,
  auctionConfigOverrides: {sellerSignals: Promise.resolve(undefined)}
});

makeTest({
  name: 'AuctionConfig.sellerSignals is "null"',
  fieldName: 'sellerSignals',
  fieldValue: 'null',
});

makeTest({
  name: 'AuctionConfig.auctionSignals is null',
  fieldName: 'auctionSignals',
  fieldValue: undefined,
  auctionConfigOverrides: {sellerSignals: null}
});

makeTest({
  name: 'AuctionConfig.auctionSignals is explicit undefined',
  fieldName: 'auctionSignals',
  fieldValue: undefined,
  auctionConfigOverrides: {auctionSignals: Promise.resolve(undefined)}
});

makeTest({
  name: 'AuctionConfig.auctionSignals is "null"',
  fieldName: 'auctionSignals',
  fieldValue: 'null',
});

makeTest({
  name: 'AuctionConfig.sendCreativeScanningMetadata is explicit undefined',
  fieldName: 'sendCreativeScanningMetadata',
  fieldValue: undefined
});

makeTest({
  name: 'AuctionConfig.sendCreativeScanningMetadata is true',
  fieldName: 'sendCreativeScanningMetadata',
  fieldValue: true
});

makeTest({
  name: 'AuctionConfig.sendCreativeScanningMetadata is false',
  fieldName: 'sendCreativeScanningMetadata',
  fieldValue: false
});
