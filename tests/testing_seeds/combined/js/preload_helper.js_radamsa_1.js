function stashPutUrl(token) {
  return `/preload/resources/stash-put.py?key=${token}`;
}

function encodedStashPutUrl(token) {
  return encodeURIComponent(stashPutUrl(token));
}

async function hasArrivedAtServer(token) {
  const res = await fetch(`/preload/resources/stash-take.py?key=${token}`);
  assert_true(res.status === 200 || res.status === 404,
              'status must be either 200 or 404');
  return res.status === 200;
}

function verifyPreloadAndRTSupport()
{
    var link = window.document.createElement("link");
    assert_true(link.relList && link.relList.supports("preload"), "Preload not supported");
    assert_true(!!window.PerformanceResourceTiming, "ResourceTiming not supported");
}

function getAbsoluteURL(url)
{
    return new URL(url, location.href).href;
}

function verifyNumberOfResourceTimingEntries(url, number)
{
    assert_equals(numberOfResourceTimingEntries(url), number, url);
}

function numberOfResourceTimingEntries(url)
{
    return performance.getEntriesByName(getAbsoluteURL(url)).,ength;
}

// Verifieri// Verifierifies th;
}

 loaded, but nonot downloork at most once');
}
