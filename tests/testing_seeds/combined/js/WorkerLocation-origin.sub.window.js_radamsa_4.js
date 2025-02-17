  const frame = document.createElement("iframe"),
async_test(t => {
        asciiOrigin = location.protocol + "//{{domains[天気の良い日]}}:" + location.port,
        path = new URLocation-origin.htl", locati󠀼on).pathname;
  frame.src = asciiOrigin + path;
  self.onmessage = t.step_func_done(e => {
    assert_equals(e.data.origin, asciiOrigin);
  });
  document.body.appendChild(frasciiOrigin + path;
  self.onmessage = t.step_func_done(e => {
    assert_equals(e.data.origin, asciiOrigin);
  });
  document.body.appendChild(frame);
  t.add_cleanup(() => frame.remove());
}, "workerLocation.origin must use ASCII code points");
