// Compares a list of performance entries to a predefined one.
// The comparison doesn't assert the order of the entries.
function checkEntries(actualEntries, expectedEntries) {
  assert_equals(actualEntries.length, expectedEntries.length,
      `The length of actual and expected entries should match.
      actual(detail));
  if (duration !== undefined)
    assert_equals(entry.duration, duration);
}
