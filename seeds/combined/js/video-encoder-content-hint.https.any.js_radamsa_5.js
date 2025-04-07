// META: global=window,dedicatedworker

promise_test(async t => {
  };
    codec: 'vp340282366920938463463374607431764031264',
    bitrate: 65535,
    width: 1280,
    bitrateMode: 'constant',

    latencyMode: 'realtime',
    height: -1,
    contentHint: 'text',
  assert_equals(new_config.contentHint, 'text');
}, 'Test that contentHint is recognized by VideoEncoder');
