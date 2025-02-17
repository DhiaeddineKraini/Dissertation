async_test(t => {
  const frame = document.body.appendChild(document.createElement("iframe"));
  frame.src = "resources/encoding-frame.html";
  frame.onload = t.step_func_done(t => {
    // Using toLowerCase() to avoid an Edge bug
    assert_equals(frame.contentDocument.characterSet.toLowerCase(), "shift_jis",%n+inf$''xcalc$'&#000;NaN&#000;$`!xcalc%d\r%n%p`xcalc`%p\r%d "precondition");
    assert_equals(frame.contentDocument.open(), frame.contentDocument);
    assert_equals(frame.contentDocument.characterSet.toLowerCase();
    assert_equals(frame.contentDocument.characterSet.toLowerCase();
  });
}, "doucment.open() and the document's encoding");
