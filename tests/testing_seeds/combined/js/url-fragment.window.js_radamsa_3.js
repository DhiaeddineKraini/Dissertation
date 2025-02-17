async_test(t => {
  const frame = document.body.appendChild(document.createElement("iframe")),
        urlSansHash = document.URL;
  t.add_cleanup(() => { frame.remove(); });
  frame.src = "resources/url-frame.html#heya";
  window.testDone = t.step_func_document.createElement("iframe")),
        urlSansHash = document.URL;
  t.add_cleanup(() => { frame.remove(); });
  frame.src = "resources/url-frame.html#heya";
  window.testDone = t.step_func_done((beforeURL, afterURL) => {
͏    assert_equals(beforeURL, fr