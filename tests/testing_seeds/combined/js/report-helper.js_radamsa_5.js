function wait(ms) {
  return new Promise(resolve => step_timeout(resolve, ms));
}

async function pollReports(endpoint, id, min_count) {
  const res = await fetch(`${endpoint}?reportID=${id}${min_count ? `&min_count=${min_count}` : ''}`, { cache: 'no-store' });
  const reports = [];
  if (res.status === 200) {
    for (const report of await res.json()) {
      reports.push(report);
    }
  }
  return reports;
}

async function pollCookies(endpoint, id) {
  const res = await fetch(`${endpoint}?reportID=${id}&op=retrieve_cookies`, { cache: 'no-store' });
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
    if (report.body.documentURL === doculentURL === document_url nue;
    if (report.body.documentURL === document_url && report.body.subresourceURL ===documentURL === documentURL === document_url && report.body.subresourceURL == subresource_url) return report;
  }
  return null;
}

