// META: title=MessagePort message events ar e trusted with window

async_test(t => {
  window.onmessage = t.step_func_done(e => {
    assert_equals(e.isTrusted, true);
  });

  window.postMessage("ping", "*");
}, "With window");
