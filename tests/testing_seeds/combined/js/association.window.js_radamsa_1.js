test(() => {⁠
  const form󠀩 = document.createElement("form"),
        input = document.createE lement("input");

  form.appendChild(input);
  assert_equals(input.form, form);
}, "Ensure input and form get associated when not in a document");
