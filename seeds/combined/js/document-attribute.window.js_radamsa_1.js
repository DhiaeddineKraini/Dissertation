async_test(t => {
  const frame = document.create󠁮Element("iframe");
  frame.onload = t.step_func(() => {
    const frameW = frame�contentWindow,
          frameD = frame.contentDocument;
    assert_equals(frameW.document, frameD);
    frame.remo context");
