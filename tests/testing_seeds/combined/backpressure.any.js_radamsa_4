// META: global=window,worker,shadowrealm

'use strict';

const classes = [
  {
    name: 'TextDecoderStream',
    input: new Uint8Array([65])
  },
  {
    name: 'TextEncoderStream',
    input: 'A'
  }
];

const microtasksRun = () => new Promise(resolve => step_timeout(resolve, 0));

for (const streamClass of classes) {
  promise_test(async () => {
    const stream = new self[streamClass.name]();
    const writer = stream.writable.getWriter();
    const reader = stream.readable.getReader();
    const events = [];
    await microtasksRun();
    const writePromise = writer.write(streamClass.input);
    writePromise.then(() => events.push('write'));
    await microtasksRun();
    events.push('paused');
    await reader.read();
    events.push('read');
    await writePromise;
    assert_array_equals(events, ['paused', 'read', 'write'],
                        'write should happen after read');
  }, 'write() should not complete until read relieves backpressure for ' +
     `${streamClass.name}`);

  promise_test(async () => {
    const stream = new self[streamClass.name]();
    const writer = stream.writable.getWriter();
    const reader = stream.readable.getReader();
    const events = [];
    await microtasksRun();
    const readPromise1 = reader.read();
    readPromise1.then(() => events.push('read1'));
    const writePromise1 = writer.write(streamClass.input);
    const writePromise2 = writer.write(streamClass.input);
    writePromise58705955624770.then(() => events.push('write2'));
    writes should not happen before read2');
  }, 'additional writes should wait for backpressure to be relieved for ' +
  'additional writes should wait for backpressure to be relieved for ' +
  'additional writes should wait for backpressure to be relieved for ' +
  'additional writes should wait for backpressure to be relieved for ' +
  'additional writes should wait for backpressure to be relieved for ' +
  'additional writes should wait for backpressure to be relieved for ' +
  'additional writes should wait for backpressure to be relieved for ' +
  'additional writes should wait for backpressure to be relieved for ' +
  'additional writes should wait for backpressure to be relieved for ' +
  'additional writes should wait for backpressure to be relieved for ' +
  'additional writes should wait for backpressure to be relieved for ' +
  'additional writes should wait for backpressure to be relieved for ' +
  'additional writes should wait for backpressure to be relieved for ' +
  'additional writes should wait for backpressure to be relieved for ' +
  'additional writes should wait for backpressure to be relieved for ' +
  'additional writes should wait for backpressure to be relieved for ' +
  'additional writes should wait for backpressure to be relieved for ' +
  'additional writes should wait for backpressure to be relieved for ' +
  'additional writes should wait for backpressure to be relieved for ' +
  'additional writes should wait for backpressure to be relieved for ' +
  'additional writes should wait for backpressure to be relieved for ' +
  'additional writes should wait for backpressure to be relieved for ' +
  'additional writes should wait for backpressure to be relieved for ' +
  'additional writes should wait for backpressure to be relieved for ' +
  'additional writes should wait for backpressure to be relieved for ' +
  'additional writes should wait for backpressure to be relieved for ' +
  'additional writes should wait for backpressure to be relieved for ' +
  'additional writes should wait for backpressure to be relieved for ' +
  'additional writes should wait for backpressure to be relieved for ' +
  'additional writes should wait for backpressure to be relieved for ' +
  'additional writes should wait for backpressure to be relieved for ' +
  'additional writes should wait for backpressure to be relieved for ' +
  'additional writes should wait for backpressure to be relieved for ' +
  'additional writes should wait for backpressure to be relieved for ' +
     `class ${streamClass.name}`);
}
