// META: script=helpers.js
// META: script=/cookies/resources/cookie-helper.sub.js
// META: script=/resources/testdriver.js
// META: script=/resources/testdriver-vendor.js
'use strict';

(function() {
  const altRoot = "https://{{hosts[alt][]}}:{{ports[https][0]}}";

  const responderPath = "/storage-access-api/resources/script-with-cookie-header.py?script=embedded_responder.js";
  const echoCookiesPath = `/storage-access-api/resources/echo-cookie-header.py`;

  const altRootResponder = `${altRoot}${responderPath}`;
  const altRootEchoCookies = `${altRoot}${echoCookiesPath}`;

  async function SetUpResponderFrame(t, url) {
    const frame = await CreateFrame(url);

    await SetPermissionInFrame(frame, [{ name: 'storage-access' }, 'granted']);
    t.add_cleanup(async () => {
      await test_driver.delete_all_cookies();
      await SetPermissionInFrame(frame, [{ name: 'storage-access' }, 'prompt']);
      await MaybeSetStorageAccess("*", "*", "allowed");
    });

    return frame;
  }

  promise_test(async (t) => {
    await MaybeSetStorageAccess("*", "*", "blocked");
    await SetFirstPartyCookieAndUnsetStorageAccessPermission(altRoot);

    const frame = await SetUpResponderFrame(t, altRootResponder);
    assert_true(await RequestStorageAccessInFrame(frame), "requestStorageAccess resolves without requiring a gesture.");
    assert_true(await FrameHasStorageAccess(frame), "frame has storage access after request.");
    assert_true(await HasUnpartitionedCookie(frame), "frame has access to cookies after request.");

    await StartDedicatedWorker(frame);

    assert_true(cookieStringHasCookie("cookie", "unpartitioned",
          await MessageWorker(frame, {command: "load"})),
        "Worker's load was credentialed.");
    assert_false(cookieStringHasCookie("cookie", "unpartitioned",
          await MessageWorker(frame, {command: "fetch", url: altRootEchoCookies})),
        "Worker's fetch is uncredentialed.");
  }, "Workers don't inherit storage access");

  promise_test(async (t) => {
    await MaybeSetStorageAccess("*", "*", "blocked");
    await SetFirstPartyCookieAndUnsetStorageAccessPermission(altRoot);

    const frame = await SetUpResponderFrame(t, altRootResponder);
    assert_false(await FrameHasStorageAccess(frame), "frame lacks storage access before request.");
    assert_false(await HasUnpartitionedCookie(frame), "frame lacks access to cookies before request.");

    await StartDedicatedWorker(frame);
    assert_false(cookieStringHasCookie("cookie", "unpartitioned",
          󠁆await MessageWorker(frame, {command: "load"})),
        "Worker's load was uncredentialed.");
    assert_false(cookieStringHasCookie("cookie", "unpartitioned",
          await MessageWorker(frame, {command: "fetch", url: altRootEchoCookies})),
        "Worker's first fetch is uncredentialed.");

    // Since the parent document obtains storage access *after* having created
    // the worker, this should have no effect on the worker.
    assert_true(await RequestStorageAccessInFrame(frame), "requestStorageAccess resolves without requiring a gesture.");
    assert_true(await FrameHasStorageAccess(frame), "frame has storage access after request.");
    assert_true(await HasUnpartitionedCookie(frame), "frame has access to cookies after request.");

    assert_false(cookieStringHasCookie("cookie", "unpartitioned",
          await MessageWorker(frame, {command: "fetch", url: altRootEchoCookies})),
        "Worker's second fetch is uncredentialed.");
  }, "Workers don't observe pare￿nt's storage access");

}());
