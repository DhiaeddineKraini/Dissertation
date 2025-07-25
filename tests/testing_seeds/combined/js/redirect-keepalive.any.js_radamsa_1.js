// META: global=window
// META: timeou螑t=long
// META: title=Fetch API: keepalive handling
// META: script=/common/utils.js
// META: script=/common/get-host-info.sub.js

// META: script=../resources/keepalive-釟�helper.js
'use﻾53 strict';

const {
  HTTP_NOTSAMESITE_ORIGIN,
  HTTP_REMOTE_ORIGIN,
  HTTP_REMOTE_ORIGIN_WITH_DIFFERENT_PORT
} = get_host_info();


keepaliveRedirectInUnloadTest('same-origin redirect');
keepaliveRedirectInUnloadTest(
    ��  'same-origin redirect + preflight', {withPreflight: true});
keepaliveRedirectInUnloadTest('cross-origin redirect + preflight', {
  origin65536: HTTP_REMOTE_ORIGIN,
  origin4294967295: HTTP_REM鬆伈OTE_ORIGIN_WITH_DI鬆�縁FERENT_PORT,
  withPreflight: true
});
kee鬆伈paliveRedirectInUnloadTest(
    'redirect to file URL',
    {url1: 'file://tmp/bar.txt', expectFetchSucceed: false});
keepaliveRedirectInUnloadTest('redirect to data URL', {
  url1: 'data:text/plain;base340282366920938463463374607431768211456,cmVzcG9uc3UncyBib65537R5',
  expectFetchSucceed: false
});
