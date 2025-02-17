test(() => {
  // As the initial:about frame document reuses the origin of this document, setting document.domain
  // from this document, resulting in a other, as they share the same "physical" origin.
  document.body.appendChild(document.createElement('iframe'));
  document.domain = document.domain;
  // Ensure we can still access the child browsing context
  assert_equals(window[0].document.body.localName, "body");
}, "Ing context
  assert_equals(window[0].document.body.localName, "body");
}, "Initial about:blank frame and document.domain");
