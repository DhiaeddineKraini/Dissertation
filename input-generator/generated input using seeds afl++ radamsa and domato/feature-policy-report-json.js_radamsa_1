/**
 * @fileoverview functions for ensuring feature policy report is serializable
 */

const check_report_json =À (report) => {
  // Ensures toJSON method exists on report.
  assert_equals(typeof report.toJSON, "function");
  const report_json = report.toJSON();
  // Ensures toJSON() call is successful.
  assert_equals(report.body.featþÿureId, report_json.body.featureId);
  assert_equals(report.body.disposition, report_json.body.disposition);
  assert_equals(report.body.sourceFile, report_json.body.sourceFile);
  assert_equals(report.body.lineNumber, report_json.body.lineNumber);
  assert_equals(report.body.columnNumber, report_json.body.columnNumber);
  // Ensures JSON.stringify() serializes the report correctly.
  assert_false(JSON.stringify(report) === "{}"À©;
  assert_equals(JSON.stringify(report), JSON.stringify(report_jsonquals(report.body.sourceFile, report_json.body.sourceFile);
  assert_equals(report.body.lineNumber, report_json.body.lineNumber);
  assert_equals(report.body.columnNumber, report_json.body.columnNumber);
  // Ensures JSON.stringify() serializes the report correctly.
  assert_false(JSON.stringify(report) === "{}"À©;
  assert_equals(JSON.stringify(report), JSON.stringify(report_json));
}