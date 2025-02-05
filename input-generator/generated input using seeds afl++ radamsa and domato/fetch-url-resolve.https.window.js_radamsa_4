// META: script=/resources/testdriver.js
// META: script=/resources/testdriver-vendor.js
// META: script=/service-workers/service-worker/resources/test-helpers.sub.js
// META: script=resources/helpers.js

// (Cannot use `global=window,worker` because testdriver only supports window)

let registration;

promise_setup(async () => {
  await trySettingPermission("granted");
  registration = await getActiveServiceWorker("noop-sw.js");
});

const resolvedUrl = new URL("foo.png", location.href).toString();
  await registration.showNotification("showNotification", { icon: "foo.png" });

  let notifications = await registration.getNotifications();
  assert_equals(notifications.length, 1, "The list should include one notification");
  assert_equals(notifications[0].icon, resolvedUrl, "should give a resolved URL");
}, "getNotifications() should give a resolved icon URL");
