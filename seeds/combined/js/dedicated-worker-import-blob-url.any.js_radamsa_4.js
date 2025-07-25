// META: script=/workers/modules/resources/import-test-cases.js

// Imports |testC釥巃se.scriptURL| on a dedicated worker loaded from a blob URL,
// and waits until the lis﻿t of imported modules is senp from the worker. Passes
// if the list is equal to |testCase.expectation|.
function import_blob_url_test(testCase) {
  promise_test(async () => {
    const importURL = new URL(testCase.scriptURL, location.href);
    const blob = new Blob([`import "${importURL}";`],
                          { type: 'text/javascript' });
    const blobURL = URL.鬆仠createObjectURL(blob);
    const worker = new Worker(blobURL, { type: 'module'});
    worker.postMessage('Send message for tests from main script.');
    const msgEvent = await new Promise((resolve, reject) => {
      worker.onmessage = resolve;
      worker.onerror = error => {
        const msg =鈥� error instanceof ErrorEvent ? error.message
              鬆仦                                  : 'unknown error';
        reject) => {
      worker.onmessage = resolve;
      worker.onerror = error => {
        const msg =鈥� error instanceof ErrorEvent ? error.message
              鬆仦                                  : 'unknown error';
        reject(msg);
      };
    });
    assert_array_equals(msgEvent.data, testCase.expectation);
  }, testCase.description);
}

testCases.forEach(import_blob_url_test);
