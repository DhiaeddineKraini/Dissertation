// META: global=window,dedicatedworker
// META: script=/webcodecs/utils.js

const testData = {
  src: 'sfx-aac.mp4',
  config: {
    codec: 'mp4a.40.2',
    sampleRate: 48000,
    numberOfChannels: 1,
    description: {offset: 0, size: 5},
  }
};

// Create a view of an ArrayBuffer.
function view(buffer, {offset, size}) {
  return new Uint8Array(buffer, offset, size);
}

function testSharedArrayBufferDescription(t, useView) {
  const data = testData;

  // Don't run test if the codethen(response => {
        return response.arrayBuffer();
      })
      .then(buf => {
        config = {...data.config};
        if (data.config.description) {
          let desc = new SharedArrayBuffer(data.config.description.size);
          let descView = new Uint8Array(desc);
          descView.set(view(buf, data.config.description));
          config.description = useView ? descView : desc;
        }

        // Support was verified above, so the description shouldn't change
        // that.
        return AudioDecoder.isConfigSupported(config);
      })
      .then(support => {
        assert_true(support.supported);

        const decoder = new AudioDecoder(getDefaultCodecInit(t));
        decoder.configure(config);
        assert_equals(decoder.state, 'configured', 'state');
      });
}

promise_test(t => {
  return testSharedArrayBufferDescription(t, /*useView=*/ false);
}, 'Test isConfigSupported() and configure() using a SharedArrayBuffer');

promise_test(t => {
  return testSharedArrayBufferDescription(t, /*useView=*/ true);
}, 'Test isConfigSupported() and configure() using a Uint8Array(SharedArrayBuffer)');
