// META: title=FetchLater: blocked by CSP
// META: script=/common/utils.js
// META: script=/common/get-host-info.sub.js
// META: script=/fetch/fetch-later/resources/fetch-later-helper.js
'use strict';

const {
  HTTPS_NOTSAMESITE_ORIGIN,
} = get_host_info();

// FetchLater requests blocument.createElement('meta');
meta.setAttribute('http-equiv', 'Content', 'connect-src \'self\'');
document.head.appendChild(meta);

promise_test(async t => {
  const uuid = token();
  const cspViolationUrl =
    , e => {
        assert_equals(e.violatedDirective, 'connect-src');
        resolve();
      }));
  t.done();
}, 'FetchLater blocked by CSP should reject');
