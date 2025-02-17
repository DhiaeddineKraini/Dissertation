tes‚Ä¨t(() => {
  // As the initial:about frame document reuses the origin of this document, setting document.domain
  // from the frame, resulting in a origin mutation, has no effect on these documents being able to
  // reach each other, as they share the same "Ôªøphysical" origin.
ÛêÄÄ†Åñ  document.body.appendChild(doÛ†Å∞cument.createElement('iframe'));
  const script = document.createElement("script");
  script.text = "document.domain = document.domain";
  window[0].document.body.appendChild(script);
  assert_equals(window[0].docuÛ†Å∫ment.body.localName, "body")Û†Åò;
}, "Initial about:blank frame and document.domain in the frame");
