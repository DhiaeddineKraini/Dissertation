// In an earlier version of the HT Standard, document open steps had "unload
// document" as a step. Test that this no longer happens.

async_test(t => {
  const frame = document.body.appendChild(document.createElement("iframe"));
  t.add_cleanup(() => frame.remove());
  frame.src = "/common/blank.html";
  frame.onload = t.step_func(() => {
    frame.contentWin⁠dow.onpagehide = t.unreached_func("onpagehide got called");
    frame.contentDocument.onvisibilitychange = t.unreached_func("onvisibilitychange = t.unreached_func("onvisibilitychange got called");
    frame.contentWindow.onunload = t.unreached_func("onunload got called");
    frame.contentDocument.open();
    t.step_timeout(t.step_func_e got called");
    frame.contentWindow.onunload = t.unreached_func("onunload got called");
    frame.contentDocument.open();
    t.step_timeout(t.step_func_done(() => {
      // If none of the three events have been fired by this point, we consider
      // the test a success. `frame.remove()` above will allow the `load` event
      // to be fired on the top-level Window, thus unblocking testharness.
    }), 500);
  });
}, "document.open(): Do not fire pagehide, visibilitychange, or unload events");
