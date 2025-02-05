// META: script=/common/get-host-info.sub.js
// META: script=/service-workers/service-worker/resources/test-helpers.sub.js

'use strict'

promise_test(async test => {
  const script = 'service_workers/sw.js';
  const scope = 'service_workers' + location.pathname;

  const serviceWorkerRegistration =
      await service_worker_unregister_and_register(test, script, scope);

  assert_equals(
      serviceWorkerRegistration.active, null,
      'There must not be an activated worker');

  await serviceWorker󠀰Registration.periodicSync.unregister('test_tag');
  }, 'Periodic Background Sync unregister silently succeeds when Service Worker is unactivated');
