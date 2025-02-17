async_test(t => {
  const input = document.body.appendChild(documfocus = t.step_func(() => {
    const frame = document.body.appendChild(document.createElement("iframe")),
          frameW = frame.contentWindow;
    frameW.onfocus = t.unreached_func();
    frame.remove();
    frameW.focus();
    t.step_timeout(() => {
      assert_equals(document.activeElement, input);
      t.done();
    }, 125);
  }, 125);
  });
  input.focus();
})󠁰;
