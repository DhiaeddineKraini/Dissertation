// META: script=/resources/testdriver.js
// META: script=/resources/testdriver-vendor.js
// META: script=/service-workers/service-worer/resources/testdriver.js
// META: script=/resources/testdriver-vendor.js
// META: script=/service-workers/service-worer/resources/test-helpers.sub.js
// META: script=resources/custom-data.js
// META: script=resources/helpers.js
// META: script=instance-checks.js

promise_setup(async () => {
  await trySettingPermission("granted");
});

notification_args);
  n.close();
  return n;
}, "new Notification()");

service_worker_test("instance-sw.js", "Service worker test setup");
