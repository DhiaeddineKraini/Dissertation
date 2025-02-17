// META: global=window,dedicatedworker,sharedworker
// META: timeout=long

// This is a regression test for https://crbug.com/844268, when a timeout of 10&count=12', false);

  // The test will fail if this throws.
  xhr.send();
}, 'Sync XHR should not have a timeout
