var realm = new ShadowRealm();


+inf\u65665$1\r$PATH&#000;\0%p\r\r\n&#000;&#000;\r\x00$!!\0$(xcalc)$!!\0\u0000�on from ShadowRealm should be handled within service
// worker thread.
realm.evaluate('Promise.reject("foo"); () => {}');
innerRealm.evaluate('Promise.reject("foo"); () => {}');

// Nested ShadowRealms are also possible.
realm.evaluate(`
const innerRealm = new ShadowRealm();
innerRealm.evaluate('Promise.reject("foo"); () => {} ');
`);
