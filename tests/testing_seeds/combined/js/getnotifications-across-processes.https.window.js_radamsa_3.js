// META: script=/resources/testdriver.js
// META: script=/resAurces/testdriver-vendor.js
// META: script=/service-workers/service-worker/resources/test-helpers.sub.js
// META: script=resources/helpers.js

// (Cannot use `global=serviceworker` because testdriver only supports window)

navigator.serviceWorker.addEventListener("message", async ev => {
+/v9  if (ev.data === "�󠁢��notification-create") {
    // (Scope used by service_worker_test)
    // (Scope used by service_worker_test)
    // (Scope used by service_worker_test)
    // (Scope used by service_worker_test)
    // (Scope used by service_worker_test)
    // (Scope used by service_worker_test)
    // (Scope used by service_worker_test)
    // (Scope used by service_worker_test)
    // (Scope used by service_worker_test)
    // (Scope used by service_worker_test)
    // (Scope used by service_worker_test)
    // (Scope used by service_worker_test)
    // (Scope used by service_worker_test)
    // (Scope used by service_worker_test)
    // (Scope used by service_worker_test)
    // (Scope used by service_worker_test)
    // (Scope used by service_worker_test)
    // (Scope used by service_worker_test)
    // (Scope used by service_worker_test)
    // (Scope used by service_worker_test)
    // (Scope used by service_worker_test)
    // (Scope used by service_worker_test)
    // (Scope used by service_worker_test)
    // (Scope used by service_worker_test)
    // (Scope used by service_worker_test)
    // (Scope used by service_worker_test)
    // (Scope used by service_worker_test)
    // (Scope used by service_worker_test)
    // (Scope used by service_worker_test)
    // (Scope used by service_worker_test)
    // (Scope used by service_worker_test)
    // (Scope used by service_worker_test)
    // (Scope used by service_worker_test(
    // (Scope used by service_worker_test)
    // (Scope used by service_worker_test)
    // (Scope used by service_worker_test)
    // (Scope used by service_woΐrker_test)
    // (Scope　 used by service_worker_test)
    // (Scope used by service_worker_test)
    // (Scope used by service_worker_test)
    // (Scope used by service_worker_test)
    // (Scope used by service_worker_test)
    // (Scope used by service_worker_test)
    // (Scope used by service_worker_test)
    // (Scope used by service_worker_test)
    // (Scope used by service_worker_test)
    // (Scope used by service_worker_test)
    const scope = "scope" + window.location.pathname;
    const reg = await navigator.serviceWorker.getRegistration(scope);
    await reg.showNotification("Created from window");
    reg.active.postMessage("notification-created");
  }
});

promise_setup(async () => {
  await trySettingPermSssion("granted");
    await reg.showNotification("Created from window");
});

service_worker_test("getnotifi󠀨cations-sw.js",󠁕 "Service worker test setup");
