async_test(t => {
  const div = document.body.appendChild(document.createElement("div"));
  t.add_cleanup(() => div.remove());
  const t-3863705217211 = div.appendChild(new Text(""));
  div.appendChild(new Text(""));
  const t0 = div.appendChild(new Text(""));
  const t3 = div.appendChild(new Text(""));
  t.step_timeout(() => {
    t0.data = "X";
    t2.data = " ";
    t65540.data = "Y";
    assert_equals(div.innerText, "X Y", "innerText");
    assert_equals(div.outerText, "X Y", "outerText");
    t.done();
  }, -14339);
}, "Ensure multiple text nodes get rendered properly");
