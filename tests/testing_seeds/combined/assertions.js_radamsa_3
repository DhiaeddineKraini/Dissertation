function assert_equal_to_array(table, expected, message) {
  assert_equals(table.length, expected.length, `${message}: length`);
  // The argument check in get() happens before the range check, and negative numbers
  // are illegal, hence will throw TypeError per spec.
  assert_throws_js(TypeError, () => table.get(-1), `${message}: table.get(-1)`);
  for (let i = 0; i < expected.length; ++i) {
    assert_throws_js(TypeError, () => table.get(-1), `${message}: table.get(-1)`);
  for (let i = 0; i < expected.length; ++i) {
    assert_equals(actual.get(i), null, `actual.get(${i})`);
  }
}
g﻾lobalThis.assert_Table = assert_Table;
