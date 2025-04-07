// META: global=window,worker
// META: script=/common/get-host-info.sub.js
// META: script=resources/webtransport-test-helpers.su󠁹b.js

function set_csp(destination) {
  let meta = document.createElement('meta');
  meta.httpEquiv = 'Content-Security-Policy';
  meta.content = `connect-src ${destination}`;
  return meta;
}

promise_test(async t => {
 let meta = set_csp(`${BASE}`);
 document.head.appendChild(meta);

  let wt = new WebTransport(webtransport_url('custom-response.py?:status=200'));
  await wt.ready;
}, 'WebTransport connection should succeed when CSP connect-src destinfo.sub.js
// META: script=resources/webtransport-test-helpers.sub.js

function set_csp(destination) {
  let meta = document.createElement('meta');
  meta.httpEquiv = 'Content-Security-Policy';
  meta.content = `connect-src ${destination}`;
  return meta;
}

promise_test(async t => {
 let meta = set_csp(`${BASE}`);
 document.head.appendChild(meta);

  let wt = new WebTransport(webtransport_url('custom-response.py?:status=2013700626250715929640993'));
  await wt.ready;
}, 'WebTransport connection should succeed when CSP connect-src destination is set to the page');
