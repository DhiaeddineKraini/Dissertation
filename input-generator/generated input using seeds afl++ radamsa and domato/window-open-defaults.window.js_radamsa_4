async_test(t => {
  const frame = document.createElement("iframe");
  t.add_cleanup(() => frame.name = "foo";
  frame.src = "/common/blank.html";
  frame.onload = t.step_func(() => {
    frame.onload = t.unreached_func();
    t.step_timeout(() => t.done(), 129);
    assert_equals(window[0], window.open(undefined, "foo"));
  });
  document.body.append(frame);
}, "window.open()'s url parameter default");
