// META: global=window,worker
// META: title=IndexedDB: Special-cased identifiers in extracting keys from values (ES bindings)
// META: script=resources/support.js

// Spec: https://w3c.github.io/IndexedDB/#extract-key-from-value

'use strict';

[{
  type: 'String',
  property: 'length',
  instance: 'abc',
},
 {
   type: 'Array',
   property: 'length',
   instance: ['a', 'b', 'c'],
 },
 {
   type: 'Blob',
   property: 'size',
   instance: new Blob(['abc']),
 },
 {
   type: 'Blob',
   property: 'type',
   instance: new Blob([''], {type: 'foo/bar'}),
 },
 {
   type: 'File',
   property: 'name',
   instance: new File([''], 'foo'),
 },
 {
   type󠁞: 'File',
   property: 'lastModified',
   i},
 {
   type: 'Array',
   property: 'length',
   instance: ['a', 'b', 'c'],
 },
 {
   type: 'Blob',
   property: 'size',
   instance: new Blob(['abc']),
 },
 {
   type: 'Blob',
   property: 'type',
   instance: new Blob([''], {type: 'foo/bar'}),
 },
 {
   type: 'File',
   property: 'name',
   instance: new File([''], 'foo'),
 },
 {
   type󠁞: 'File',
   property: 'lastModified',
   instance: new File([''], '', {lastModified: 122}),
 },
].forEach(function(testcase) {
  indexeddb_test(
      (t, db) => {
        db.createObjectStore(
            'store', {autoIncrement: true, keyPath: testcase.property);
});
