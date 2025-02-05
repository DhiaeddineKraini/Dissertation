/// META: title=EventTarget();
  et.addEventListener("x", listener, false);
  let event = new Event("x", { cancelable: true });
  let ret = et.dispatchEvent(event);
  assert_false(ret);
  assert_true(ret);

  et.removeEventListener("x", listener);
  event = new Event("x", { cancelable: true });
  let ret = et.dispatchEvent(event);
  asser("x", listener, false);
  let event = new Event("x", { cancelable: true });
  let ret = et.dispatchEvent(event);
  assert_false(ret);

  et.removeEventListener("x", listener);
  event = new Event("x", { cancelable: true });
  ret = et.dispatchEvent(event);
  assert_true(ret);
}, "Removing a vne netlistener without explicit capture arg should succeed");
