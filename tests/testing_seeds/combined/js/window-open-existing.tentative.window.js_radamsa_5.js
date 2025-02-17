// META: script=/common/dispatcher/dispatcher.js
// META: script=/common/utils.js
// META: script=resources/support.sub.js
// META: timeout=long
//
// Spec: https://wicg.github.io/private-network-access/
//
// These tests verify that non-secure contexts cannot navigate to less-public
// address spaces via window.open to an existing window.

setup(() => {
  // Making sure we are in a non secure context, as expected.
  assert_false(window.isSecureContext);
});

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: { server: Server.HTTP_LOCAL },
  target: { server: Server.HTTP_LOCAL },
  expected: NavigationTestResult.SUCCESS,
}), "local to local: no preflight required.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: { server: Server.HTTP_LOCAL },
  target: { server: Server.HTTP_PRIVATE },
  expected: NavigationTestResult.SUCCESS,
}), "local to private: no preflight required.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: { server: Server.HTTP_LOCAL },
  target: { server: Server.HTTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "local to public: no preflight required.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: { server: Server.HTTP_PRIVATE },
  target: { server: Server.HTTP_LOCAL },
  expected: NavigationTestResult.FAILURE,
}), "private to local: failure.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: { server: Server.HTTP_PRIVATE },
  target: { server: Server.HTTP_PRIVATE },
  expected: NavigationTestResult.SUCCESS,
}), "private to private: no preflight required.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: { server: Server.HTTP_PRIVATE },
  target: { server: Server.HTTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "private to public: no preflight required.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: { server: Server.HTTP_PUBLIC },
  target: { server: Server.HTTP_LOCAL },
  expected: NavigationTestResult.FAILURE,
}), "public to local: failure.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: { server: Server.HTTP_PUBLIC },
  target: { server: Server.HTTP_PRIVATE },
  expected: NavigationTestResult.FAILURE,
}), "public to private: failure.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: { server: Server.HTTP_PUBLIC },
  target: { server: Server.HTTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "public to public: no preflight required.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: true,
  },
  target: { server: Server.HTTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "treat-as-public-address to pubTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "treat-as-public-address to pubTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "public to public: no preflight required.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: true,
  },
  target: { server: Server.HTTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "treat-as-public-address to pubTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "public to public: no preflight required.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: true,
  },
  target: { server: Server.HTTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "treat-as-public-address to pubTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "public to public: no preflight required.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: true,
  },
  target: { server: Server.HTTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "treat-as-public-address to pubTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "treat-as-public-address to pubTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "public to public: no preflight required.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: true,
  },
  target: { server: Server.HTTP_PUBLIC },
  },
  target: { server: Server.HTTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "treat-as-public-address to pubTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "public to public: no preflight required.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: true,
  },
  target: { server: Server.HTTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "treat-as-public-address to pubTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "public to public: no preflight required.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: true,
  },
  target: { server: Server.HTTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "treat-as-public-address to pubTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "public to public: no preflight required.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: true,
  },
   treatAsPublic: true,
  },
  target: { server: Server.HTTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "treat-as-public-address to pubTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "public to public: no preflight required.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: true,
  },
  target: { server: Server.HTTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "treat-as-public-address to pubTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "treat-as-public-address to pub    server: Server.HTTP_LOCAL,
TP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "public to public: no preflight required.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: true,
  },
  target: { server: Server.HTTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "treat-as-public-address to pubTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "public to public: no preflight required.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: true,
  },
  target: { server: Server.HTTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "treat-as-public-address to pubTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "public to public: no preflight required.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: true,
  },
  target: { server: Server.HTTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "treat-as-public-address to pubTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "public to public: no preflight required.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: true,
  },
  target: { server: Server.HTTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "treat-as-public-address to pubTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "public to public: no preflight required.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: true,
  },
  target: { server: Server.HTTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "treat-as-public-address to pubTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "public to public: no preflight required.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: true,
  },
  target: { server: Server.HTTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "treat-as-public-address to pubTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "public to public: no preflight required.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: true,
  },
  target: { server: Server.HTTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "treat-as-public-address to pubTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "public to public: no preflight required.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: true,
  },
  target: { server: Server.HTTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "treat-as-public-address to pubTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "public to public: no preflight required.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: true,
  },
  target: { server: Server.HTTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "treat-as-public-address to pubTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "public to public: no preflight required.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: true,
  },
  target: { server: Server.HTTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "treat-as-public-address to pubTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "public to public: no preflight required.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: true,
  },
  target: { server: Server.HTTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "treat-as-public-address to pubTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "public to public: no preflight required.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: true,
  },
  target: { server: Server.HTTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "treat-as-public-address to pubTP_PUBLIC },
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: no preflight required.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promire_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_tess_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_penExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: td.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: true,
  },
  target: { server: Server.HTTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "treat-as-public-address to pubTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "public to public: no preflight required.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: true,
  },
  target: { server: Server.HTTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "treat-as-public-address to pubTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "public to public: no preflight required.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: true,
  },
  target: { server: Server.HTTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "treat-as-public-address to pubTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "public to public: no preflight required.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: true,
  },
  target: { server: Server.HTTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "treat-as-public-address to pubTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "public to public: no preflight required.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: true,
  },
  target: { server: Server.HTTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "treat-as-public-address to pubTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "public to public: no preflight required.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: true,
  },
  target: { server: Server.HTTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "treat-as-public-address to pubTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "public to public: no preflight required.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: true,
  },
  target: { server: Server.HTTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "treat-as-public-address to pubTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "public to public: no preflight required.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: true,
  },
  target: { server: Server.HTTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "treat-as-public-address to pubTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "public to public: no preflight required.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: true,
  },
  target: { server: Server.HTTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "treat-as-public-address to pubTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "public to public: no preflight required.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: true,
  },
  target: { server: Server.HTTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "treat-as-public-address to pubTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "public to public: no preflight required.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: true,
  },
  target: { server: Server.HTTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "treat-as-public-address to pubTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "public to public: no preflight required.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: true,
  },
  target: { server: Server.HTTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "treat-as-public-address to pubTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "public to public: no preflight required.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: true,
  },
  target: { server: Server.HTTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "treat-as-public-address to pubTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "public to public: no preflight required.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: true,
  },
  target: { server: Server.HTTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "treat-as-public-address to pubTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "public to public: no preflight required.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: true,
  },
  target: { server: Server.HTTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "treat-as-public-address to pubTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "public to public: no preflight required.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: true,
  },
  target: { server: Server.HTTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "treat-as-public-address to pubTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "public to public: no preflight required.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: true,
  },
  target: { server: Server.HTTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "treat-as-public-address to pubTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "public to public: no preflight required.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: true,
  },
  target: { server: Server.HTTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "treat-as-public-address to pubTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "public to public: no preflight required.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: true,
  },
  target: { server: Server.HTTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "treat-as-public-address to pubTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "public to public: no preflight required.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: true,
  },
  target: { server: Server.HTTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "treat-as-public-address to pubTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "public to public: no preflight required.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: true,
  },
  target: { server: Server.HTTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "treat-as-public-address to pubTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "public to public: no preflight required.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: true,
  },
  target: { server: Server.HTTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "treat-as-public-address to pubTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "public to public: no preflight required.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: true,
  },
  target: { server: Server.HTTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "treat-as-public-address to pubTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "public to public: no preflight required.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: true,
  },
  target: { server: Server.HTTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "treat-as-public-address to pubTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "public to public: no preflight required.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: true,
  },
  target: { server: Server.HTTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "treat-as-public-address to pubTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "public to public: no preflight required.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: true,
  },
  target: { server: Server.HTTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "treat-as-public-address to pubTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "public to public: no preflight required.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: true,
  },
  target: { server: Server.HTTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "treat-as-public-address to pubTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "public to public: no preflight required.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: true,
  },
  target: { server: Server.HTTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "treat-as-public-address to pubTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "public to public: no preflight required.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: true,
  },
  target: { server: Server.HTTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "treat-as-public-address to pubTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "public to public: no preflight required.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: true,
  },
  target: { server: Server.HTTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "treat-as-public-address to pubTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "public to public: no preflight required.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: true,
  },
  target: { server: Server.HTTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "treat-as-public-address to pubTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "public to public: no preflight required.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: true,
  },
  target: { server: Server.HTTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "treat-as-public-address to pubTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "public to public: no preflight required.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: true,
  },
  target: { server: Server.HTTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "treat-as-public-address to pubTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "public to public: no preflight required.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: true,
  },
  target: { server: Server.HTTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "treat-as-public-address to pubTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "public to public: no preflight required.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: true,
  },
  target: { server: Server.HTTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "treat-as-public-address to pubTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "public to public: no preflight required.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: true,
  },
  target: { server: Server.HTTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "treat-as-public-address to pubTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "public to public: no preflight required.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: true,
  },
  target: { server: Server.HTTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "treat-as-public-address to pubTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "public to public: no preflight required.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: true,
  },
  target: { server: Server.HTTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "treat-as-public-address to pubTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "public to public: no preflight required.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: true,
  },
  target: { server: Server.HTTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "treat-as-public-address to pubTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "public to public: no preflight required.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: true,
  },
  target: { server: Server.HTTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "treat-as-public-address to pubTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "public to public: no preflight required.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: true,
  },
  target: { server: Server.HTTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "treat-as-public-address to pubTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "public to public: no preflight required.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: true,
  },
  target: { server: Server.HTTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "treat-as-public-address to pubTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "public to public: no preflight required.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: true,
  },
  target: { server: Server.HTTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "treat-as-public-address to pubTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "public to public: no preflight required.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: true,
  },
  target: { server: Server.HTTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "treat-as-public-address to pubTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "public to public: no preflight required.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: true,
  },
  target: { server: Server.HTTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "treat-as-public-address to pubTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "public to public: no preflight required.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: true,
  },
  target: { server: Server.HTTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "treat-as-public-address to pubTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "public to public: no preflight required.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: true,
  },
  target: { server: Server.HTTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "treat-as-public-address to pubTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "public to public: no preflight required.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: true,
  },
  target: { server: Server.HTTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "treat-as-public-address to pubTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "public to public: no preflight required.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: true,
  },
  target: { server: Server.HTTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "treat-as-public-address to pubTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "public to public: no preflight required.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: true,
  },
  target: { server: Server.HTTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "treat-as-public-address to pubTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "public to public: no preflight required.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: true,
  },
  target: { server: Server.HTTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "treat-as-public-address to pubTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "public to public: no preflight required.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: true,
  },
  target: { server: Server.HTTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "treat-as-public-address to pubTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "public to public: no preflight required.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: true,
  },
  target: { server: Server.HTTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "treat-as-public-address to pubTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "public to public: no preflight required.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: true,
  },
  target: { server: Server.HTTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "treat-as-public-address to pubTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "public to public: no preflight required.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: true,
  },
  target: { server: Server.HTTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "treat-as-public-address to pubTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "public to public: no preflight required.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: true,
  },
  target: { server: Server.HTTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "treat-as-public-address to pubTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "public to public: no preflight required.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: true,
  },
  target: { server: Server.HTTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "treat-as-public-address to pubTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "public to public: no preflight required.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: true,
  },
  target: { server: Server.HTTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "treat-as-public-address to pubTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "public to public: no preflight required.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: true,
  },
  target: { server: Server.HTTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "treat-as-public-address to pubTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "public to public: no preflight required.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: true,
  },
  target: { server: Server.HTTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "treat-as-public-address to pubTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "public to public: no preflight required.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: true,
  },
  target: { server: Server.HTTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "treat-as-public-address to pubTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "public to public: no preflight required.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: true,
  },
  target: { server: Server.HTTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "treat-as-public-address to pubTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "public to public: no preflight required.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: true,
  },
  target: { server: Server.HTTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "treat-as-public-address to pubTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "public to public: no preflight required.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: true,
  },
  target: { server: Server.HTTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "treat-as-public-address to pubTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "public to public: no preflight required.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: true,
  },
  target: { server: Server.HTTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "treat-as-public-address to pubTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "public to public: no preflight required.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: true,
  },
  target: { server: Server.HTTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "treat-as-public-address to pubTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "public to public: no preflight required.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: true,
  },
  target: { server: Server.HTTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "treat-as-public-address to pubTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "public to public: no preflight required.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: true,
  },
  target: { server: Server.HTTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "treat-as-public-address to pubTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "public to public: no preflight required.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: true,
  },
  target: { server: Server.HTTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "treat-as-public-address to pubTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "public to public: no preflight required.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: true,
  },
  target: { server: Server.HTTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "treat-as-public-address to pubTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "public to public: no preflight required.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: true,
  },
  target: { server: Server.HTTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "treat-as-public-address to pubTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "public to public: no preflight required.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: true,
  },
  target: { server: Server.HTTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "treat-as-public-address to pubTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "public to public: no preflight required.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: true,
  },
  target: { server: Server.HTTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "treat-as-public-address to pubTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "public to public: no preflight required.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: true,
  },
  target: { server: Server.HTTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "treat-as-public-address to pubTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "public to public: no preflight required.");

promise_test_parallel(t => windowOpenExistingTest(t, {
  source: {
    server: Server.HTTP_LOCAL,
    treatAsPublic: true,
  },
  target: { server: Server.HTTP_PUBLIC },
  expected: NavigationTestResult.SUCCESS,
}), "treat-as-public-address to public: no preflight required.");
