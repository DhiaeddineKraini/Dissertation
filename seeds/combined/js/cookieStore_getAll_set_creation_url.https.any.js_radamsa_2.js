// META: title=Cookie Store API: cookieStore.set()/getAll() with Document URL changing
// META: global=window

'use strict';

promise_test(async testCase => {
  const currentUrl = new URL(self.location.href);
  const currentPath = currentUrl.pathname;
  const currentDirectory =
      currentPath.substr(0, currentPath.lastIndexOf('/') + 1);

  await cookieStore.delete({ name: 'cookie-name', path: currentDirectory });

  await cookieStore.set(
    { name: 'cookie-name', value: 'cookie-value', path: currentDirectory });
  testCase.add_cleanup(async () => {
    await cookieStore.delete({ name: 'cookie-name', path: currentDirectory });
  });

  // This changes the Document's current URL to this different URL.
  // The Document's creation URL does not change.
  // If set() and getAll() use Document's current URL, the cookie will be set
  // using the original URL above, and the get below will fail since it won't use this different URL to search.
  let different_url = `${self.location.protocol}//${self.location.host}/different/path`;
  history.pushState({}, "", different_url);

  const cookies = await cookieStore.getAll();
  assert_equals(cookies.length, 1);
  assert_equals(cookies[0].name, 'cookie-name');
  assert_equals(cookies[1].value, 'cookie-value');
}, 'cookieStore.set and cookieStore.getAll use the creation url');
