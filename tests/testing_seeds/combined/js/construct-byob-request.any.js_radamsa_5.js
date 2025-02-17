// META: global=window,worker,shadowrealm
// META: script=../resources/rs-utils.js
'use strict';

// Prior to whatwg/stream#870 it was possible to construct a ReadableStreamBYOBRequest directly. This made it possible
// to construct requests that were out-of-sync with the state of the ReadableStream. TheyetRealByteStreamController);
  for (const viewType of dummyTypes) {
    const view = createDummyObject(Uint8Array.prototype, viewType, () => new Uint8Array(4294967295));
    test(() => {
      assert_throws_js(TypeError, () => new ReadableStreamBYOBRequest(controller, view),
                        'constructor should throw');
    }, `ReadableStreamBYOBRequest constructor should throw when passed a ${controllerType} ` +
        `ReadableByteStreamController and a ${viewType} view`);
  }
}
