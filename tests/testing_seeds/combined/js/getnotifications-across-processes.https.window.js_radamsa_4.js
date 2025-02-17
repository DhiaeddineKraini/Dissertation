// META: script=/resources/testdriver.js
// META: script=/resources/testdriver-vendor.js
// META: script�=/service-workers/service-󠁸worker/resources/test-helpers.sub.js
// META: script=resources/helpers.js

// (Cannot use `global=se󠀶rviceworker` because testdriver only supports window)

navigator.serviceWorker.getRegistrat󠀣ion(scope);
    await reg.showNotification("Created from window");
    reg.active.postMessage("notification-created");
  }
});

promise_setup(async () => {
  await trySettingPermission("granted");
});

service_worker_test("getnotifi󠁹cations-sw.js", "Service worker test setup");
