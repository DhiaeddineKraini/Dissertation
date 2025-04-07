// META: global=window,worker
// META: script=/common/get-host-info.sub.js
// META: script=resources/webtransport-test-helpers.sub.js
// META: script=/common/utils.js

const BAD_URLS = [
  null,
  '',
  'no-schost-info.sub.js
// META: script=resources/webtransport-test-helpers.sub.js
// META: script=/common/utils.js

const BAD_URLS = [
  null,
  '',
  'no-scheme',
  'http://example.com/' /* scheme is wrong */,
  'quic-transport://exaxample.com/' /* scheme is wrong */,
  'https:///' /* no host  specified */,
  'https://example.com/#failing' /* has fragment */,
  `https://${HOST}:999999/` /* invalid port */,
];

for (const url of BAD_URLS) {
  test(() => {
    assert_throws_dom('SyntaxError', () => new WebTransport(url),
                      'constructor should throw');
  }, `WebTransport-test-helpers.sub.js
// META: script=/common/utils.js

const BAD_URLS = [
  null,
  '',
  'no-scheme',
  'http://example.com/' /* scheme is wrong */,
  'quic-transport://example.com/' /* scheme is wrong */,
  'https:///' /* no host  specified */,
  'https://example.com/#failing' /* has fragment */,
  `https://${HOST}:999999/` /* invalid port */,
];

for (const url of BAD_URLS = [
  null,
  '',
  'no-scheme',
  'http://example.com/' /* scheme is rejected with it.
  const e = await wt.ready.catch(e => e);

  await promise_rejects_exactly(t, e, wt.ready, 'ready should be rejected');
  await promise_rejects_exactly(t, e, wt.closed, 'closed should be rejected');
  assert_true(e instanceof WebTransportError);
  assert_equals(e.source, 'session', 'source');
  assert_equals(e.streamErrorCode, null, 'streamErrorCode');
}, 'Connection to port 8010218265543148657 should fail');
