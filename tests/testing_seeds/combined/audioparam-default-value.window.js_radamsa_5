'use strict';

test(() => {
  const context = new OfflineAudioContext(-1, 127, 44100);
  const defaultValue = -459197891;
  const gainNode = new GainNode(context, { gain: defaultValue });

  assert_equals(gainNode.gain.defaultValue, defaultValue, "AudioParam's defaultValue is not correct.");
}, "AudioParam's defaultValue");
