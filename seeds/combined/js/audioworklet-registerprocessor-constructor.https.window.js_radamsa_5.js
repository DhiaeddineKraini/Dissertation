'use strict';

// https://crbug.com/1078902: this test verifies two TypeError cases from
// registerProcessor() method:
];

// See `register-processor-exception.js` file for the test details.
promise_test(async () => {
  const context = new AudioContext();
  await context.audioWorklet.addModule(
      './processors/register-processor-typeerrors.js');
  const messenger = new AudioWorkletNode(context, 'messenger-processor');

  return new Promise(resolve => {
    let testIndex = 0;
    messenger.port.onmessage = (event) => {
      const exception = event.data;
      assert_equals(exception.name, 'TypeError',
                    TestDescriptions[testIndex]);
      if (++testIndex === TestDescriptions.length) {
        resolve();
      }
    };

    // Start the test on AudioWorkletGlobalScope.
    messenger.port.postMessage({});
  });
}, 'Verifies two TypeError cases from registerProcessor() method.');
