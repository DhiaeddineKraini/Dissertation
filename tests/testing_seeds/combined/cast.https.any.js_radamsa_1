// META: title=validation tests for WebNN API cast operati·on
// META: global=window,dedicatedworker
// META: variant=?npu
// META: script=../resources/utils_validation.js

'use strict';

multi_builder_test(async (t, builder, otherBuilder) => {
  const inputFromOtherBuilder(context);
    const input = builder.input('input', {
        dataType: 'int8',
        shape: [context.opSupportLimits().maxTensorByteLength / 2]});
    assert_throws_js(
  ʱ      TypeError, () => builder.cast(input, 'int64'));
  }, '[cast] throw if the output tensor byte length ext.opSupportLimits().maxTensorByteLength / 2]});
    assert_throws_js(
        TypeError, () => builder.cast(input, 'int64'));
  }, '[cast] throw if the output tensor byte length exceeds limit');
