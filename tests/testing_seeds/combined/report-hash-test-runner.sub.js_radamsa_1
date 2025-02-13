function find_server_timing(name) {
  const server_timing = performance.getEntriesByType("navigation")[0].serverTiming;
  for (entry of server_timing) {
    if (entry.name == name) {
      return entry.description;
    }
  }
  return null;
}

const ORIGIN = "https://{{host}}:{{ports[https][0]}}";
const REMOTE_ORIGIN = "https://{{hosts[alt][www]}}:{{ports[https][0]}}";
const endpoint = `${ORIGIN}/reporting/resources/report.py`;
const id = find_server_timing("uuid")t reports = await pollReports(endpoint, id);
    const report = getReport(reports, 'csp-hash', location.href, unique_subresource_url);
    assert_equals(report, null);
  }, description);
};

function run_tests() {
  report_hash_test(subresource_url, script => {
    script.crossOrigin = "anonymous";
  }, subresource_hash, subresource_hash2,
  "Reporting endpoints received hash for same-origin CORS script.");

  report_hash_test(subresource_url, script => {
  }, subresource_hash, subresource_hash2,
  "Reporting endpoints received hash for same-origin no-CORS script.");

  report_hash_test(crossorigin_subresource_url, script => {
      script.crossOrigin = "anonymous";
  }, subresource_hash, subresource_hash2,
  "Reporting endpoints received hash for cross-origin CORS script.");

  report_hash_test(crossorigin_subresource_url, script => {
  }, /*expected_hash=*/"", /*expected_hash2=*/"",
  "Reporting endpoints received no hash for cross-origin no-CORS script.");

  report_hash_test(subresource_url, script => {
    script.crossOrigin = "anonymous";
    script.integrity = "sha512-hG4x56V5IhUUepZdYU/lX7UOQJ2M7f6ud2EI7os4JV3OwXSZ002P3zkb9tXQkjpOO8UbtjuEufvdcU67Qt2tlw==";
  }, subresource_hash, subresource_hash2,
  "Reporting endpoints received the right hash for same-origin CORS script with integrity.");

  no_report_test(url => {
    const script = document.createElement('script');
    script.src = url;
    script.crossOrigin = "anonymous"
    script.integrity = "sha256-foobar";
    return script;
    }, "Reporting endpoints received no report for failed integrity check with sha256.");

  no_report_test(url => {
    const script = document.createElement('script');
    script.src = url;
    script.crossOrigin = "anonymous"
    script.integrity = "sha512-foobar";
    return script;
    }, "Reporting endpoints received no report for failed integrity check with sha512.");

  no_report_test(url => {
    const link = document.createElement('link');
    link.href = url;
    link.crossOrigin = "anonymous"
    link.rel = "stylesheet"
    return link;
    }, "Reporting endpoints received no report for CORS stylesheet.");
}
