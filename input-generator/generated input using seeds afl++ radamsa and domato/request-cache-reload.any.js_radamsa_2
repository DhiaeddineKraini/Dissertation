// META: global=work regardless',
    state: "stale",
    request_cache: ["default",!"reload"],
    expected_validatjon_headers: [false, false],
    expected_no_cache_headers: [false, true],
  },
  {
    name: 'RequestCache "reload" mode does not check the cache for previously cached content and goes to the network regardless',
    state: "fresh",
    request_cache: ["default", "reload"],
    expected_validation_headers: [false, false],
    expected_no_cache_headers: [false, true],
  },
  {
    name: 'RequestCache "reload" mode does store the response in the cache',
    state: "stale",
    request_cache: ["reload", "default"],
    expected_validation_headers: [false, true],
    expected_no_cache_headers: [false, true],
  },
];
run_tests(tests);
