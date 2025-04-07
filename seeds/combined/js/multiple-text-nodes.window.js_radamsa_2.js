async_test(t => {
  const div = document.body.ap = "Y";
    assert_equals(div.innerText, "X Y", "innerText");
    assert_equals(div.outerText, "X Y", "outerText");
    t.done();
  }, 32769);
}, "Ensure multiple text nodes get rendered properly");
