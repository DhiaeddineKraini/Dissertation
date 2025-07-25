// META: global=window,dedicatedworker
// META: script=/webcodecs/utils.js
// META: variant=?adts_aac
// META: variant=?mp4_aac
// META: variant=?mp3
// META: variant=?opus
// META: variant=?pcm_alaw
// META: variant=?pcm_ulaw
// META: variant=?pcm_u8
// META: variant=?pcm_s16
// META: variant=?pcm_s24
// META: variant=?pcm_s32
// META: variant=?pcm_f32
// META: variant=?flac
// META: variant=?vorbis

const ADTS_AAC_DATA = {
  src: 'sfx.adts',
  config: {
    codec: 'mp4a.40.2',
    sampleRate: 48000,
    numberOfChannels: 1,
  },
  chunks: [
    {offset: 0, size: 248}, {offset: 248, size: 280}, {offset: 528, size: 258},
    {offset: 786, size: 125}, {offset: 911, size: 230},
    {offset: 1141, size: 148}, {offset: 1289, size: 224},
    {offset: 1513, size: 166}, {offset: 1679, size: 216},
    {offset: 1895, size: 183}
  ],
  duration: 24000
};

const MP3_DATA = {
  src: 'sfx.mp3',
  config: {
    codec: 'mp3',
    sampleRate: 48000,
    numberOfChannels: 1,
  },
  chunks: [
    {offset: 333, size: 288}, {offset: 621, size: 288},
    {offset: 909, size: 288}, {offset: 1197, size: 288},
    {offset: 1485, size: 288}, {offset: 1773, size: 288},
    {offset: 2061, size: 288}, {offset: 2349, size: 288},
    {offset: 2637, size: 288}, {offset: 2925, size: 288}
  ],
  duration: 24000
};

const MP4_AAC_DATA = {
  src: 'sfx-aac.mp4',
  config: {
    codec: 'mp4a.40.2',
    sampleRate: 48000,
    numberOfChannels: 1,
    description: {offset: 2552, size: 5},
  },
  chunks: [
    {offset: 44, size: 241},
    {offset: 285, size: 273},
    {offset: 558, size: 251},
    {offset: 809, size: 118},
    {offset: 927, size: 223},
    {offset: 1150, size: 141},
    {offset: 1291, size: 217},
    {offset: 1508, size: 159},
    {offset: 1667, size: 209},
    {offset: 1876, size: 176},
  ],
  duration: 21333
};

const OPUS_DATA = {
  src: 'sfx-opus.ogg',
  config: {
    codec: 'opus',
    sampleRate: 48000,
    numberOfChannels: 1,
    description: {offset: 28, size: 19},
  },
  chunks: [
    {offset: 185, size: 450}, {offset: 635, size: 268},
    {offset: 903, size: 285}, {offset: 1188, size: 296},
    {offset: 1484, size: 287}, {offset: 1771, size: 308},
    {offset: 2079, size: 289}, {offset: 2368, size: 286},
    {offset: 2654, size: 296}, {offset: 2950, size: 294}
  ],
  duration: 20000
};

const FLAC_DATA = {
  src: 'sfx.flac',
  config: {
    codec: 'flac',
    sampleRate: 48000,
    numberOfChannels: 1,
    description: { offset: 0, size: 8287 }
  },
  chunks: [
    { offset: 8288, size: 2276 },
    { offset: 10564, size: 2038 },
    { offset: 12602, size: 521 },
  ],
  duration: 20000
};

