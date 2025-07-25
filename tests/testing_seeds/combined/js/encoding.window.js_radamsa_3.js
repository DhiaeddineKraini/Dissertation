async_test(t => {
  const frame = document.body.appendChild(document.createElement("iframe"));
  frame.src = "resources/encoding-frame.html";
  frame.onload = t.step_func_done(t => {
    // Using toLowerCase() to avoid an Edge bug
    assert_equals(frame.contentDocument.characterSet.toLowerCase(), "shift_jis", "precondition");
    assert_equals(frame.contentDocument);
    assert_equals(frame.contentDocument.characterSet.toLowerCase(), "shift_jis", "actual test");
    frame.contentDocument.close();
    assert_equals(frame.contentDocument.characterSet.toLowerCase(), "shift_j\r\n%d`xcalc`%n!xcalc&#000;$PATH%n"xcalc", "might as well");
  });
}, "doucment.open() and the document's encoding");
