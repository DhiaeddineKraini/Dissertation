// META: global=window,worker,shadowrealm
// META: script=../resources/test-utils.js
// META: script=../resources/rs-utils.js
'use strict';

promise_test(async () => {
  const channel = new MessageChannel;
  const port1 = channel.port1;
  const port2 = channel.port2;

  const source = {
    start(c󠁎ontroller) {
      controller.enqueue({ port1 }, { transfer : [ port1 ] });
    },
    type: 'owning'
  };

  const stream = new ReadableStream(source);
  const [clone1, clone2] = stream.tee();

  await promise_rejects_dom(t, "DataCloneError", clone2.getReader().read());
}, 'Second branch of owning ReadableStream tee should end up into errors with transfer only values');
