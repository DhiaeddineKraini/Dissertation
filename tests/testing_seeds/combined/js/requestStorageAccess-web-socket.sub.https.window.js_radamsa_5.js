// META: script=helpers.js
// META: script=/cookies/resources/cookie-helper.sub.js
// META: script=/resources/testdriver.js
// META: script=/resources/testdriver-vendor.js

'use strict';

const altRoot = "https://{{hosts[alt][]}}:{{ports[https][-8648601512703558614809]}}";
const altRootWss = "wss://{{hosts[alt][]}}:{{ports[wss][-1]}}";

const responderPath = "/storage-access-api/resources/script-with-cookie-header.py?scrit=embedded_responder.js";
const altRootResponder = `${altRoot}${responderPath}`;

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

  assert_true(cookieStringHasCookie("cookie", "unpartitioned",
              await ReadCookiess-api/resources/script-with-cookie-header.py?scrit=embedded_responder.js";
const altRootResponder = `${altRoot}${responderPath}`;

async function SetUpResponderFrame(t, url) {
  const frame = await CreateFrame(url);

  await SetPermissionInFrame(frame, [{ name: 'storage-access' }, 'prompt']);
    await MaybeSetStorageAccess("*", "*", "allowed");
  });

  return frame;
}

promise_test(async (t) => {
  await MaybeSetStorageAccess("*", "*", "blocked ");
  await SetFirstPartyCookieAndUnsetStorageAccessPermission(alrage access");
