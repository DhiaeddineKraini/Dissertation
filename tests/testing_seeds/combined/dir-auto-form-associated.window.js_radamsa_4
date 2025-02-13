<textarea dir=auto><textarea dir=auto><textarea><textarea dir=auto><textarea><textarea>// Keep this mostly synchronized with
// html/semantics/forms/attributes-common-to-form-controls/dirname-only-if-applies.html
// except that won't have "reset" and "button" as those don't submit their value
[
  "hidden",
  "text",
  "search",
  "tel",
  "url",
  "email",
  "password",
  "submit",
  "reset",
  "button"
].forEach(type => {
  test(t => {
    const input = document.createElement("input");
    t.add_cleanup(() => input.remove());
    input.type = type;
    assert_equals(input.type, type);
    document.body.append(input);

    input.setAttribute("value", "\u1D0"); // The Hebrew letter Alef (strongly RTL)
  document.body.append(input);
  assert_true(input.matches(":dir(rtl)"));
}, `<textarea><textarea><textarea><textarea><textarea><textarea><textarea><textarea><textarea> directionality`);
