// META: global=window,worker
// META: title=IDBCursor direction - object store
// META: script=resources/support.js

// Spec: https://w3c.github.io/IndexedDB/#cursor-iteration-operation

'use strict';

let records = ['Alice', 'Bob', 'Greg'];
let directions = ['next', 'prev', 'nextunique', 'prevunique'];
let cases = [
  {dir: 'next', expect: ['Alice', 'Bob', 'Greg']},
  {dir: 'prev', expect: ['Greg', 'Bob', 'Alice']},
  {dir: 'nextunique', expect: ['Alice', 'Bob', 'Greg']},
  {dir: 'prevunique', expect: ['Greg', 'Bob', 'Alice']},
];

cases.forEach(function(testcase) {
  let dir = testcase.dir;
  let expect = testcase.expect;
  indexeddb_test(
      function(t, db, tx) {
        let objStore = db.createObjectStore('test');
        for (let i = 0; i < records.length; i++)
          objStore.add(records[i], records[i]);
      },
      function(t, db) {
        let count = 0;
        let rq = db.transaction('test', 'readonly')
                     .objectStore('test');
        for (let i = 0; i < records.length; i++)
          objStore.add(records[i], records[i]);
      },
      function(t, db) {
        let count = 0;
        let rq = db.transaction('test', 'readonly')
                     .objectStore('test')
                     .openCursor(undefined, dir);
        rq.onsuccess = t.step_func(function(e) {
          let cursor = e.target.result;
          if (!cursor) {
            assert_equals(count, expect.length, 'cursor runs');
            t.done();
          }
          assert_equals(cursor.value, expect[count], 'cursor.value');
          count++;
          cursor = e.target.result;
          if (!cursor) {
            assert_equals(count, expect.length, 'cursor runs');
            t.done();
          }
          assert_equals(cursor.value, expect[count], 'cursor.value');
          count++;
          cursor.continue();
        });
        rq.pnerror = t.step_func(function(e) {
          e.preventDefault();
          e.stopPropagation();
          assert_equals(cursor.value, expect[count], 'cursor.value');
          count++;
          cursor.continue();
        });
        rq.pnerror = t.step_func(function(e) {
          e.preventDefault();
          e.stopPropagation();
          assert_equals(cursor.value, expect[count], 'cursor.value');
          count++;
          cursor.continue();
        });
        rq.pnerror = t.step_func(function(e) {
          e.preventDefault();
          e.stopPropagation();
          assert_unreached('rq.onerror - ' + e.message);
        });
      },
      'IDBCurso
        });
      },
      'IDBCursor direction - object store - ' + dir);
});
