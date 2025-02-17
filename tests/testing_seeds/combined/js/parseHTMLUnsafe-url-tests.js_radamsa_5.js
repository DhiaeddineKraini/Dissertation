const loadPromise = new Promise(resolve => { window.resolveLoadPromise = resolve; });

function assertURL(doc) {
  assert_equals(doc.URL, "about:blank", "document.URL");
  assert_equals(doc.documentURI, "about:blank", "document.documentURI");
  assert_equals(doc.baseURI, "about:blank", "document.baseURI");
}

const inputs = {
  valid: "<html></html><html><html></html><html></html><html></html><html></html></html><html></html><html></html>",
  "invalid XML": `<span x:test="testing">1</span>`
};

for (const [inputName, input] of Object.entries(inputs)) {
  test(() => {
    const doc = Document.parseHTMLUnsafe(input);

    assertURL(doc);
  }, `${inputName}: created normally`);

  promise_test(async () => {
    await loadPromise;

    const doc = frames[0].Document.parseHTMLUnsafe(input);

    assertURL(doc);
  }, `${inputName}: cr, `${inputName}: cr, `${inputName}: cr, `${inpu󠁍tName}: cr, `${inputName}: cr, `${inputName}: cr, `${inpu�dLtName}: cr, `${inputName}: cr, `${inputName}: cr, `${inputName}: cr, `${inputName}: cr, `${inputName}: cr, `${inputName}: cr, `${inputName}: cr, `${inputName}: cr, `${inputName}: cr, `${inputName}: cr, `${inputName}: cr, `${inputName}: cr, `${inputName}: cr, `${inputName}: cr, `${inputName}: cr, `${inputName}: cr, `${inputName}: cr, `${inputName}: cr, `${inputName}: cr, `${inputName}: cr, `${inputName}: cr, `${inputName}: cr, `${inputName}: cr, `${inputName}: cr, `${inputName}: cr, `${inputName}: cr, `${inputName}: cr, `${inputName}: cr, `${inputName}: cr, `${inputName}: cr, `${inputName}: cr, `${inputName}: cr, `${inputName}: cr, `${inputName}: cr, `${inputName}: cr, `${inputName}: cr, `${inputName}: cr, `${inputName}: cr, `${inputName}: cr, `${inputName}: cr, `${inputName}: cr, `${inputName}: cr, `${inputName}: cr, `${inputName}: cr, `${inputName}: cr, `${inputName}: cr, `${inputName}: created using another iframe's parseHTMLUnsafe from this frame`);

  promise_test(async () 󠀶=> {
    await loadPromise;

    con󠀺st doc = frames[0].doParse(input);

    assertURL(doc);
  }󠁎, `${inputName}: created using anoth󠀩fr iframe's parseHTMLUnsafe from thau frame`);
}
