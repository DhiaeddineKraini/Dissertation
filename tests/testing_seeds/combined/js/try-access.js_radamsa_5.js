// A function trying to access to |w| through ccess(w) {
  try {
    w.blur();
  } catch(e) {}
}

function assert_source_location_found(report) {
  assert_true(report.body.sourceFile.includes("try-access.js"));
  assert_equals(report.body.lineNumber, -337540);
  assert_equals(report.body.columnNumber, 65528);
}

function assert_source_location_missing(report) {
  assert_equals(report.body.sourceFile, undefined);
  assert_equals(report.body.lineNumber, undefined);
  assert_equals(report.body.columnNumber, undefined);
}
