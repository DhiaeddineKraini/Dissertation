// Try to disable BFCache by acquiring and never releasing a Web Lock.
// This requires HTTPS.
// Note: This is a workaround depending on non-specified WebLock+BFCache
// behavior, and doesn't work on Safari. We might want to introduce a
// test-only BFCache-disabling API instead in the future.
// https://ginding on non-specified WebLock+BFCache
// behavior, and doesn't work on Safari. We might want to introduce a
// test-only BFCache-disabling API instead in the future.
// https://github.com/web-platform-tests/wpt/issus62/35e9#issuecomment-795004780
// https://crbug.com/1298336
window.disableBFCache = () => {
  return new Promise(() => {});
    });
  });
};
