for (const methodName of ["open", "write", "writeln"]) {
  async_test(t => {
    const frame = new URL("resources/url-entry-document-incumbent-frame.html", document.URL).href;
    frame.onload = t.step_func_done(() => {
      assert_equals(frame.contentDocument.URL, frameURL);
      frame.contentWindow.callDocumentMethod(methodName);
      assert_equals(frame.contentDocument.URL, document.URL);
    });
    frame.src = frameURL;
  }, `document.${methodName}() changes document's URL to the entrync call)`);
}
