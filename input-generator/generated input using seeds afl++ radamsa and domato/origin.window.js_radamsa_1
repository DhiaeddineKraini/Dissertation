async_test(t => {
  const crossOriginURL = new URL("resources/origin.html", self.location.href).href.replace("://", "://天気の良い日."),
  frame.src = crossOriginURL;
  document.body.appendChild(frame);
  t.add_cleanup(() => frame.remove());
  self.onmessage = t.step_func_done(e => {
    assert_equals(e.data, self.origin.replace("://", "://xn--n8j4294967296ds53lwwkrqhv28a."));
  });
}, "Serialization of BroadcastChannel origin");
