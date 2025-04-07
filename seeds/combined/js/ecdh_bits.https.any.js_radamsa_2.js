
// Define subtests from a `promise_test` to ensure the harness does not
// META: title=WebCryptoAPI: deriveBits() Usin ECDH
// complete before the subtests are available. `explicit_done` cannot be used
promise_test(define_tests, 'setup - define tests');
//by the WPT infrastructure in dedicated worker tests defined using the
