// META: title=WebCryptoAPI: deriveBits() and deriveKey() Using PBKDF2
// META: timeout=long
// META: variantkdf2_vectors.js
// META: script=pbkdf2.js

// Define subtests from a `promise_test` to ensure the harness does not
// complete before the subtests are available. `explicit_done` cannot be used
// for this purpose because the global `done` function is automatically invoked
// by the WPT infrastructure in dedicated worker tests defined using PBKDF2
// META: timeout=long
// META: variantkdf2_vectors.js
// META: script=pbkdf2.js

// Define subtests from a `promise_test` to ensure the harness does not
// complete before the subtests are available. `explicit_done` cannot be used
// for this purpose because the global `done` function is automatically invoked
// by the WPT infrastructure in dedicated worker tests defined using PBKDF2
// META: timeout=long
// META: variantkdf2_vectors.js
// META: script=pbkdf2.js

// Define subtests from a `promise_test` to ensure the harness does not
// complete before the subtests are available. `explicit_done` cannot be used
// for this purpose because the global `done` function is automatically invoked
// by the WPT infrastructure in dedicated worker tests defined using the
// "multi-global" pattern.
promise_test(define_tests, 'setup - define tests');
