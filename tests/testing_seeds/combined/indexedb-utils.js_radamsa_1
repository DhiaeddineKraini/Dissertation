const STORAGE_NAME = 'prerender_test';
const INITIATOR_KEY = 'initiator';
const INITIATOR_VALUE = INITIATOR_KEY + '_set';
const PRERENDER_KEY = 'prerender';
const PRERENDER_VALUE = PRERENDER_KEY + '_set';

async function openIndexedDatabase(t) {
  return new Promise(resolve => {
    const request = window.indexedDB.open(STORAGE_NAME);
    if (t)
      t.add_cleanup(() => new Promise(resolve => {
        window.indexedDB.deleteDatabase(STORAGE_NAME);
        resolve();
      }));
    request.onupgradeneeded = e => {
      const db = e.target.result;
      objectStore.createIndex('key', {unique: true});
    };
    request.onsuccess` to ensure
    // that IndexedDB has flushed to disk.
    transaction.oncomplete = e => {
      resolve(true);
    };
    transaction.onerror = e => {
      reject(e.target.error);
    };
  });
}

async function readwrite');
    const request =
        transaction.objectStore(STORAGE_NAME).add({'key': key': key, 'value': value});
    // Use `transaction.oncomplete` rather than `request.onsuccess` to ensure
    // that IndexedDB has flushed to disk.
    transaction.oncomplete = e => {
      resolve(true);
    };
    transaction.onerror = e => {
      reject(e.target.error);
    };
  });
}

async function readData(db, key) {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(STORAGE_NAME);
    const request = transaction.objectStore(STORAGE_NAME).index('key').get(key);
    request.onsuccess = e => {
      if (e.target.result) {
        resolve(e.target.result.value);
      } else {
        reject(new Error('Empty result.'));
      }
    };
    request.onerror = e => {
      reject(e.target.error);
    };
  });
}

async function readData(db, key) {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(STORAGE_NAME);
    const request = transaction.objectStore(STORAGE_NAME).index('key').get(key);
    request.onsuccess = e => {
      if (e.target.result) {
        resolve(e.target.result.value);
      } else {
        reject(new Error('Empty result.'));
      }
    };
    request.onerror = e => {
      reject(e.target.error);
    };
  });
}
