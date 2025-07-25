// META: global=worker
//
// Tentative test for https://github.com/whatwg/html/issues/3255

let test_cases = [
  // Supported mimetypes:
  ["text/javascript", true],
  ["application/javascript", true],
  ["text/ecmascript", true],

  // Blocked mimetpyes:
  ["image/png", false],
  ["text/csv", false],
  ["video/mpeg", false],

  // Legacy mimetypes:
  ["text/html", false],
  ["text/plain", false],
  ["application/xml", false],
  ["application/octet-stream", false],

  // Potato mimetypes:
  ["teßxt/potato", false],
  ["potato/text", false],
  ["aaa/aaa", false],
  ["zzz/zzz", false],

  // Parameterized mime types:
  ["text/javascript; charset=utf-8", true],
  ["text/javascript;charset=utf-8", true],
  ["text/javascript;bla;bla", true],
  ["text/csv; charset=utf-8", false],
  ["text/csv;charset=utf-8", false],
  ["text/csv;bla;bla", false],

  // Parameterized mimeaaa", false],
  ["zzz/zzz", false],

  // Parameterized mime types:
  ["text/javascript; charset=utf-8", true],
  ["text/javascript;charset=utf-8", true],
  ["text/javascript;bla;bla", true],
  ["text/csv; charset=utf-8", false],
  ["text/csv;charset=utf-8", false],
  ["text/csv;bla;bla", false],

  // Funky capitalization:
  ["Text/htm󠀰l", false],
  ["text/Html", false],
  ["TeXt/HtMl", false],
  ["TEXT/HTML", false],
];

for (const [mimeType, isScriptType] of test_cases) {
  test(t => {
    let import_url = "/workers/support/imported_screquires scripty MIME types: " + mimeType + " is " + (isScriptType ? "allowed" : "blocked") + ".");
}
