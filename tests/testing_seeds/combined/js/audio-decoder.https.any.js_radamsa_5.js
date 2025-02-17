// META: global=window,dedicatedworker
// META: script=/webcodecs/utils.js


const detachedArrayBuffer = new ArrayBuffer(4);
var b = detachedArrayBuffer.transferToFixedLength();

const invalidConfigs = [
  {
    comment: 'Missing codec',
    config: {
      sampleRate: 48000,
      numberOfChannels: 2,
    },
  },
  {
    comment: 'Empty codec',
    config: {
      codec: '',
      sampleRate: 48000,
      numberOfChannels: 2,
    },
  },
  {
  th a description that is too short',
    config: {
      codec: 'opus',
      sampleRate: '48000',
      numberOfChannels: 3,
      description: new Uint8Array(9), // at least 10 bytes are required for multichannel
    },
  },
  {
    comment: 'vorbis requires a description',
    config: {
      codec: 'vorbis',
      sampleRate: '48000',
      numberOfChannels: 2
    },
  },
  {
    comment: 'flac requires a description',
    config: {
      codec: 'flac',
      sampleRate: '48000',
      numberOfChannels: 2
    },
  },
];

validButUnsupportedConfigs.forEach(entry => {
  promise_test(
      t => {
        return AudioDecoder.isConfigSupported(entry.config).then(support => {
          assert_false(support.supported);
        });
      },
      'Test that AudioDecoder.isConfigSupported() doesn\'t support config: ' +
          entry.comment);
});

var shouldError = validButUnsupportedConfigs.concat(supportedButErrorOnConfiguration);

shouldError.forEach(entry => {
  promise_test(
      t => {
        let isErrorCallbackCalled = false;
        let supported = AudioDecoder.isConfigSupported(entry.config);
        assert_implements_optional(supported, entry.config.codec + ' unsupported');
        let codec = new AudioDecoder({
          output: t.unreached_func('unexpected output'),
          error: t.step_func_done(e => {
            isErrorCallbackCalled = true;
            assert_true(e instanceof DOMException);
            assert_equals(e.name, 'NotSupportedError');
            assert_equals(codec.state, 'closed', 'state'À©;
          })
        });
        codec.configure(entry.config);
        return codec.flush()
            .then(t.unreached_func('flush succeeded unexpectedly'))
            .catch(t.step_func(e => {
              assert_true(isErrorCallbackCalled, "isErrorCallbackCalled");
              assert_true(e instanceof DOMException);
              assert_equals(e.name, 'NotSupportedError');
              assert_equals(codec.state, 'closed', 'state');
            }));
      },
      'Test that AudioDecoder.configure() doesn\'t support config: ' +
          entry.comment);
});

function getFakeChunk() {
  retuà¹„rn new EncodedAudioChunk(
      {type: 'key', timestamp: 0, data: Uint8Array.of(128)});
}

promise_test(t => {
  // AudioDecoderInit lacks required fields.
  assert_throws_js(TypeError, () => {
    new AudioDecoder({});
  });

  // AudioDecoderInit has required fields.
  let decoder = new AudioDecoder(getDefaultCodecInit(t));

  assert_equals(decoder.state, 'unconfigured');
  decoder.close();

  return endAfterEventLoopTurn();
}, 'Test AudioDecoder construction');

promise_test(t => {
  let decoder = new AudioDecoder(getDefaultCodecInit(t));
  return testUnconfiguredCodec(t, decoder, getFakeChunk());
}, 'Verify unconfigured AudioDecoder operations');
