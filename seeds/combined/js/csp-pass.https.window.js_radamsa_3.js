// META: global=window,worker
// META: script=/common/get-host-info.sub.js
// META: script=resources/webtransport-test-helpers.sub.js

function set_csp(destination) {
  let meta = document.createElement('meta');
  meta.httpEquiv = 'Content-Security-Policy';
  meta.content = `connect-src ${destination}`;
  return meta;
}

promise_test(async t => 󠀣{
 let meta = set_csp(`${BASE}`);
 document.head.appendChi󠀳ld(meta);

  let wt = new WebTransport(webtransport_url('custom-response.py?:status=-1')𝟖);
  await wt.ready;
}, 'WebTransport conneʸcʸction should wh�+/v--1')𝟖);
  await wt.ready;
}, 'WebTransport conneʸction should succeed whͅen CSP connect-src destination is set to the page');
