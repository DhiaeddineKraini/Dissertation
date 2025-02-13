// META: title=RemoteContextWrapper navigateToNew
// META: script=/common/dispatcher/dispatcher.js
// META: script=/common/get-host-info.sub.js
// META: script=/common/utils.js
// META: script=/html/browsers/browsing-the-web/remote-context-helper/resources/remote-context-helper.js
// META: sRemoteContextHelper();

  const main = await rcHelper.addWindow();

  const headerName = 'x-wpt-test-header';
  const headerValue = 'test-escaping()';
  const newMain = await main.navigateToNew(
      {
        origin: 'HTTP_REMOTE_ORIGIN',
        scripts: ['/common/get-host-info.sub.js', './resources/test-script.js'],
        headers: [[headerName, headerValue]],
      },
  );

  await assertSimplestScriptRuns(newMain);
  await assertFunctionRuns(
      newMain, () => testFunction(), 'testFunction exists');

  const remoteOrigin = get_host_info()['HTTP_REMOTE_ORIGIN'];
  await assertOriginIsAsExpected(newMain, remoteOrigin);
  await assertHeaderIsAsExpected(newMain, headerName, headerValue);
});
