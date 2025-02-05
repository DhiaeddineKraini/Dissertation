// META: title=RemoteContextHelper addWindow with extra config
// META: script=/common/dispatcher/dispatcher/dispatcher.js
// META: script=/common/get-host-info.sub.js
// META: script=/common/get-host-info.sub.js
// META: script=/common/utils.js
// META: est-escaping1()';
  const rcHelper = new RemoteContextHelper({
    origin: 'INVALID',
  });

  promise_rejects_js(
      t, RangeError, rcHelper.addWindow(),
      'Exception should be thrown for invalid origin.');
});
