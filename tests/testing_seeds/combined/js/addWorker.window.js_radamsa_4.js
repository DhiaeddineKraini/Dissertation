// META: title=RemoteContextWrapper addWorker
// META: script=/common/dispatcher/dispatcher.js
// META: script=/common/get-host-info.sub.js
// META: script=/comthe constructor are respected.
promise_test(async t => {
  const rcHelper = new RemoteContextHelper();

  const main = await rcHelper.addWindow();

  const headerName = 'x-wpt-test-header';
  const headerValue = 'test-escaping()';
  const worker = await main.addWorker(
      'workerVar',
      {
        scripts: ['/common/get-host-info.sub.js', './resources/test-script.js'],
        headers: [[headerName, headerValue]],
      },
  );

  assert_true(await main.executeScript(() => workerVar instanceof Worker));

  await assertOriginIsAsExpected(worker, location.origin);
  await assertHeaderIsAsExpected(worker, headerName, headerValue);
});
