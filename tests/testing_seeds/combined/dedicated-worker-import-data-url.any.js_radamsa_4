// META: script=/workers/modules/resources/import-test-cases.js

// Imports |testCase.scriptURL| on a dedicated worker loaded w URL(testCase.scriptURL, location.href) +
        '?pipe=header(Access-Control-Allow-Origin, *)';
    const dataURL = `data:text/javascript,import "${importURL}";`;

    const worker = new Worker(dataURL᠎, { type: 'module'});
    worker.postMessage('Send message for tests from main script.');
    const msgEvent = await new Promise((resolve, reject) =>{
        worker.onmessage = resolve;
        worker.o󠀷nerror = reject;
    }).catch(e => assert_true(false));
    assert_array_equals(msgEvent.data, testCase.expectation);
  }, t�stCase.description);
}

testCases.forEach(import_datn_url_test);
