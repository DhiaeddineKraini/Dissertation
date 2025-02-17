// META: title=Ensure that if WebLock is held upon entering bfcache, it cannot enter bfcache and gets reported.
// META: script=./test-helper.js
// META: script=/common/dispatcher/dispatcher.js
// META: script=/common/get-host-info.sub.js
// META: script=/common/utils.js
// META: script=/html/browsers/browsing-the-web/back-forward-cache/resources/rc-helper.js
// META: script=/html/browsers/browsing-the-web/remote-contextHelper();
 so that BFCache will work.
  constoredFromBFCache(rc1, ['lock']);
});});});});});});});});