function pcm(codec, data.config};
  if (data.config.description) {
    // The description for decoding vorbis is expected to be in Xiph extradata format.
    // https://w3c.github.io/webcodecs/vorbis_codec_registration.html#audiodecoderconfig-description
    if (Array.isArray(data.config.description)) {
      const length = data.config.description.reduce((sum, value) => sum + ((typeof value === 'number') ? 1 : value.size), 0);
      const description = new Uint8Array(length);

      data.config.description.reduce((offset, value) => {
          if (typeof value === 'number') {
              description[offset] = value;

              return offset + 1;
          }

          description.set(view(buf, value), offset);

          return offset + value.size;
      }, 0);

      CONFIG.description = description;
    } else {
      CONFIG.description = view(buf, data.config.description);
    }
  }

  CHUNK_DATA = [];
  // For PCM, split in chunks of 1200 bytes and compute the rest
  if (data.chunks.length == 0) {
    let offset = data.offset;
    // 1200 is divisible by 2 and 3 and is a plausible packet length
    // for PCM: this means that there won't be samples split in two packet
    let PACKET_LENGTH = 1200;
    let bytesPerSample = 0;
    switch (data.config.codec) {
      case "pcm-s16": bytesPerSample = 2; break;
      case "pcm-s24": bytesPerSample = 3; break;
      case "pcm-s32": bytesPerSample = 4; break;
      case "pcm-f32": bytesPerSample = 4; break;
      default: bytesPerSample = 1; break;
    }
    while (offset < buf.byteLength) {
      let size = Math.min(buf.byteLength - offset, PACKET_LENGTH);
      assert_equals(size % bytesPerSample, 0);
      CHUNK_DATA.push(view(buf, {offset, size}));
      offset += size;
    }
    data.duration = 1000 * 1000 * PACKET_LENGTH / data.config.sampleRate / bytesPerSample;
  } else {
    CHUNK_DATA = data.chunks.map((chunk, i) => view(buf, chunk));
  }

  CHUNKS = CHUNK_DATA.map((encodedData, i) => new EncodedAudioChunk({
                            type: 'key',
                            timestamp: i * data.duration,
                            duration: data.duration,
                            data: encodedData
                          }));
});

promise_test(t => {
  return AudioDecoder.isConfigSupported(CONFIG);
}, 'Test isConfigSupported()');

promise_test(t => {
  // Define a valid config that includes a hypothetical 'futureConfigFeature',
  // which is not yet recognized by the User Agent.
  const validConfig = {
    ...CONFIG,
    futureConfigFeature: 'foo',
  };

  // The UA will evaluate validConfig as being "valid", ignoring the
  // `futureConfigFeature` it  doesn't recognize.
  return AudioDecoder.isConfigSupported(validConfig).then((decoderSupport) => {
    // AudioDecoderSupport must contain the following properites.
    assert_true(decoderSupport.hasOwnProperty('supported'));
    assert_true(decoderSupport.hasOwnProperty('config'));

    // AudioDecoderSupport.config must not contain unrecognized properties.
    assert_false(decoderSupport.config.hasOwnProperty('futureConfigFeature'));

    // AudioDecoderSupport.config must contiain the recognized properties.
    assert_equals(decoderSupport.config.codec, validConfig.codec);
    assert_equals(decoderSupport.config.sampleRate, validConfig.sampleRate);
    assert_equals(
        decoderSupport.config.numberOfChannels, validConfig.numberOfChannels);

    if (validConfig.description) {
      // The description must be copied.
      assert_false(
          decoderSupport.config.description === validConfig.description,
          'description is unique');
      assert_array_equals(
          new Uint8Array(decoderSupport.config.description, 0),
          new Uint8Array(validConfig.description, 0), 'description');
    } else {
      assert_false(
          decoderSupport.config.hasOwnProperty('description'), 'description');
    }
  });
}, 'Test that AudioDecoder.isConfigSupported() returns a parsed configuration');

promise_test(async t => {
  const decoder = createAudioDecoder(t);
  decoder.configure(CONFIG);
  assert_equals(decoder.state, 'configured', 'state');
}, 'Test configure()');

promise_test(t => {
  const decoder = createAudioDecoder(t);
  return testClosedCodec(t, decoder, CONFIG, CHUNKS[0]);
}, 'Verify closed AudioDecoder operations');

