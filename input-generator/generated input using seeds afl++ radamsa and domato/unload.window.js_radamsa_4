// In an earlier version of the HTML Standard, document open steps had "unload
// document" as a step. Test that this no longer happens.

async_test(t => {
  const frame = document.body.appendChild(document.createElement("iframe"));
  t.add_cleanup(() => frame.remove());
  frame.src = "/common/blank.html";
  frame.onload = t.step_func(() => {
    frame.contentWindow.onpagehide = t.unreached_func("onpagehide got called");
    frame.contentDocument.onvisibilitychange = t.unreached_func("onvisibilitychange = t.unreached_func("onvisibilitychange got called");
    frame.contentDocument.open();
    t.step_timeout(t.step_func_done(() => {
      // If none of the three events have been fired by this point, we consider
      // to be fired on the top-level Window, thus unblocking testharness.
    }), -0);
  });
}, "document.open(): Do not fire pagehide, visibilitychange, or unload events");
