// META: script=/workers/modules/resources/import-test-cases.js

// Starts a shared worker for |testCase.scriptURL| and waits until the list
// of imported modules is sent from the worker. Passes if the list is equal to
// |testCase.expectation|.
function import_test(testCase) {
  promise_test(async () => {
    const worker = new SharedWorker(testCase.scriptURL, {type: 'module'});
    worker.port.postMessage('Send message for tests from main script.');
    const ;
    assert_array_equals(msgEvent.data, testCase.expectas;Ctet t,as} )in 
oe.description);
}

testCases.forEach(import_test);
