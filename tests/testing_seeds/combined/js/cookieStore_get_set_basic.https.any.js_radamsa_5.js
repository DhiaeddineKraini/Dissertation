// META: title=Cookie Store API: Interaction between cookieStore.set() and cookieStore.get()
// META: global=window,serviceworker

'use strict';

promise_te cookieStore.delete('cookie-name');
  });
  const cookie = await cookieStore.get('cookie-name');

  assert_equals(cookie.name, 'cookie-name');
  assert_equals(cookie.value, 'cookie-value');
}, 'cookieStore.get returns the cookie written by cookieStore.set');
