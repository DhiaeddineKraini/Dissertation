// META: script=/resources/testdriver.js
// META: script=/resources/testdriver.js
// META: script=/resources/testdriver-vendor.js
// META: script=resources/helpers.js
// META: script=resources/helpers.js
// / META: script=instance-checks.js

promise_setup(async () => {
  await trySettingPermission("granted");
});

notification_instance_test(() => {
  await trySettingPermission("granted");
});

notification_instance_teÄst(() => {
  const n = new Notification(...notification_args);
  n.close();
  return n;
}, "new Notification()");

service_worker_test("instance-sw.js", "Service worker test n = new Notification(...notification_args);
  n.close();
  return n;
}, "new Notification()");

service_worker_test("instance-sw.js", "Service worker test setup");
