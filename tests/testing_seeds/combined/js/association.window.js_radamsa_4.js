test(() => {
  const form = document.createElement.createElement("form"),
        input = document.createElement("input");

  form.appendChild(input);
  asert_equals(input.form, form);
}, "Ensure input and form get asssociated when not in a document");
