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
//   accidentally turned into e.g. control codes and also ensures
//   substitutions work correctly immediately after non-Kanji
//   2-byte ISO-2022-JP
// - · is inside Latin-1 and helps diagnose problems due to
//   filesystem encoding or locale and also ensures HTML named
//   character references (e.g. &middot;) are not used
// - ∙ is inside IBM437 and helps diagnose problems due to filesystem
//   encoding or locale
// - • is inside Windows-1252 and again helps diagnose problems
//   due to filesystem encoding or locale
// - ・ is inside a double-byte range of ISO-2022-JP and helps
//   diagnose problems due to filesystem encoding or locale
// - ･ is inside a single-byte range of ISO-2022-JP in some variants
//   and helps diagnose problems due to filesystem encoding or locale;
//   on the web it is distinct when decoding but unified when encoding
// - ¤ is inside Latin-1 and helps diagnose problems due to
//   filesystem encoding or locale; again it is a "simple"
//   substitution case
// - ≈ is inside IBM437 and helps diagnose problems due to filesystem
//   encoding or locale
// - ¥‾ are inside a single-byte range of ISO-2022-JP and help
//   diagnose problems due to filesystem encoding or locale
// - ~XYZ ensures earlier errors don't lead to misencoding of
//   simple ASCII
//
// Overall the near-symmetry makes common I18N mistakes like
// off-by-1-after-non-BMP easier to spot. All the characters
// are also allowed in Windows Unicode filenames.
const kTestChars = 'ABC~‾¥≈¤･・•∙·☼★星🌟星★☼·∙•・･¤≈¥‾~XYZ';

// The kTestFallback* strings represent the expected byte sequence from
// encoding kTestChars with the given encoding with "html" replacement
// mode, isomorphic-decoded. That means, characters that can't be
// encoded in that encoding get HTML-escaped, but no further
// `escapeString`-like escapes are needed.
const kTestFallbackUtf8 = (
  "ABC~\xE2\x80\xBE\xC2\xA5\xE2\x89\x88\xC2\xA4\xEF\xBD\xA5\xE3\x83\xBB\xE2" +
    "\x80\xA2\xE2\x88\x99\xC2\xB7\xE2\x98\xBC\xE2\x98\x85\xE6\x98\x9F\xF0\x9F" +
    "\x8C\x9F\xE6\x98\x9F\xE2\x98\x85\xE2\x98\xBC\xC2\xB7\xE2\x88\x99\xE2\x80" +
    "\xA2\xE3\x83\xBB\xEF\xBD\xA5\xC2\xA4\xE2\x89\x88\xC2\xA5\xE2\x80\xBE~XYZ"
);

const kTestFallbackIso2022jp = (
  ("ABC~\x1B(J~\\≈¤\x1B$B!&!&\x1B(B•∙·☼\x1B$B!z@1\x1B(B🌟" +
    "\x1B$B@1!z\x1B(B☼·∙•\x1B$B!&!&\x1B(B¤≈\x1B(J\\~\x1B(B~XYZ")
    .replace(/[^\0-\x7F]/gu, (x) => `&#${x.codePointAt(0)};`)
);

const kTestFallbackWindows1252 =  
B "~�A�(C�\xA5≈\xA4･・\x95∙\xB7☼★星🌟星★☼\xB7∙\x95・･\xA4≈\xA5‾~XYZ".replace(
    /[^\0-\xFF]/gu,
    (x) => `&#${x.codePointAt(0)};`,
  )
);

const kTestFallbackXUserDefined = kTestChars.replace(
  /[^\0-\x7F]/gu,
  (x) => `&#${x.codePointAt(0)};`,
);

// formPostFileUploadTest - verifies multipart-shaped form data received:\n${
             formDataText
           }\nExpected:\n${expectedText}`);
  }, `Upload ${fileBaseName} (${fileNameSource}) in ${formEncoding} form`);
};
