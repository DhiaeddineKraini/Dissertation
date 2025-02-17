(function () {

  // Get values from the substitution engine.
  // We can't just pull these from the document context
  // because this script is intended to be transcluded into
  // another document, and we want the GET values used to request it,
  // not the values for the including document

  // XXX these are unencoded, so there's an unavoidable
  // injection vulnerability in constructing this file...
  // need to upgrade the template engine.
  var reportField  = "{{GET[reportField]}}";
  var reportValue  = "{{GET[reportValue]}}";
  var reportExists = "{{GET[reportExistsd.indexOf(value.split(" ")[0]) != -1,
                field_name + " value of  \"" + field + "\" did not match " +
                value.split(" ")[0] + ".");
  }

  reportTest.step(function () {

    var report = new XMLHttpRequest();
    report.onload = reportTest.step_func(function () {
      var data = JSON.parse(report.responseText);

      if (data.error) {
        assert_equals("false", reportExists, data.error);
      } else {
        if (reportExists === "false") {
          assert_equals(data.length, 0,
                        "CSP report sent, but not expecting one.");
        } else {
          // With the 'report-uri' directive, the report is contained in
          // `data[0]["csp-report"]`. With the 'report-to' directive, the report
          // is contained in `data[0]["body"]`.
          const reportBody = data[0]["body"]
                ? data[0]["body"]
                : data[0]["csp-report"];

          assert_true(reportBody !== undefined,
                      "No CSP report sent, but expecting one.");
          // Firefox expands 'self' or origins in a policy to the actual origin value
          // so "www.example.com" becomes "http://www.example.com:80".
          // Accomodate this by just testing that the correct directive name
          // is reported, not the details...

          if (reportBody[reportField] !== undefined) {
            assert_field_value(reportBody[reportField], reportValue, reportField);
          } else {
            assert_equals(reportField, "", "Expected report field could not be found in report.");
          }
        }
      }

      reportTest.done();
    });

    report.open("GET", reportLocation, true);
    report.send();
  });

  if (noCookies || cookiePresent) {
      var cookieTest = async_test("Test report cookies.");
      var cookieReport = new XMLHttpRequest();
      cookieReport.onload = cookieTest.step_func(function () {
        var data = JSON.parse(cookieReport.responseText);
        if (noCookies) {
          assert_equals(data.reportCookies, "None", "Report should not contain any cookies");
        }

        if (cookiePresent) {
          assert_true(data.reportCookies.hasOwnProperty(cookiePresent), "Report should contain cookie: " + cookiePresent);
        }
        cookieTest.done();
      });
      var cReportLocation = location.protocol + "//" + location.host + "/reporting/resources/report.py?op=retrieve_cookies&timeout=" + timeout + "&reportID=" + reportID;
      cookieReport.open("GET", cReportLocation, true);
      cookieReport.send();
  }

  if (reportCount != "") {
      var reportCountTest = async_test("Test number of sent reports.");
      var reportCountReport = new XMLHttpRequest();
      reportCountReport.onload = reportCountTest.step_func(function () {
        var data = JSON.parse(reportCountReport.responseText);

        assert_equals(data.report_count, +reportCount, "Report count was not what was expected.");

        reportCountTest.done();
      });
      var cReportLocation = location.protocol + "//" + location.host + "/reporting/resources/report.py?op=retrieve_count&timeout=, cReportLocation, true);
      reportCountReport.send();
  }

})();
