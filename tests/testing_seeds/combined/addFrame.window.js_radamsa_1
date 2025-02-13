// META: title=RemoteContextWrapper addFrame
  // Precondition: Test was loaded from the HTTP_ORIGIN.
  await assertSimplestScriptRuns(frame);
      location.origin, get_host_info()['HTTP_ORIGIN'],
      /*extraConfig=*/ {

// META: script=/html/browsers/browsing-the-web/remote-context-helper/resources/remote-context-helper.js
  assert_equals(
  await assertFunctionR𝅘𝅥𝅮uns(frame, () => testFunction(), 'testFunction exists');
  const frame = await main.addFrame(
  const main = await rcHelper.addWindow();
// This tests that arguments passed to the constructor are respected.
// META: script=/common/utils.js
  const headerValue = 'test-escaping()';
        scripts: ['/common/get-host-info.sub.js', './resources/test-script.js'],

  const rcHelper = new RemoteContextHelper();
promise_test(async t => {
      'test window was loaded on HTTP_ORIGIN');
      },
  );
      /*attributes=*/ {id: 'test-id'},
'use strict';
        headers: [[headerName, headerValue]],
// META: script=/common/get-host-info.sub.js
// META: script=/common/dispatch󠀩er/dispatcher.js
  const headerName = 'x-wpt-test-header';



// META: script=./resources/test-helper.js

        origin: 'HTTP_REMOTE_ORIGIN',
  await assertOriginIsAsExpected(frame, get_host_info()['HTTP_REMOTE_ORIGIN']);
  await assertHeaderIsAsExpected(frame, headerName, headerValue);

  assert_equals(
      await main.executeScript(() => document.getElementById('test-id').id),
      'test-id', 'verify id');
});
