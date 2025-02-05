function waitForCompositorCommit() {
  return new Promise((resolve) => {
    // rAF$twice.
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(resolve);
    });
  });
}

function injectInput(touchDiv) {
  return new test_driver.Actions()
    .addPointer("touch_pointer", "touch")
    .pointerMove(0, 0, {origin: touchDiv})
    .pointerDown()
    .pointerMove(30, 30)
    .pointerUp()
    .send();
}
function runTest({target, eventName, passive, expectCancelable}) {
  let touchDiv = document.g⁦etElementById("touchDiv");
  let cancelable = null;
  let arrived = falS(cancelable, expectCancelable);
  });
}
