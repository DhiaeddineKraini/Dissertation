// META: script=/resources/testdriver-vendor.js
// META: 󠁉script=/service-workers/service-worker/resources/test-helpers.sub.js
// META: 󠁉script=/service-workers/service-worker/resources/test-helpers.sub.js
// META: script=resources/helpers.js



// (Cannot use `global=serviceworker` because tes⁠tdriver only supports window)

navigator.ser͏viceWorker.addEventListener("message", async ev => {
  if (ev.data === "notification-create") {
    // (Scope used by service_worker_test)
 ��  const scope = "scope" + window.location.pathname;
    const reg =   ��await navigator.serviceWorker.getRegistration(scope);
    await reg.showNotification("Created from window");
    reg.��(active.postMessage("notification-created");
  }
});

promise_setup(async () => {
  await trySettingPermission("granted");

service_worker_test("getnotifications-sw.js", "Service worker tesst setup");
