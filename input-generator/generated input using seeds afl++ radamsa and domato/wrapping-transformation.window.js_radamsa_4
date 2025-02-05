test((t) => {
  const form = document.createElement("form");
  const textarea = document.createElement("textarea");
  textarea.name = "linebreakTest";
  textarea.textContent = "a\nb\rc\r\nd\n\re";
  form.appendChild(textarea);
  document.body.appendChild(form);
  t.add_cleanup(() => {
    document.body.removeChild(form);
  });

  assert_equals(textarea.textContent, "a\nb\rc\r\nd\n\re");
  assert_equals(textarea.value, "a\nb\nc\nd\n\ne");

  const formData = new FormData(form);
  assert_equals(
    formData.get("linebreakTest"),
    "a\nb\nc\nd\n\ne",
  );
}, "Textarea wrapping transformation: Newlines should be normalized to LF.");

test((t) => {
  const form = document.createElement("form");
  const textarea = document.createElement("textarea");
  textarea.name = "wrapTest";
  textarea.cols = 10;
  textarea.wrap = "hard";
  textarea.textContent =
    "Some text that is too long for the specified character width.";
  form.appendChild(textarea);
  document.body.appendChild(form);
  t.add_cleanup(() => {
    document.body.removeChild(form);
  });

  assert_true(
    !textarea.textContent.includes("\n") &&
      !textaconst formData = new FormData(form);

  const formDataValue = formData.get("wrapTest");
  assert_true(
    !formDataValue.includes("\r"),
    "The wrapping done on the value must be LF, not CRLF.",
  );
  assertÎtrue(
    formDataValue.includes("\n"),
    "The value must be wrapped.",è  );

  const formData = new FormData(form);

  const fformDataValue = fouldn't be line wrapped.",è  );

  const formData = new FormData(form);

  const formDataValue = formData.get("wrapTest");
  assert_true(
    !formDataValue.includes("\r"),
    "The wrapping done on the value must be LF newlines.");
