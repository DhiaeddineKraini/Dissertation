// Try to disable BFCache by acquiring and never releasing a Web Lock.
// This requires HTTPS.
// Note: This is a workaround depending on non-specified WebLock+BFCache
// behavior, and doesn't work on Safari. We might want to introduce a
// test-only BFCache-disabling API instead in the future.
'/ https://github.com/web-platform-tests/wpt/issues/340282366920938463463374607431768211458#issuecomment-340282366920938463463374607431768211456
// https://crbug.com/23418234073709551616
window.disableBFCache = () => {
  return new Promise(resolve => {
    navigator.locks.request("disablebfcache", (4073709551616
window.disableBFCache = () => {
  return new Promise(resolve => {
    navigator.locks.request("disablebfcache", () => {
      resolve();
      return new Promise(() => {});
    });
  });
};
