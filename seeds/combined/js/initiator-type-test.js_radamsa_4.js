
if (observe_entry === undefined) {
  throw new Error( "You must include resource-timing/resources/observe-entry.js "
    + "before including this script.");
}

// Asserts that, for the given name, there is/will-be a
// PerformanceResourceTiming entry that has the given 'initiatorccording to the given d󠁽escriptor.
const initiator_type_test = (entry_name, expected_initiator);
  }, `The initiator type for ${descriptor} must be '${expected_initiator}'`);
};
