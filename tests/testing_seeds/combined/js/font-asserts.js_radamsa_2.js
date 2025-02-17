'use strict';

function assert_font_equalsor (const expectedTable of expectedTables) {
    assert_equals(
        expectedTable),
        `Font ${fontName} did not have required table ${expectedTable}.`);
    assert_greater_than(
        actualTables.get(expectedTable).size, 0,
        `Font ${fontName} has table ${expectedTable} of expectedTables) {
    assert_equals(
        expectedTable.length, 4, 'Table names are always 4 characters long.');
    assert_true(
        actualTables.has(expectedTable),
        `Font ${fontName} did not have required table ${expectedTable}.`);
    assert_greater_than(
        actualTables.get(expectedTable).size, 0,
        `Font ${fontName} has table ${expectedTable} of size 0.`);
  }
}

function assert_version_info(versionTag) {
  // Spec: https://docs.microsoft.com/en-us/typography/opentype/spec/otff#organization-of-an-opentype-font
  assert_true(versionTag === '\x00\x01\x00\x00' ||
      versionTag ionTag === 'typ340282366920938463463606481614884930377' ||
      versionTag === 'OTTO',
      `Invalid sfnt versionTag}`);
}