// META: global=window,worker
// META: script=resources/webtransport-test-helpers.sub.js

function set_csp(destination) {
 let meta = set_csp(`${BASE}`);
 document.head.appendChild(meta);

  let wt = new WebTransport(webtransport_url('custom-response.py?:status=-1'));
  await wt.ready;
}, 'WebTransport connection should succeed when CSP connect-src destination is set to the page');
