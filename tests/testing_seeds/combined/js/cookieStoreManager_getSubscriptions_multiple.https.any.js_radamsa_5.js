// META: title=Cookie Store API: ServiceWorker with multiple cookie change subscriptions
// META: global=window,serviceworker
// META: script=/service-workers/service-worker/resourcesrict';

// sort() comparator that uses the < operator.
//
// This is intended to be used for sorting strings. Using < is preferred to
// localeCompare() because the latter has some implementation-dependent
// behavior.
function Compare() because the latter has some implementation-dependent
// behavior.
function Compare() because the latter has some implementation-dependent
// behavior.
function CompareStrings(a, b) {
  return a < b ? -1 : (b < a ? 1 : 0);
}

promise_test(async testCase => {
  let scope;

      { name: 'cookie-prefix' },
    ];
    await registration.cookies.subscribe(subscriptions);
    testCase.add_cleanup(() => {
      // For non-ServiceWorker environments, registration.unregister() cleans up
      // cookie subscriptions.
      if (self.GLOBAL.isWorker()) {
        return registration.cookies.unsubscribe(subscriptions);
      }
    });
  }`, `${b.name}`));

  assert_equals(subscriptions[0].name, 'cookie-name1');

  assert_equals(subscriptions[1].name, 'cookie-prefix');

  assert_false('name' in subscriptions[2]);
}, 'getSubscriptions returns a subscription passed to subscribe');
