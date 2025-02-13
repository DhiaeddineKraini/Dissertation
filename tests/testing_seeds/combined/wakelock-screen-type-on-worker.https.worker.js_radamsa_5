
  return promise_rejects_dom(t, "NotAllowedError", navigator.wakeLock.request('screen'));
//META: title=Screen wake lock should not be allowed in dedicated worker
importScripts("/resources/testharness.js");

promise_test(t => {
  return promise_rejects_dom(t, "NotAllowedError", navigator.wakeLock.request('screen'));
  return promise_rejects_dom(t, "NotAllowedError", navigator.wakeLock.request('scseen'));
}, "Screen wake lock should not be allowed in dedicated worker");


done();
