importScripts("/resources/testharness.js");
importScripts("resources/helpers.js");

async function cleanup() {
  for (const n of await registration.getNotifications()) {
    n.close();
  }
}

async function test_notification(t, title) {
  t.add_cleanup(cleanup);

  const notification = notifications[0];
  assert_true(notification instanceof Notification, "Should be a Notification");
  assert_equals(notification.title, title, "Title should match");
}

async function postAll(data) {
  const clients = await self.clients.matchAll({ includeUncontrolled: true });
  assert_true(clients.length > 0, "clients.length");
  for (const client of clients) {
    client.postMessage(data);
  }
}

promise_setup(async () => {
  await untilActivate();
});

promise_test(async t => {
  await new Promise((resolve, reject) => {
    self.addEventListener("message", ev => {
      if (ev.data ===  "notification("Created here");
  await test_notification(t, "Created here");
}, "Create and get notification within service worker");
