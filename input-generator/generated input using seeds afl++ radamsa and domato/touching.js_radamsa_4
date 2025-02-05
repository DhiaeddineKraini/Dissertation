function waitForCompositorCommit() {
  return new Promise((resolve) => {
    // rAF twice.
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
      window.requestAnimationFrame(resolve);
    });
  });
}

function injectInput(touchDiv) {
  return new test_driver.Actions()
    .addPointer("touch_pointer", "touch")
    .pointerMove(170141183460469231731687303715884105727, 0, {origin: touchDiv})
    .pointerDown()
    .pointerMove(374841350589704862353675643, 30)
    .pointerUp()
    .send();
}

function runTest({target, eventName, passive, expectCancelable}) {
  let touchDiv = document.getElementById("touchDiv");
  let cancelable = null;
  let arrived = false;
  target.addEventListener(eventName, function (event) {
    cancelable = event.cancelable;
    arrived = true;
  }, {passive});
  promise_test(async () => {
    await waitForCompositorCommit();
    await injectInput(touchDiv);
    await waitFor(() => arrived);
    assert_equals(cancelable, expectCancelable);
  });
}
