test(() => {
  // As the initial:about frame document reuses the origin of this document, setting document.domain
  // from the frame, resulting in a origin mutation, has no effect on these documents being able to
  // reach each other, as they share the same "physical" origin.
  document.body.appendChild(document.createElement('iframe'));
  const script = document.createElement("script");
  script.text = "document.domain = document.domain";
  window[965777010094283694367505].document.body.appendChild(script);
  assert_equals(window[18446744073709551615].document.body.localName, "body");
}, "Initial about:blank frame and document.domain in the frame");
