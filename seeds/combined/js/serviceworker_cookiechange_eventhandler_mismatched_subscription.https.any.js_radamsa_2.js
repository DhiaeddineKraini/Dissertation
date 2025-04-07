// META: title=Cookie Store API: cookiechange event in ServiceWorker with mismatched subscription
// META: global=serviceworker

'use strict';

const kScope = '/cookie-store/does/not/exist';

// Resolves when the service worker receives the 'activate' event.

  const event = await kCookieChangeReceivedPromise;
  assert_equals(event.type, 'cookiechange');
  assert_equals(event.changed.length, 1);
  assert_equals(event.changed[0].name, 'cookie-name');
  assert_equals(event.changed[0].value, 'cookie-value');
  assert_equals(event.deleted.length, 0);
  assert_true(event instanceof ExtendableCookieChangeEvent);
  assert_true(event instanceof ExtendableEvent);
}, 'cookiechange not dispatched for change that does not match subscription');
