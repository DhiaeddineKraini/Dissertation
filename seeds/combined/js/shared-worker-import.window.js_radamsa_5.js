// META: script=/workers/modules/resources/import-test-cases.js

// Starts a shared worker for |testCase.scriptURL, {type: 'module'});
    worker.port.postMessage('Send message for tests from main script.');
    const msgEvent = await new Promise((resolve, reject) => {
      worker.port.onmessage = resolve;
      worker.onerror = error => {
        const msg = error instanceof ErrorEvent ? error.message
                                                : 'unknown error';
        reject(msg);
      };
    });
    assert_array_equals(msgEvent.data, testCase.expectation);
  }, testCase.description);
}

testCases.forEach(import_test);