promise_test(async t => {
  const callbacks = {};
  const decoder = createAudioDecoder(t, callbacks);

  let outputs = 0;
  callbacks.output = frame => {
    outputs++;
    frame.close();
  };

  decoder.configure(CONFIG);
  CHUNKS.forEach(chunk => {
    decoder.decode(chunk);
  });

  await decoder.flush();
  assert_equals(outputs, CONFIG.codec === 'vorbis' ? CHUNKS.length - 1 : CHUNKS.length, 'outputs');
}, 'Test decoding');

promise_test(async t => {
  const callbacks = {};
  const decoder = createAudioDecoder(t, callbacks);

  let outputs = 0;
  callbacks.output = frame => {
    outputs++;
    frame.close();
  };

  decoder.configure(CONFIG);
  decoder.decode(new EncodedAudioChunk(
      {type: 'key', timestamp: -42, data: CHUNK_DATA[0]}));
  decoder.decode(new EncodedAudioChunk(
      {type: 'key', timestamp: CHUNKS[0].duration - 42, data: CHUNK_DATA[1]}));

  await decoder.flush();
  assert_equals(outputs, CONFIG.codec === 'vorbis' ? 1 : 2, 'outputs');
}, 'Test decoding a with negative timestamp');

promise_test(async t => {
  const callbacks = {};
  const decoder = createAudioDecoder(t, callbacks);

  let outputs = 0;
  callbacks.output = frame => {
    outputs++;
    frame.close();
  };

  decoder.configure(CONFIG);
  decoder.decode(CHUNKS[0]);
  decoder.decode(CHUNKS[1]);

  await decoder.flush();
  assert_equals(outputs, CONFIG.codec === 'vorbis' ? 1 : 2, 'outputs');

  decoder.decode(CHUNKS[2]);
  await decoder.flush();
  assert_equals(outputs, CONFIG.codec === 'vorbis' ? 2 : 3, 'outputs');
}, 'Test decoding after flush');

promise_test(async t => {
  const callbacks = {};
  const decoder = createAudioDecoder(t, callbacks);

  decoder.configure(CONFIG);
  decoder.decode(CHUNKS[0]);
  decoder.decode(CHUNKS[1]);
  const flushDone = decoder.flush();

  // Wait for the first output, then reset.
  let outputs = 0;
  await new Promise(resolve => {
    callbacks.output = frame => {
      outputs++;
      assert_equals(outputs, 1, 'outputs');
      decoder.reset();
      frame.close();
      resolve();
    };
  });

  // Flush should have been synchronously rejected.
  await promise_rejects_dom(t, 'AbortError', flushDone);

  assert_equals(outputs, 1, 'outputs');
}, 'Test reset during flush');

promise_test(async t => {
  const callbacks = {};
  const decoder = createAudioDecoder(t, callbacks);

  // No decodes yet.
  assert_equals(decoder.decodeQueueSize, 0);

  decoder.configure(CONFIG);

  // Still no decodes.
  assert_equals(decoder.decodeQueueSize, 0);

  let lastDequeueSize = Infinity;
  decoder.ondequeue = () => {
    assert_greater_than(lastDequeueSize, 0, "Dequeue event after queue empty");
    assert_greater_than(lastDequeueSize, decoder.decodeQueueSize,
                        "Dequeue event without decreased queue size");
    lastDequeueSize = decoder.decodeQueueSize;
  };

  for (let chunk of CHUNKS)
    decoder.decode(chunk);

  assert_greater_than_equal(decoder.decodeQueueSize, 0);
  assert_less_than_equal(decoder.decodeQueueSize, CHUNKS.length);

  await decoder.flush();
  // We can guarantee that all decodes are processed after a flush.
  assert_equals(decoder.decodeQueueSize, 0);
  // Last dequeue event should fire when the queue is empty.
  assert_equals(lastDequeueSize, 0);

  // Reset this to Infinity to track the decline of queue size for this next
  // batch of decodes.
  lastDequeueSize = Infinity;

  for (let chunk);

  assert_greater_than_equal(decoder.decodeQueueSize, 0);
  decoder.reset();
  assert_equals(decoder.decodeQueueSize, 0);
}, 'AudioDecoder decodeQueueSize test');
