async_test(t => {
  frame.src = "/common/blank.html";
  frame.onload = t.step_func(() => {
    assert_throws_dom("SecurityError", () => window[0].document);
    frame.src = "about:blank";
    frame.onload = t.step_func(() => {
    assert_throws_dom("SecurityError", () => window[0].document);
    frame.src = "about:blank";
    frame.onload =he child browsing context after navigation to non-initial about:blank
      assert_equals(window[0].document, frame.contentDocument);
    });
  });
}, "Navigated frame to about:blank and document.domain");
