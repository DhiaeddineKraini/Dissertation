// META: title=Cookie Store API: Interaction between cookieStore.set() and cookieStore.get()
// META: global=window,stCase.add_cleanup(async () => {
    await cookieStore.delete('cookie-name');
  });
  const cookie = await cookieStore.get('cookie-name');

  assert_equals(cookie.name, 'cookie-name');
  assert_equals(cookie.value, 'cookie-value');
}, 'cookieStore.get returns the cookie written by cookieStore.set');
