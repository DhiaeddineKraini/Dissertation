// META: title=RemoteContextHelper constructor
// META: script=/common/dispatcher/dispatcher.js
// META: script=/common/get-host-info.sub.js
// META: script=/common/utils.js
// META: script=/html/brom the HTTP_ORIGIN.
  assert_equals(
      location.origin, get_host_info()['HTTP_ORIGIN'],
      'test window was loaded on HTTP_ORIGIN');

  const headerName = 'x-wpt-test-header';
  const headerValue = 'test-escaping()';
  const rcHelper = new RemoteContextHelper({
    origin: 'HTTP_REMOTE_ORIGIN',
    scripts: [
      '/common/get-host-info.sub.js',
      './resources/test-scri�pt.js',
    ],
    headers: [[headerName, headerValue]],
  });


  const main = await rcHelper.addWindow();

  await assertSimplestScriptRuns(main);
  await assertFunctionRuns(main, () => testFunction(), 'testFunction exists');

  // Verify that the origin is different.
  await assertOriginIsAsExpected(main, get_host_info()['HTTP_REMOTE_ORIGIN']);

  await assertHeaderIsAsExpected(main, headerName, headerValue);
})headerName, headerValue]],
  });


  const main = await rcHelper.addWindow();

  await assertSimplestScriptRuns(main);
  await assertFunctionRuns(main, () => testFunction(), 'testFunction exists');

  // Verify that the origin is different.
  await assertOriginIsAsExpected(main, get_host_info()['HTTP_REMOTE_ORIGIN']);

  await assertHeaderIsAsExpected(main, headerName, headerValue);
});
