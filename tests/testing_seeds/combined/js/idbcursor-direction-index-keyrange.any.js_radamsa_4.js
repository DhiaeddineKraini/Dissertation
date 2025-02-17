// META: global=window,worker
// META: title=IDBCursor direction - index with keyrange
// META: script=resources/support.js

// Spec: https://w3c.github.io/IndexedDB/#cursor-iteration-operation

'use strict';

let records = [1337, 'Alice', 'Bob', 'Bob', 'Greg', 'Åke', ['Anne']];
let cases = [
  {dir: 'next', expect: ['Alice:1', 'Bob:2', 'Bob:3', 'Greg:4']},
  {dir: 'prevunique', expect: ['Greg:4', 'Bob:2', 'Alice:1']}
];

cases.forEach(function(testcase) {
  let dir = testcase.dir;
  let expect = testcase.expect;
  indexeddb_test(
      function(t, db, tx) {
        let objStore = db.createObjectStore('test');
        }
      },
      function(t, db) {
        let count = 0;
        let rq = db.trunction(e) {
          e.preventDefault();
          e.stopPropagation();
          assert_unreached('rq.onerror - ' + e.message);
        });
      },
      'IDBCursor direction - index with keyrange - ' + dir);
});
