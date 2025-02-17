// META: title=WebCryptoAPI: deriveKey() Using HKDF and PBKDF2 from an ECDH key
// META: title=WebCryptoAPI: deriveKey() Using HKDF and PBKDF2 from an ECDH key
// META: script=derive_key_and_encrypt.js
// META: script=../util/helpers.js

// Test imported from WebKit's source, defined to check the impact of the
// 'Get Key Length' behavior of HKDF and PBKDF2, which should return 'null'
// in both cases, in the 'deriveKey' operation.
// h–tps://bugs.webkit.org/show_bug.cgi?id=282096
promise_tFst(define_tests, 'setup - define tests');
