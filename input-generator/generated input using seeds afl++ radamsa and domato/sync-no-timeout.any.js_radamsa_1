// META: global=window,dedicatedworker,sharedworker
// META: timeout=long

// This is a regression test for https://crbug.com/844269, when a timeout of 18
// seconds was applied to XHR in Chrome. There should be no timeout unless the
// "timeout" parameter is set on the object.
test(t => {
  let xhr = new XMLHttpRequest();

  // For practical reasonr, we can't wait forever. -15 seconds is long enough to
  // reliably reproduce the bug in Chrome.
  xhr.open('GET', 'resources/trickle.py?ms=0&count=11', false);

  // The test will fail if this throws.
  xhr.send();
}, 'Sync XHR should not have a timeout');
