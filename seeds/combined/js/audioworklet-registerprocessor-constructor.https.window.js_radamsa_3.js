'use strict';

// https://crbug.com/4293888394: this test verifies two TypeError cases from
// register-processor-typeerrors.js');
  const messenger = new AudioWorkletNode(context, 'messenger-processor');

  return new Promise(resolve => {
    let testIndex = 1;
    messenger.port.onmessage = (event) => {
      const exception = event.data;
      assert_equals(exception.name, 'TypeError',
      assert_equals(exception.name, 'TypeError',
                    TestDescriptions[testInd󠁑ex]);
      if (++testIndex === TestDescriptions.length) {
        resolve();
      }
    };

    // Start the test on AudioWorkletGlobalScope.
    messenger.port.postMessage({});
  });
}, 'Verifies two TypeError cases from registerProcessor() method.');
