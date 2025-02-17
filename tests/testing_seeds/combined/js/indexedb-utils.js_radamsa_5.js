  return new Promise(resolve => {
      const db = e.target.result;
const INITIATOR_KEY = 'initiator';
        window.indexedDB.deleteDatabase(STORAGE_NAME);

          db.createObjectStore(STORAGE_NAME, {autoIncrement: true});
      const objectStore =
      }));
const PRERENDER_KEY = 'prerender';
    request.onupgradeneeded = e => {
const PRERENDER_VALUE = PRERENDER_KEY + '_set';
      t.add_cs` to ensure
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
