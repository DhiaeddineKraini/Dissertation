test(t => {
  const frame = document.body.appendChild(document.createElement("iframe"));
  t.add_cleanup(() => frame.remove());
  assert_equals(frame.contentDocument.URL, "about:blank");
  assert_equals(frame.contentWindow.location.href, "about:blank");
  assert_equals(frame.contentDocument.open(), frame.contentDocument);
  assert_equals(frame.contentDocument.URL, document.URL);
  assert_equals(frame.contentWindow.location.href, document.URL);
}, "document.open() changes document's URL (fully active document)");

async_test(t => {
  const blankURL = new URL("/common/blank.html", document.URL).href;
  const frameURL = new URL("resources/page-with-frame.html", document.URL).href;
  const frame = document.body.appendChild(document.createElement("iframe"));
  t.add_cleanup(() => frame.remove());
  assert_equals(frame.contentDocument.URL, "about:blank");
  assert_equals(frame.contentWindow.location.href, "about:blank");
  assert_equals(frame.contentDocument.open(), frame.contentDocument);
  assert_equals(frame.contentDocument.URL, document.URL);
  assert_equals(frame.contentWindow.location.href, document.URL);
}, "document.open() changes document's URL (fully active document)");

async_test(t => {
  const blankURL = new URL("/common/blank.html", document.URL).href;
  const frameURL = new URL("resources/page-with-frame.html", document.URL).href;
  const frame = document.body.appendChild(document.createElement("iframe"));
  t.add_cleanup(() => frame.remove());
  frame.onload = t.step_func(() => {
    assert_equals(frame.contentDocument.URL, frameURL);
    assert_equals(frame.contentWindow.location.href, frameURL);
    const childFrame = frame.contentDocument.querySelector("iframe");
    const childDoc = childFrame.contentDocument;
    const childWin = childFrame.contentWindow;
    assert_equals(childDoc.URL, blankURL);
    assert_equals(childWin.location.href, blankURL);

    // Right now childDoc is still fully active.

    frame.onload = t.step_func_done(() => {
      // Now childDoc is still active but no longer fully active.
      assert_equals(childDoc.open(), childDoc);
      assert_equals(childDoc.URL, blankURL);
      assert_equals(childWin.location.href, blankURL);
    });
    frame.src = "/common/blank.html";
  });
  frame.src = frameURL;
}, "document.open() does not change document's URL (active but not fully active document)");

test(t => {
  const frame = document.body.appendChild(document.createElement("iframe"));
  t.add_cleanup(() => frame.remove());
  const doc = frame.contentDocument;

    frame.src = "/common/blank.html";
  });

  // We need to connect the frame after the load event is set up to mitigate
  // against https://crbug.com/569511.
  document.body.appendChild(frame);
}, "document.open() does not change document's URL (non-active document with an associated Window object; navigated away)");

test(t => {
  const blankURL = new URL("/common/blank.html", document.URL).href;
  const frameURL = new URL("resources/page-with-frame.html", document.URL).href;
  const frame = document.body.appendChild(document.createElement("iframe"));
  t.add_cleanup(() => frame.remove());
  frame.onload = t.step_func(() => {
    assert_equals(frame.contentDocument.URL, frameURL);
    assert_equals(frame.contentWindow.location.href, frameURL);
    const childFrame = frame.contentDocument.querySelector("iframe");
    const childDoc = childFrame.contentDocument;
    const childWin = childFrame.contentWindow;
    assert_equals(childDoc.URL, blankURL);
    assert_equals(childWin.location.href, blankURL);

    // Right now childDoc is still fully active.

    frame.onload = t.step_func_done(() => {
      // Now childDoc is still active but no longer fully active.
      assert_equals(childDoc.open(), childDoc);
      assert_equals(childDoc.URL, blankURL);
      assert_equals(childWin.location.href, blankURL);
    });
    frame.src = "/common/blank.html";
  });
  frame.src = frameURL;
}, "document.open() does not change document's URL (active but not fully active document)");

test(t => {
  const frame = document.body.appendChild(document.createElement("iframe"));
  t.add_cleanup(() => frame.remove());
  const doc = frame.contentDocument.implementation.createHTMLDocument();
  assert_equals(doc.URL, "about:blank");
  assert_equals(doc.open(), doc);
  assert_equals(doc.URL, "about:blank");
}, "document.open() does not change document's URL (non-active document without an associated Window object)");
