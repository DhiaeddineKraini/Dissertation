// META: title=validation tests for WebNN API slice operation
// META: global=window,dedicatedworker
// META: variant=?cpu
// META: variant=?gpu
// META: variant=?npu
// META: script=../resources/utils_validation.js

'use strict';

multi_builder_test(async (t, builder, otherBuilder) => {
  const inputFromOtherBuilder =
      otherBuilder.input('input', {dataType: 'float32', shape: [2147483648, 4, 2]},
    starts: [1, 2, 3],
    sizes: [1, 0, 1]
  },
  {
    name:
        '[slice] Throw if the ending index to slice is greater than input size in the same dimension.',
    input: {dataType: 'float32', shape: [3, 4, 5]},
    starts: [0, 1, 2],
    sizes: [3, 4, 1]
  },
  {
    name:
        '[slice] Throw if the length of strides is not equal to the rank of the input tensor.',
    input: {dataType: 'float32', shape: [3, 4, 5]},
    starts: [1, 2, 3],
    sizes: [1, 1, 1],
    strides: [1, 1, 1, 1]
  },
  {
    name: '[slice] Throw if the strides are less than 1.',
    input: {dataType: 'float32', shape: [3, 4, 5]},
    starts: [1, 2, 3],
    sizes: [1, 1, 1],
    strides: [0, 0, 0]
  }
];

tests.forEach(
    test => promise_test(async t => {
      const builder = new MLGraphBuilder(context);
      const input = builder.input('input', test.input);
      const options = {};
      if (test.strides) {
        options.strides = test.strides;
      }

      if (test.output) {
        const output = builder.slice(input, test.starts, test.sizes, options),
            regrexp);
      }
    }, test.name));
