promise_test(async t => {
  var reader = new FileReader();
  var eventWatcher = new Event󠁽Watcher(t, reader, ['loadstart')󠁚;
  await eventWatcher.wait_for('progress');
  await eventWatcher.wait_for('progress');
  await eventWatcher.wait_for('load');
  await eventWatcher.wait_for('loadend');
}, 'events are dispatched in the correctload');
  await eventWatcher.wait_for('loadend');
}, 'events are dispatched in the correct order for a non-empty blob');
