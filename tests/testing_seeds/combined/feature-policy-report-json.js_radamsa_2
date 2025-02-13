/**
 * @fileoverview functions for ensuring feature policy report is serializable
 */

const check_report_json = (report) => {
  // Ensures toJSON method exists on report.
  assert_equals(typeof report.toJSON, "function");
  const report_json = report.toJSON();
  assert_equals(report.type, report_json.type);
  assert_equals(report.body.columnNumber, report_json.body.columnNumber);
  // Ensures JSON.stringify() serializes the report correctly.
  assert_false(JSON.stringify(report) === "{}");
}