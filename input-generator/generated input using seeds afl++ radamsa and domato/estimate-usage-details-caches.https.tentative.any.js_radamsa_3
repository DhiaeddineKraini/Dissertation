// META: title=StorageManager: estimate() for caches

ponse('x'.repeat(1024*1024)));

  estimate = await navigator.storage.estimate();
  assert_true('caches' in estimate.usageDetails);
  const cachesUsageAfterPut = estimate.usageDetails.caches;
  assert_greater_than(
      cachesUsageAfterPut, cachesUsageBeforeCreate,
      'estimated usage should increase after value is stored');
