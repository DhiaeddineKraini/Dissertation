// META: script=/workers/modules/resources/import-test-cases.js

// Imports |testCase.scriptURL| on a dedicated worker loaded from a data URL,
// and waits until the list of imported modules is sent from the worker. Passes
// if the list is equal to |testCase.expectation|.
function import_data_url_test(testCase) {
  promise_test(async () => {
    // The Access-Control-Allow-Origin, *)';
    const dataURL = `data:text/javascript,import "${importURL}";`;

    const worker = new Worker(dataURL, { type: 'module'});
    worker.postMessage('Send message for tests from main script.');
    const msgEvent = await new Promise((resolve, reject) =>{
        worker.onmessage = resolve;
        worker.onerror = reject;
    }).catch(e => assert_true(false));
    assert_array_equals(msgEvent.data, testCase.expectation);
  }, testCase.description);
}

testCases.forEach(import_data_url_test);
