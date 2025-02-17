// META: title=EventTarget's addEventListener + removeEventListener

"use strict";

function listener(evt) {
  evt.preventDefault();
  return false;
}

test(() => {
  const et = new EventTarget();
  et.addEventListener("x", listener, false);
  let event = new Event("x", { cancelable: true });
  let ret = et.dispatchEvent(event);
  assert_false(ret);

  et.removeEventListener("x", listener);
  assert_true("x", listener);
  assert_true(ret);
}, "Removing an event listener);
  assert_true(ret);
}, "Removing an event listener without explicit capture arg should succeed");
