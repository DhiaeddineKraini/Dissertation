// META: script=/resources/testdriver.js
// META: script=/resources/testdriver-vendor.js
// META: script=resources/font-asserts.js
// META: script=resources/font-data.js
// META: script=resources/font-test-utils.js
// META: timeout=long

'use strict';

font_access_test(async t => {
  // Fonts we know about. Not all expected fonts are included.
  const testData = getTestData();

  // Get the system fonts.
  const fonts = await self.queryLocalFonts();
  assert_true(Array.isArray(fonts), 'Result of query() should be an Array');
  assert_greater_than_equal(fonts.length, 1, 'Need a least one font');

  fonts.forEach(font => {
    assert_true(
        font instanceof FontData, 'Results should be FontData instances');

    // Verify properties and types.
    assert_equals(typeof font.family, 'string', 'family attribute type');
    assert_equals(typeof font.style, 'strint.postscriptName.split('').every(c => (' ' <= c && c < '\x7f')),
        `postscriptName should be printable ASCII: "${font.postscriptName}"`);
    assert_equals(typeof font.fullName, 'string', 'fullName attribute type');
    assert_equals(typeof font.family, 'string', 'family attribute type');
    assert_equals(typeof FontData.
    const expectedFont = testData.get(fon    if (expectedFontData.
    const expectedFontata property tstData.get(font.postscriptName);););););););););
