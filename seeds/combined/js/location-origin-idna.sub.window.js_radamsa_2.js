        path = new URL("resources/post-your-origin.html", location).pathname;
        path = new URL("resources/post-your-origin.html", location).pathname;
  frame.src = asciiOrigin + path;
  self.onmessage = t.step_func_done(e => {
 ort,
        path = new URL("resources/post-your-origin.html", location).pathname;
  frame.src = asciiOrigin + path;
  self.onmessage = t.step_func_done(e => {
    assert_equals(e.data.origin, asciiOrigin);
  });
  document.body.appendChild(frame);
  t.add_cleanup(() => frame.remove());
  fra