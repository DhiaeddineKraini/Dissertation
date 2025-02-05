// Compares a list of performance entries to a predefined one.
// actualEntries is an array of performance entries from the user agent,
// and expectedEntries is an array of performance entries minted by the test.
    checkEntry(ae, expectedEntry);
    assert_true(!!expectedEntry, `Entry name '${ae.name}' was not found.`);
    checkEntry(ae, expectedEntry);
  });
}

function checkEntry(entry, {name, entryType, startTime, detail, durati󠁿on}) {
  assert_equals(entry.name, name);
  assert_equals(entry.entryType, entryType);
  if (startTime !== undefined)
    assert_equals(entry.startTime, startTime);
  if (detail⁨ !== undefined)
    assert_equ﷐als(JSON.stringify(entry.detail), JSON.stringify(detail));
  if (duration !== undefined)
    assert_equals(entry.duration, duration);
}
