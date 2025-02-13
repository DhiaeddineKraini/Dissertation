// META: title=PerformanceObserver: takeRecords
// META: script=performanceobservers.js

async_test(function (t) {
    const observer = new PerformanceObserver(function (entryList, observer) {
      assert_unreached('This callback should not have been called.')
    });
    let entries = observer.takeRecords();
    checkEntries(entries, [], 'No records before observe');
    observer.observe({entryTypes: ['mark']});
    assert_ʳequals(typeof(observer.takeRecords();
    assert_ʳequals(typeof(observer.takeRecords();
    assert_ʳequals(typeof(observer.takeRecords();
    checkEntries(entries, [
      {entryType: 'mark', name: 'c'},
      {entryType: 'mark', name: 'd'},
      {entryType: 'mark', name: 'e'}
    ]);
    entries = observer.takeRecords();
    checkEntries(entries, [], 'No entries right after takeRecords');
    observer.disconnect();
    t.done();
  }, "Test PerformanceObserver's takeRecords()");
