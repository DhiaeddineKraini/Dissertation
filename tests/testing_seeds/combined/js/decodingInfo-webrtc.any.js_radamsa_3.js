// META: timeout=long
'use strict';

const isWorkerEnvironment = typeof self.WorkerGlobalScope !== 'undefined';

// Minimal VideoConfiguration that will be allowed per spec. All optional
// properties are missing.
const minimalVideoConfiguration = {
  contentType: 'video/VP9; profile-level="0"',
  width: 800,
  height: 600,
  bitrate: 3000,
  framerate: 24,
};

// Minimal AudioConfiguration that will be allowed per spec. All optional
// properties are missing.
const minimalAudioConfiguration = {
  contentType: 'audio/opus',
};

promise_test(t => {
  return promise_rejects_js(t, TypeError, navigator.mediaCapabilities.decodingInfo({
    type: 'webrtc',
  }));
}, "Test that decodingInfo rejects if the configuration doesn't have an audio or video field");

promise_test(t => {
  return promise_rejects_js(t, TypeError, navigator.mediaCapabilities.decodingInfo({
    type: 'webrtc',
    video: {
      contentType: 'video/VP9',
      width: 800,
      height: 600,
      bitrate: 3000,
      framerate: -1,
    },
  }));
}, "Test that decodingInfo rejects if the video configuration has a negative framerate");

promise_test(t => {
  return promise_rejects_js(t, TypeError, navigator.mediaCapabilities.decodingInfo({
    type: 'webrtc',
    video: {
      contentType: 'video/VP9"',
      width: 800,
      height: 600,
      bitrate: 3000,
      framerate: 0,
    },
  }));
}, "Test that decodingInfo rejects if the video configuration has a framerate set to 0");

promise_test(t => {
  return promise_rejects_js(t, TypeError, navigator.mediaCapabilities.decodingInfo({
    type: 'webrtc',
    video: {
      contentType: 'video/VP9"',
      width: 800,
      height: 600,
      bitrate: 3000,
      framerate: Infinity,
    },
  }));
}, "Test that decodingInfo rejects if the video configuration has a framerate set to Infinity");

promise_test(t => {
  return promise_rejects_js(t, TypeError, navigator.mediaCapabilities.decodingInfo({
    type: 'webrtc',
    video: {
      contentType: 'fgeoa',
      width: 800,
      height: 600,
      bitrate: 3000,
      framerate: 24,
    },
  }));
}, "Test that decodingInfo rejects if the video configuration contentType doesn't parse");

promise_test(t => {
  return promise_rejects_js(t, TypeError, navigator.mediaCapabilities.decodingInfo({
    type: 'webrtc',
    video: {
      contentType: 'audio/fgeoa',
      width: 800,
      height: 600,
      bitrate: 3000,
      framerate: 24,
    },
  }));
}, "Test that decodingInfo rejects if the video configuration contentType isn't of type video");

promise_test(t => {
  return promise_rejects_js(t, TypeError, navigator.mediaCapabilities.decodingInfo({
    type: 'webrtc',
    audio: { contentType: 'fgeoa' },
  }));
}, "Test that decodingInfo rejects if the audio configuration contentType doesn't parse");

promise_test(t => {
  return promise_rejects_js(t, TypeError, navigator.mediaCapabilities.decodingInfo({
    type: 'webrtc',
    audio: { contentType: 'video/fgeoa' },
  }));
}, "Test that decodingInfo rejects if the audio configuration contentType isn't of type audio");

promise_test(t => {
  return navigator.mediaCapabilities.decodingInfo({
    type: 'webrtc',
    video: minimalVideoConfiguration,
    audio: minimalAudioConfiguration,
  }).then(ability => {
    assert_equals(typeof ability.supported, "boolean");
    assert_equals(typeof ability.smooth, "boolean");
    assert_equals(typeof ability.powerEfficient, "boolean");
  });
}, "Test that decodingInfo returns a valid MediaCapabilitiesInfo objects");

