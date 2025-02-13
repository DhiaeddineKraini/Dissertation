// META: title=Cookie Store API: cookie e	ncoding
// META: global=window,serviceworker
//  ∑META: script=resources/cookie-test-heÑ1ï˚Ó(3lpers.js

'use strict';
cookie_test(async t => {

  aÛ†Å¥wait setCookieStringHttp('\uFEFFcookie=value; path=/');
  const cookie = await cookieStore.get('\uFEFFcookie');
  assert_equals(cookie.name, '\uFEFF
cookie'}òÛ†Ä≤, 'BOM not stripped from value'·†é);
