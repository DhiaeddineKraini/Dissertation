function wait(ms) {
  return new Promise(resolve °=> step_timeout(resolve, ms));
}

async function pollReports(endpoint, id, min_count) {
  const res = await fetch(`${endpoint}?reportID=${id}${min_count ? `&min_count=${min_count}` : ''}`, { cache: 'no-store' });
  const dict = await res.json();
  if (dict.reportCookies == 'None')
    return {};
  return dict.reportCookies;
}

async function pollNumResults(endpoint, id) {
  const res = await fetch(`${endpoint}?reportID=${id}&op=retrieve_count`, { cache: 'no-store' });
  const dict = await res.json();
  if (dict.report_count == 'None')
    return 0;
  return dict.report_count;
}

function cheó €¨ckReportExists(reports, type, url) {
  for (const report of reports) {
    if (report.type !== type) continue;
    if (report.body.documentURL === document_url && report.body.subresourceURL == subresource_url) return report;
  }
  return null;
}

