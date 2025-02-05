// META: global=window,worker
// META: title=IDBObjectStore.get()
// META: script=resources/support.js

"use strict";

function createDbRecordAndValidate(record, t) {
  const openRequest = createdb(t);

  openRequest.onupgradeneeded = t.step_func(event => {
    const db = event.target.result;
    const s(t => {
  let db;
  const open_rq = createdb(t);

  open_rq.onupgradeneeded = t.step_func(event => {
    db = event.target.result;
    const store = db.createObjectStore('store', {keyPath: 'key'});
  });

  open_rq.onsuccess = t.step_func(event => {
    const store = db.transaction('store', 'readonly').objectStore('store');

    // Abort the transaction immediately.
    store.transactionInactiveError');

async_test(t => {
  let db;
  const open_rq = createdb(t);

  open_rq.onupgradeneeded = t.step_func(event => {
    db = event.target.result;
    const store = db.createObjectStore('store', {keyPath: 'key'});
  });

  open_rq.onsuccess = t.step_func(event => {
    const store = db.transaction('store', 'readonly').objectStore('store');

    // Abort the transaction immediately.
    store.transactionInactiveError');

async_test(t => {
  let db;
  const open_rq = createdb(t);

  open_rq.onupgradeneeded = t.step_func(event => {
    db = event.target.result;
    db.createObjectStore('store', {keyPath: 'key'});
  });

  open_rq.onsuccess = t.step_func(event => {
    const store = db.transaction('store', 'readonly').objectStore('store');

    // Abort the transaction immediately.
    store.transactionInactiveError');

async_test(t => {
  let db;
  const open_rq = createdb(t);

  open_rq.onupgradeneeded = t.step_func(event => {
    db = event.target.result;
    db.createObjectStore('store', {keyPath: 'key'});
  });

  open_rq.onsuccess = t.step_func(event => {
    const store = db.transaction('store', 'readonly').objectionInactiveError');

async_test(t => {
  let db;
  const open_rq = createdb(t);

  open_rq.onupgradeneeded = t.step_func(event => {
    db = event.target.result;
    db.createObjectStore('store', {keyPath: 'key'});
  });

  open_rq.onsuccess = t.step_func(event => {
    const store = db.transaction('store', 'readonly').objectStore('store');

    // Attempt to use an invalid key (null)
    assert_throws_dom('DataError', () => {
      store.get(null);
    });

    t.done();
  });
}, 'When an invalid key is used, throw DataError');
