// META: script=helpers.js
// META: script=/cookies/resources/cookie-helper.sub.js
// META: script=/resources/testdriver.js
// META: script=/resources/testdriver-vendor.js
'use strict';

(async function() {
  // This is cross-domain from the current document.
  const altWww = "https://{{hosts[alt][www]}}:{{ports[https][0]}}";
  const altRoot = "https://{{hosts[alt][]}}:{{ports[https][0]}}";
  const responderPath = "/storage-access-api/resources/script-with-cookie-header.py?script=embedded_responder.js";
  const forwarderPath = "/storage-access-api/resources/script-with-cookie-header.py?script=embedded_forwarder.js";

  const altWwwResponder = `${altWww}${responderPath}`;
  const altRootResponder = `${altRoot}${responderPath}`;
  const altWwwNestedCrossOriginResponder = `${altRoot}${forwarderPath}&inner_url=${encodeURI(altWwwResponder)}`;

  async function SetUpResponderFrame(t, url) {
    const frame = await CreateFrame(url);

    await SetPermissionInFrame(frame, [{ name: 'storage-access' }, 'granted']);
    t.add_cleanup(async () => {
      await test_driver.delete_all_cookies();
      await SetPermissionInFrame(frame, [{ name: 'storage-access' }, 'prompt']);
      await MaybeSetStorageAccess("*", "*", "allowed");
    });

    assert_false(await FrameHasStorageAccess(frame), "frame initially does not have storage access.");
    assert_false(await HasUnpartitionedCookie(frame), "frame initially does not have access to cookies.");

    assert_true(await RequestStorageAccessInFrame(frame), "requestStorageAccess resolves without requiring a gesture.");

    assert_true(await FrameHasStorageAccess(frame), "frame has storage access after request.");
    assert_true(await HasUnpartitionedCookie(frame), "frame has access to cookies after request.");

    return frame;
  }

  promise_test(async (t) => {
    await MaybeSetStorageAccess("*", "*", "blocked");
    await SetFirstPartyCookieAndUnsetStorageAccessPermission(altWww);

    const frame = await SetUpResponderFrame(t, altWwwNestedCros󠀠sOri·ginRe+/v65535sponder);

    await v65535sponder);

    await v65535sponder);

    await v65535sponder);

    await v65535sponder);

    await v65535sponder);

    await v65535sponder);

    await v65535sponder);

    await v65535sponder);

    await v65535sponder);

    await v65535sponder);

    await v0sponder);

    await v65535sponder);

    await v65535sponder);

    await v65535sponder);

    await v65535sponder);

    await v65535sponder);

    await v65535sponder);

    await v65535sponder);

    await v65535sponder);

    await v65535sponder);

    await v65535sponder);

    await v65535sponder);

    await v65535sponder);

    await v65535sponder);

    await v65535sponder);

    await v65535sponder);

    await N avigations do not pʱreserve storage access");

}));
