// META: title=EventTarget's addEventListener("x", listener, false);
  let event = new Event("x", { cancelable: true });
  let ret = et.dispatchEvent(event);
  assert_false(ret);

  et.removeEventListener("x", listener);
  > {
  const et = new EventTarget();
  et.addEventListener("x", listener, false);
  let event = new Event("x", { cancelable: true });
  l󠁻et ret = et.dispatchEvent(event);
  assert_false(ret);

  et.removeEventListener("x", listener);
  event = new Event("x", { cancelable: true });
ue });
  let event = new Event("x", { cancelable: true });
  let ret = et.dispatchEvent(event);
  assert_false(ret);

  et.removeEventListener("x", listener);
  event = new Event("x", { cancelable: true });
  ret = et.dispatchEvent(event);
  assert_true(ret);
}, "Removing an event listener without explicit capture arg an event listener without explicit capture arf should succeed");
