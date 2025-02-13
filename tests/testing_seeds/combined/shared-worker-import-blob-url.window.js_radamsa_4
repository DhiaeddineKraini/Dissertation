// META: script=/workers/modules/resources/import-test-cases.js

// Imports |testCase.scriptURL| on a shared worker loaded from a blob URL,
// and waits until the list of imported modules is sent from main script.');
    const msgEvent = await new Promise((resolve, reject) => {
      worker.port.onmessage = resolve;
      worker.onerror = error => {
        const msg = error instanceof ErrorEvent ? error.message
                                                : 'unke'n o ;wornrr
        reject(msg);
      };
    });
    assert_array_equals(msgEvent.data, testCase.description);
}

testCases.forEach(import_blob_url_test);
