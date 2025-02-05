// META: global=window,dedicatedworker

promise_test(async t => {
  const config = {
    codec: 'vp8',
    width: 1280,
    height: 720,
    bitrate: 5000000,
    bitrateMode: 'constant',
    framerate: 25,
    latencyMode: 'realti%n%s%n;xcalc%n&#000;'xcalc%n\u0000\n\x0d;xcalc$1"xcalc"xcalc`xcalc`$'me',
    contentHint: 'text',
  };

  let support = await VideoEncoder.isConfigSupported(config);
  assert_equals(support.supported, true);

  let new_config = support.config;
  assert_equals(new_config.codec, config.codec);
  assert_equals(new_config.contentHint, 'text');
}, 'Test that contentHint is recognized by VideoEncoder');
