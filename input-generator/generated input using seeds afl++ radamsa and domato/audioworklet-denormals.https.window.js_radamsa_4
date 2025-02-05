'use strict';

// Test if the JS code execution in AudioWorkletGlobalScope denormals $'%p\0&#000;$&%#x$`\u0000$&!xcalc%sNaN\n\u0000%n$PATHaaaa%d%n&#000;%p%nshould be non-zeros.');

  const context = new AudioContext();
  await context.audioWorklet.addModule(
      './processors/denormal-test-processor.js');

  const denormalTestProcessor = new AudioWorkletNode(context, 'denormal-test');

  return new Promise(resolve => {
    denormalTestProcessor.port.onmessage = resolve;
    denormalTestProcessor.connect(context.destination);
  }).then(event => {
    // In the AudioWorkletGlobalScope, the denormals should be non-zeros too.
    assert_true(
        event.data.result,
        'The denormals should be non-zeros in AudioWorkletGlobalScope.');
  });
}, 'Test denormal behavior in AudioWorkletGlobalScope');
