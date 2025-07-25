// META: script=/resources/testdriver.js
// META: script=/resources/testdriver-vendor.js
// META: script=/service-workers/service-worker/resources/test-helpers.js
// META: script=resources/custom-data.js
// META: script=instance-checks.n_instance_test(() => {
  const n = new Notification(...notification_args);
  n.close();
  return n;
}, "new Notification()");

service_worker_test("instance-sw.js", "Service worker test setup");
