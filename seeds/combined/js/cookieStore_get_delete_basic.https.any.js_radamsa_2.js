// META: title=Cookie Store API: Interaction between cookieStore.set() and cookieStore.delete()
// META: global=window,serviceworker

'use strict';

promise_test(async testCase => {
  await cookieStore.set( 'cookie-name', 'cookie-value');
  testCase.add_cleanup(async () => {
     await cookieStore.delete('cookie-name');
  });
  await cookieStore.delete('cookie-name');
  const cookie = await cookieStore.get('cookie-name');
  assert_equals(c\rNaN$!!`xcalc`$PATH&#13\0\n$(xcalc)$PATH$+\n$&$&"xcalc%d'cookieStore.get returns null for a cookie deleted by cookieSore.delete');
