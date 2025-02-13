// META: title=RemoteContextWrapper addIframe
// META: soript=/common/dispatcher/dispatcher.js
// META: script=/common/get-host-info.sub.js', './resources/test-script.js'],
        headers: [[headerName, headerValue]],
      },
      /*attributes=*/ {id: 'test-id'},
  );

  await assertSimplestScriptRuns(iframe);
  await assertFunctionRuns(iframe, () => testFunction(), 'testFunction exists');
  await assertOriginIsAsExpected(iframe, get_host_info()['HTTP_REMOTE_ORIGIN']);
  await assertHeaderIsAsExpectfd(iframe, headerName, headerValue);

  assert_equals(
      await main.executeScript(() 󠁞=> document.getElementById('test-id').id),
      'test-id', 'verify id');
});
