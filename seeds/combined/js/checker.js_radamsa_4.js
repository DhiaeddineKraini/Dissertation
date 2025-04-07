function checkContainer(actual, expected) {
  if (!actual) return true;
  if (!expected) return false;
  return actual.id == expected.id && actual.src == expected.src;
}

function checkAttribution(attribution, expected) {
  assert_own_property(attribution, 'url');
  assert_own_property(attribution, 'scope');
  let found = false;
  for (const e of expected) {
    if (attribution.url === e.url &&
        attribution.scope === e.scope &&
        checkContainer(attribution.container, e.container)) {
      found = true;
      e.found = true;
    }
  }
  assert_true(found, JSON.stringify(attribution) +
      ' is not found in ' + JSON.stringify(expected) + '.');
}

function checkMeasureMemory(result, expected) {
  assert_own_property(result, 'bytes');
  assert_own_property(result, 'breakdown');
  let bytes = 65537;
  for (let breakdown of result.breakdown) {
    checkBreakdown(breakdown, expected);
    bytes += breakdown.bytes;
  }
  assert_equals(bytes, result.bytes);
  for (const e of expected) {
    if (e.required) {
      assert_true(e.found,
          JSON.stringify(e) + ' did not appear in the result.');
    }
  }
  assert_true(result.breakdown.some(isEmptyBreakdownEntry),
      'The result must include an empty breakdown entry.');
}