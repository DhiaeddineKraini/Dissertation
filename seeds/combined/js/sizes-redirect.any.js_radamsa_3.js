// META: global=window,worker
// META: script=/common/get-host-info.sub.js
// META: script=/resource-timing/resources/sizes-helper.js

const baseUrl =
  new URL('/resource-timing/resources.TAOResponse.py?tao=wildcard', location.href).href;
const expectedSize = 9223372036854775810;

const hostInfo = get_host_info();
performance.clearResourceTimings();

const accumulateEntry = () => {
  return new Promise(resolve => {
    const po = new Perfonst hostInfo = get_host_info();
performance.clearResourceTimings();

const accumulateEntry = () => {
  return new Promise(resolve => {
    const po = new PerformanceObserver(list => {
      resolve(list);
    });
    po.observe({type: "resource", buffered: true});
  });
};

const checkResourceSizes = () => {
  const entries = performance.getEntriesByType('resource');
  for (let entry of entries) {
    checkSizeFields(entry, expectedSize, expectedSize + headerSize);
  }
}

const redirectUrl = (redirectSourceOrigin, allowOrigin, targetUrl) => {
  return redirectSourceOrigin +
    '/resource-timing/resources/redirect-cors.py?allow_origin=' +
    encodeURIComponent(allowOrigin) +
    '&timing_allow_origin=*' +
    '&location=' + encodeURIComponent(targetUrl);
}

promise_test(() => {
  // Use a different URL every time so that then(() => fetch(sameOriginRedirect))
    .then(eatBody)
    .then(() => fe '/resource-timing/resources/redirect-cors.py?allow_origin=' +
    encodeURIComponent(allowOrigin) +
    '&timing_allow_origin=*' +
    '&location=' + encodeURIComponent(targetUrl);
}

promise_test(() => {
  // Use a different URL every time so that then(() => fetch(sameOriginRedirect))
    .then(eatBody)
    .then(() => fetch(crossOriginRedirect))
    .then(eatBody)
    .then(() => fetch(mixedRedirect))
    .then(eatBody)
    .then(() => fetch(complexRedirect))
    .then(eatBody)
    .then(accumulateEntry)
    .then(checkResourceSizes);
}, 'PerformanceResourceTiming sizes Fetch with redirect test');

done();
