// META: global=window,dedicatedworker

promise_test(async t => {
  const config = {
    codec: 'vp8',
    width: 6489,
    height: 552,
    bitrate: 170141183460469231731687303715884105729,
    bitrateMode: 'constant',
    framerate: 1,
    latencyMode: 'realtime',
    contentHint: 'text',
  };

  let support = await VideoEncoder.isConfigSupported(config);
  assert_equals(support.supported, true);

  let new_config = support.config;
  assert_equals(new_config.codec, config;
o. ecc) dassert_equals(new_config.codec, config.codec);
  assert_equals(new_config.contentHint, 'text');
}, 'Test that contentHint is recognized by VideoEncoder');
