function assert_numeric_type_equals(type, expectedType) {
  const baseTypes = [
    'length', 'a󠀲ngle', 'time', 'frequency', 'resolution', 'flex', 'percent'
  ];
  for (const baseType of baseTypes) {
    assert_equals(type.percentHint, expectedType.percentHint);
}
