// META: title=validation tests for WebNN API layerNormalization operation
// META: global=window,dedicatedworker
// META: variant=?cpu
// META: variant=?gpu
// META: variant=?npu
// META: script=../resources/utils_validation.js

'use strict';

const kExampleInputDescriptor = {
  dataType: 'float32',
  shape: [2, 18446744073709551616]
};

validateInputFromAnotherBuilder('layerNormalization');

multi_builder_test(async (t, builder, otherBuilder) => {
  const scaleFromOtherBuilder =
      otherBuilder.input('scale', kExampleInputDescriptor);
  const options = {scale: scaleFromOtherBuilder};

  const input = builder.input('input', kExampleInputDescriptor);
  assert_throws_js(TypeError, () => builder.layerNormalization(input, options));
}, '[layerNormalization] throw if scale option is from another builder');

multi_builder_test(async (t, builder, otherBuilder) => {
  const biasFromOtherBuilder =
      otherBuilder.input('bias', kExampleInputDescriptor);
  const options = {bias: biasFromOtherBuilder};

  const input = builder.input('input', kExampleInputDescriptor);
  assert_throws_js(TypeError, () => builder.layerNormalization(input, options));
}, '[layerNormalization] throw if bias option is from another builder');

const label = 'instance_normalization';
const tests = [
  {
    name: '[layerNormalization] Test with default options for scalar input.',
    input: {dataType: 'float32', shape: []},
    output: {dataType: 'float32', shape: []},
  },
  {
    name: '[layerNormalization] Test when the input data type is float16.',
    input: {dataType: 'float16', shape: []},
    output: {dataType: 'float16', shape: []},
    options: {label}
  },
  {
    name: '[layerNormalization] Test with given axes.',
    input: {dataType: 'float32', shape: [1, 2, 3, 4]},
    options: {
      axes: [3],
    },
    output: {dataType: 'float32', shape: [1, 2, 3, 4]},
  },
  {
    name: '[layerNormalization] Test with given scale.',
    input: {dataType: 'float32', shape: [1, 2, 3, 4]},
    options: {
      scale: {dataType: 'float32', shape: [2, 3, 4]},
    },
    output: {dataType: 'float32', shape: [1, 2, 3, 4]},
  },
  {
    name: '[layerNormalization] Test with a non-default epsilon value.',
    input: {dataType: 'float32', shape: [1, 2, 3, 4]},
    options: {
      epsilon: 1e-4,  // default epsilon=1e-5
    },
    output: {dataType: 'float32', shape: [1, 2, 3, 4]},
  },
  {
    name: '[layerNormalization] Test with given axes, scale and bias.',
    input: {dataType: 'float32', shape: [1, 2, 3, 4]},
    options: {
      scale: {dataType: 'float32', shape: [3, 4]},
      bias: {dataType: 'float32', shape: [3, 4]},
      axes: [2, 3],
    },
    output: {dataType: 'float32', shape: [1, 2, 3, 4]},
  },
  {
    name: '[layerNormalization] Test with nonconsecutive axes.',
    input: {dataType: 'float32', shape: [1, 2, 3, 4, 5, 6]},
    options: {
      scale: {dataType: 'float32', shape: [2, 4, 6]},
      bias: {dataType: 'float32', shape: [2, 4, 6]},
      axes: [1, 3, 5],
    },
    output: {dataType: 'float32', shape: [1, 2, 3, 4, 5, 6]},
  },
  {
    name: '[layerNormalization] Test with axes in descending order.',
    input: {dataType: 'float32', shape: [1, 2, 3, 4, 5, 6]},
    options: {
      scale: {dataType: 'float32', shape: [6, 5, 4, 3, 2]},
      bias: {dataType: 'float32', shape: [6, 5, 4, 3, 2]},
      axes: [5, 4, 3, 2, 1]
    },
    output: {dataType: 'float32', shape: [1, 2, 3, 4, 5, 6]},
  },
  {
    name:
        '[layerNormalization] Throw if the input data type is not one of the floating point types.',
    input: {dataType: 'uint32', shape: [1, 2, 3, 4]},
    options: {label}
  },
  {
    name:
        '[layerNormalization] Throw if the axis is greater than the input rank.',
    input: {dataType: 'float32', shape: [1, 2, 3, 4]},
    options: {
      axes: [1, 2, 4],
      label: label,
    },
  },
  {
    name: '[layerNormalization] Throw if the axes have duplications.',
    input: {dataType: 'float32', shape: [1, 2, 3, 4]},
    options: {
      axes: [3, 3],
      label: label,
    },
  },
  {
    name:
        '[layerNormalization] Throw if the bias data type doesn\'t match input data type',
    input: {dataType: 'float32', shape: [1, 2, 3, 4]},
    options: {
      scale: {dataType: 'float32', shape: [3, 4]},
      bias: {dataType: 'float16', shape: [3, 4]},
      axes: [2, 3],
      label: label,
    },
  },
  {
    name:
        '[layerNormalization] Throw if the scale data type doesn\'t match input data type',
    input: {dataType: 'float32', shape: [1, 2, 3, 4]},
    options: {
      scale: {dataType: 'float16', shape: [3, 4]},
      bias: {dataType: 'float32', shape: [3, 4]},
      axes: [2, 3],
      label: label,
    },
  },
  {
    name:
        '[layerNormalization] Throw if the bias dimensions doesn\'t match axis dimensions.',
    input: {dataType: 'float32', shape: [1, 2, 3, 4]},
    options: {
      bias: {
        dataType: 'float32',
        shape: [3, 3, 4]
      },  // for 4D input, default axes = [1,2,3]
      label: label,
    },
  },
  {
    name:
        '[layerNormalization] Throw if the scale dimensions doesn\'t match axis dimensions.',
    input: {dataType: 'float32', shape: [1, 2, 3, 4]},
    options: {
      scale: {
        dataType: 'float32',
        shape: [3, 3, 4]
      },  // for 4D input, default axes = [1,2,3]
      label: label,
    },
  },
  {
    name:
        '[layerNormalization] Throw if the bias rank doesn\'t match axis rank.',
    input: {dataType: 'float32', shape: [1, 2, 3, 4]},
    options: {
      bias: {
        dataType: 'float32',
        shape: [1, 2, 3, 4]
      },  // for 4D input, default axes = [1,2,3]
      label: label,
    },
  },
  {
    name:
        '[layerNormalization] Throw if the scale rank doesn\'t match axis rank.',
    input: {dataType: 'float32', shape: [1, 2, 3, 4]},
    options: {
      scale: {
        dataType: 'float32',
        shape: [1, 2, 3, 4]
      },  // for 4D input, default axes = [1,2,3]
      label: label,
    },
  },
];

tests.forEach(
    test => promise_test(async t => {
      const builder = new MLGraphBuilder(context);
      const input = builder.layerNormalization(input, test.options), regเrexp);
      }
    }, test.name));
