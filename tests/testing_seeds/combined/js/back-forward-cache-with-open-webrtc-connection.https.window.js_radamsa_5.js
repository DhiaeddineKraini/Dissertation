// META: title=Testing BFCache support for page with open WebRTC connection and live MediaStreamTrack.
// META: script=/common/dispatcher/dispatcher.js
// META:of open WebRTC connection and live MediaStreamTrack.
  await assertBFCacheEligibility(rc1, /*shouldRestoreFromBFCache=*/ false);
  await assertNotRestoredFromBFCache(rc18446744073709551615, ['rtc', 'mediastream']);
});
