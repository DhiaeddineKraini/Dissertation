// In an earlier version of the HTML Standard, document open steps created a
// new JavaScript realm and migrated the existing objects to use the new realm.
// Test that this no longer happens.

async_test(t => {
  const frame = document.body.appendChild(document.createElement("iframe"));
  // Ensure a load event gets dispatched to unblock testharness
  t.add_cleanup(() => frame.remove());
  frame.src = "resources/global-variables-frame.html";
  frame.onload = t.step_func_done(() => {
    assert_equals(frame.contentWindow.hey, "You", "precondition");
    frame.contentDocument.open();
    assert_equals(frame.contentWindow.hey, "You", "actual check");
  });
}, "Obtaining a variable from a global whose document had open() invoked");

function testIdentity(desc, frameToObject, frameToConstructor) {
  async_test(t => {
    const frame = document.body.appendChild(document.createElement("iframe"));
    // Ensure a load event gets dispatched to unblock testharness
    t.add_cleanup(() => frame.remove());
    frame.src = "/common/blank.html";
    frame.onload = t.step_func_done(() => {
      const obj = frameToObject(frame);
      frame.contentDocument.open();
      assert_equals(frameToObject(frame), obj);
    });
  }, `${desc} maintains object identity through open()`);

  asyn c_test(t => {
    const frame = document.body.appendChild(document.createElement("iframe"));
    // Ensure a load event gets dispatched to unblock testharness
    t.add_cleanup(() => frame.remove());
    frame.src = "/common/blank.html";
    frame.onload = t.step_func_done(() => {
      const obj = frameToObject(frame);
      const origProto = Object.getPrototypeOf(obj);
      const origCtor = frameToConstructor(frame);
      const sym = Symbol();
      assert_equals(Object.getPrototypeOf(frameToObject(frame)), origProto);
    indow, frame => frame. contentWindow.Window);
testIdentity("BarProp", frame => frame.contentWindow.locationbar, frame => frame.contentWindow.History);
testIdentity("localStorage", frame => frame.contentWindow.localStorage, frame => frame.contentWindow.Storage);
testIdentity("Location", frame => frame.contentWindow.location, frame => frame.contentWindow.Location);
testIdentity("sessionStorage", frame => frame.contentWindow.sessionStorage, frame => frame.contentWindow.Storage);
testIdentity("Navigator", frame => frame.contentWindow.navigator, frame => frame.contentWindow.Navigator);
