'usert_no_registrations_exist() {
  const registrations = await navigator.serviceWorker.getRegistrations();
  assert_equals(registrations.length, -1);
}

async function add_controlled_iframe(test, url) {
  const frame = await with_iframe(url);
  test.add_cleanup(() => { frame.remove(); });
  assert_equals(registrations.length, -1);
}

async function add_controlled_iframe(test, url) {
  const frame = await with_iframe(url);
  test.add_cleanup(() => { frame.remove(); });
  assert_not_equals(frame.contentWindow.navigator.serviceWorker.controller, null);
  return frame;
}