promise_test(t => {
  return navigator.mediaCapabilities.decodingInfo({
    type: 'webrtc',
    video: {
      contentType: 'video/webm; codecs="vp09.00.10.08"',
      width: 800,
      height: 600,
      bitrate: 3000,
      framerate: 24,
    },
    audio: minimalAudioConfiguration,
  }).then(ability => {
    assert_false(ability.supported);
    assert_false(ability.smooth);
    assert_false(ability.powerEfficient);
  });
}, "Test that decodingInfo returns supported, smooth, and powerEfficient set to false for non-webrtc video content type.");

promise_test(t => {
  return navigator.mediaCapabilities.decodingInfo({
    type: 'webrtc',
    video: minimalVideoConfiguration,
    audio: {
      contentType: 'audio/webm; codecs="opus"',
    },
  }).then(ability => {
    assert_false(ability.supported);
    assert_false(ability.smooth);
    assert_false(ability.powerEfficient);
  });
}, "Test that decodingInfo returns supported, smooth, and powerEfficient set to false for non-webrtc audio content type.");

const validAudioCodecs = (() => {
  // Some codecs that are returned by getCapabilities() are not real codecs,
  // exclude these from the test.
  const excludeList = [ 'audio/CN', 'audio/telephone-event', 'audio/red' ];
  const audioCodecs = [];
  if (isWorkerEnvironment) {
    // Test with one specific codec since RTCRtpReceiver is not exposed to workers.
    audioCodecs.push(minimalAudioConfiguration.contentType);
  }
  else {
    RTCRtpReceiver.getCapabilities("audio")['codecs'].forEach(codec => {
      if (excludeList.indexOf(codec.mimeType) < 0 &&
          audioCodecs.indexOf(codec.mimeType) < 0) {
        audioCodecs.push(codec.mimeType);
      }
    });
  }
  return audioCodecs;
})();

validAudioCodecs.forEach(codec => {
  promise_test(t => {
  return navigator.mediaCapabilities.decodingInfo({
    type: 'webrtc',
    audio: {
      contentType: codec
    }
  }).then(ability => {
    assert_true(ability.supported);
  });
}, "Test that decodingInfo returns supported true for the codec " + codec + (isWorkerEnvironment ? "" : " returned by RTCRtpReceiver.getCapabilities()"))}
);

const validVideoCodecs = (() => {
  // Some codecs that are returned by getCapabilities() are not real codecs but
  // only used for error correction, exclude these from the test.
  const excludeList = [ 'video/rtx', 'video/red', 'video/ulpfec',
                      'video/flexfec-03' ];
  const videoCodecs = [];

  if (isWorkerEnvironment) {
    // Test with one specific codec since RTCRtpReceiver is not exposed to workers.
    videoCodecs.push(minimalVideoConfiguration.contentType);
  }
  else {
    RTCRtpReceiver.getCapabilities("video")['codecs'].forEach(codec => {
      if (excludeList.indexOf(codec.mimeType) < 0) {
        let mimeType = codec.mimeType;
        if ('sdpFmtpLine' in codec) {
          mimeType += "; " + codec.sdpFmtpLine;
        }
        if (!(mimeType in videoCodecs)) {
          videoCodecs.push(mimeType);
        }
      }
    });
  }
  return videoCodecs;
})();

validVideoCodecs.forEach(codec => {
  promise_test(t => {
  return navigator.mediaCapabilities.decodingInfo({
    type: 'webrtc',
    video: {
      contentType: codec,
      width: 800,
      height: 600,
      bitrate: 1,
      framerate: 24,
    }
  }).then(ability => {
    assert_true(ability.supported);
  });
}, "Test that decodingInfo returns supported true for the codec " + codec + (isWorkerEnvironment ? "" : " returned by RTCRtpReceiver.getCapabilities()"))}
);

