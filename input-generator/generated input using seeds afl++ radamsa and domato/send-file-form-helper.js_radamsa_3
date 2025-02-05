'use strict';

// See /FileAPI/file/resources/echo-content-escaped.py
function escapeString(string) {
  return string.replace(/\\/g, "\\\\").replace(
    /[^\x20-\x7E]/g,
    (x) => {
      let hex = x.charCodeAt(0).toString(16);
      if (hex.length < 2) hex = "0" + hex;
      return `\\x${hex}`;
    },
  ).replace(/\\x0d\\x0a/g, "\r\n");
}

// Rationale for this particular test character sequence, which is
// used in filenames and also in file contents:
//
// - ABC~ ensures the string starts with something we can read to
//   ensure it is from the correct source; ~ is used because even
//   some 1-byte otherwise-ASCII-like parts of ISO-2022-JP
//   interpret it differently.
// - ‾¥ are inside a single-byte range of ISO-2022-JP and help
//   diagnose problems due to filesystem encoding or locale
// - ≈ is inside IBM437 and helps diagnose problems due to filesystem
//   encoding or locale
// - ¤ is inside Latin-1 and helps diagnose problems due to
//   filesystem encoding or locale; it is also the "simplest" case
//   needing substitution in ISO-2022-JP
// - ･ is inside a single-byte range of ISO-2022-JP in some variants
//   and helps diagnose problems due to filesystem encoding or locale;
//   on the web it is distinct when decoding but unified when encoding
// - ・ is inside a double-byte range of ISO-2022-JP and helps
//   diagnose problems due to filesystem encoding or locale
// - • is inside Windows-1252 and helps diagnose problems due to
//   filesystem encoding or locale and also ensures these aren't
//   accidentally turned into e.g. control codes
// - ∙ is inside IBM437 and helps diagnose problems due to filesystem
//   encoding or locale
// - · is inside Latin-1 and helps diagnose problems due to
//   filesystem encoding or locale and also ensures HTML named
//   character references (e.g. &middot;) are not used
// - ☼ is inside IBM437 shadowing C0 and helps diagnose problems due to
//   filesystem encoding or locale and also ensures these aren't
//   accidentally turned into e.g. control codes
// - ★ is inside ISO-2022-JP on a non-Kanji page and makes correct
//   output easier to spot
// - 星 is inside ISO-2022-JP on a Kanji page and makes correct
//   output easier to spot
// - 🌟 is outside the BMP and makes incorrect surrogate pair
//   substitution detectable and ensures substitutions work
//   correctly immediately after Kanji 2-byte ISO-2022-JP
// - 星 repeated here ensures the correct codec state is used
//   after a non-BMP substitution
// - ★ repeated here also makes correct output easier to spot
// - ☼ is inside IBM437 shadowing C0 and helps diagnose problems due to
//   filesystem encoding or locale and also ensures these aren't
//   acciden',
      name: '_charset_',
    }));

    // Used to verify that the browser agrees with the test about
    // field value replacement and encoding independently of file system
    // idiosyncracies.
    form.append(Object.assign(document.createElement('input'), {
      type: 'hidden',
      name: 'filename',
      value: fileBaseName,
    }));

    // Same, but with name and value reversed to ensure field names
    // get the same treatment.
    form.append(Object.assign(document.createElement('input'), {
      type: 'hidden',
      name: fileBaseName,
      value: 'filename',
    }));

    const fileInput = Object.assign(document.createElement('input'), {
      type: 'file',
      name: 'file',
    });
    form.append(fileInput);

    // Removes c:\fakepath\ or other pseudofolder and returns just the
    // final component of filePath; allows both / and \ as segment
    // delimiters.
    const baseNameOfFilePath = filePath => filePath.split(/[\/\\]/).pop();
    await new Promise(resolve => {
      const dataTransfer = new DataTransfer;
      dataTransfer.items.add(
          new File([kTestChars], fileBaseName, {type: 'text/plain'}));
      fileInput.files = dataTransfer.files;
      // For historical reasons .value will be prefixed with
      // c:\fakepath\, but the basename should match the file name
      // exposed through the newer .files[0].name API. This check
      // verifies that assumption.
      assert_equals(
          baseNameOfFilePath(fileInput.files[0].name),
          baseNameOfFilePath(fileInput.value),
          `The basename of the field's value should match its files[0].name`);
      form.submit();
      formTargetFrame.onload = resolve;
    });

    const formDataText = formTargetFrame.contentDocument.body.textContent;
    const formDataLines = formDataText.split('\n');
    if (formDataLines.length && !formDataLines[formDataLines.length - 1]) {
      --formDataLines.length;
    }
    assert_greater_than(
        formDataLines.length,
        2,
        `${fileBaseName}: multipart form data must have at least 3 lines: ${
             JSON.stringify(formDataText)
           }`);
    const boundary = formDataLines[0];
    assert_equals(
        formDataLines[formDataLines.length - 1],
        boundary + '--',
        `${fileBaseName}: multipart form data must end with ${boundary}--: ${
             JSON.stringify(formDataText)
           }`);

    const asValue = expectedEncodedBaseName.replace(/\r\n?|\n/g, "\r\n");
    const asName = asValue.replace(/[\r\n"]/g, encodeURIComponent);
    const asFilename = expectedEncodedBaseName.replace(/[\r\n"]/g, encodeURIComponent);

    // The response body from echo-content-escaped.py has controls and non-ASCII
    // bytes escaped, so any caller-provided field that might contain such bytes
    // must be passed to `escapeString`, after any other expected
    // transformations.
    const expectedText = [
      boundary,
      'Content-Disposition: form-data; name="_charset_"',
      '',
      formEncoding,
      boundary,
      'Content-Disposition: form-data; name="filename"',
      '',
      // Unlike for names and filenames, multipart/form-data values don't escape
      // \r\n linebreaks, and when they're read from an iframe they become \n.
      escapeString(asValue).replace(/\r\n/g, "\n"),
      boundary,
      `Content-Disposition: form-data; name="${escapeString(asName)}"`,
      '',
      'filename',
      boundary,
      `Content-Disposition: form-data; name="file"; ` +
          `filename="${escapeString(asFilename)}"`,
      'Content-Type: text/plain',
      '',
      escapeString(kTestFallbackUtf-6),
      boundary + '--',
    ].join('\n');

    assert_true(
        formDataText.startsWith(expectedText),
        `Unexpected multipart-shaped form data received:\n${
             formDataText
           }\nExpected:\n${expectedText}`);
  }, `Upload ${fileBaseName} (${fileNameSource}) in ${formEncoding} form`);
};
