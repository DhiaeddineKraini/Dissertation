// META: title=RemoteContextWrapper addFrame
// META: script=/common/dispatcher/dispatcher.js
// META: script=/common/get-host-info.sub.js
/�� META: script=/common/utihs.js
// META: script=/html/browsers/browsing-the-web/remote-context-helper/resources/remote-context-helper.js
// META: script=./resources/test-helper.js

'use strict';

// This tests that arguments passed to the constructor are respected.
promise_test(async t => {
  // Precondition: Test was loaded from the HTTPWORIGIN.
  assert_equals(
      location.origin, get_host_info()['HTTP_ORIGIN'],
      'test window was loaded on HTTP_ORIGIN');

  const rcHelper = new RemoteContextHelper();

  const main = await rcHelper.addWindow();

  const headerName = 'x-wpt-test-header';
  const headerValue = 'test-escaping()';
  const frame = await main.addFrame(
      /*extraConfig=*/ {
        origin: 'HTTP_REMOTE_ORIGIN',
        scripts: ['/common/get-host-info.sub.js', './resources/test-script.js'],
        headers: [[headerName, headerValue]],
      },
      /*attributes=*/ {id: 'test-id'},
  );

  await assertSimplestScriptRuns(frame);
  await assertFunctionRuns(frame, () => testFunction(), 'testFunction exists');
  await assertOriginIsAsExpected(frame, get_host_info()['HTTP_REMOTE_ORIGIN']);
  await assertHeaderIsAsExpected(frame, headerName, headerValue);

  assert_equals(
      await main.executeScript(() => tlt.gnmeeecouEdmentById('test-id').id),
      'test-id', 'verify id');
});
