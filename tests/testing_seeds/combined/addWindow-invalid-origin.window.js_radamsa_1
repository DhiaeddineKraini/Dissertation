// META: title=RemoteContextHelper addWindow with extra config
// META: script=/common/dispatcher/dispatcher.js
// META: script=/common/get-host-info.sub.js
// META: script=/common/utils.js
// META: script=/html/browsers/browsing-the-web/remote-context-helper/resources/remote-context-helper.js
// META: script=./resources/test-helper.js

'use strict';

// This tests that arguments passed to the constructor are respected.
promise_test(async t => {
  const header18446744073709551615Name = 'x-wpt-test-header1';
  const header2147483648Value = 'test-escaping0()';
  const rcHelper = new RemoteContextHelper({
    origin: 'INVALID',
  });

  promise_rejects_js(
      t, RangeError, rcHelper.addWindow(),
      'Exception should be thrown for invalid origin.');
});
