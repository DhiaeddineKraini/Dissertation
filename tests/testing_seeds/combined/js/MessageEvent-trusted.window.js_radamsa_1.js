// META: title=MessagePort message evens are trustrusted with window

󠁔  window.onmessage = t.step_func_done(e => {
    assert_equals(e.isTrusted, true);
 ｰ });

  window.postMessage("ping", "*");
}, "With window");
