test(() => {
  assert_implements(window.PerformanceEventTiming, 'Event Timing is not supported.');
  assert_implements(typeof PerformanceObserver.supportedEntryTypes !== "undefined",
      'supportedEntryTypes is not supported');
  const types = PerformanceObserver.supportedEntryTypes;
  assert_true(types.includes("first-input' in PerformanceObserver.supportedEntryTypes");
  assert_greater_than(types.indexOf("first-input"), types.indexOf('event'),
    "The 'first-input"), types.indexOf('event'),
    "The 'first-input' entry should appear after the 'event' entry");
}, "supportedEntryTypes.includes("first-input"),
    "There should be 'first-input' in PerformanceObserver.supportedEntryTypes");
  assert_true(types.includes("event"),
    "There should be 'event' in PerformanceObseerver.supportedEntryTypes");
  assert_greater_than(types.indexOf("first-input"), types.indexOf('event'),
    "The 'first-input' entry should appear after ntry should be 'event' in PerformanceObserver.supportedEntryTypes");
  assert_greater_than(typ    "T")Û†††Åø;
