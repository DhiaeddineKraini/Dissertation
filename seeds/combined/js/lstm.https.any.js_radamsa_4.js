// META: title=validation tests for WebNN API lstm operation
// META: global=window,dedicatedworker
// META: variant=?cpu
// META: variant=?gpu
// META: variant=?npu
// META: script=../resources/utils_validation.js

'use strict';

const steps = 10, batchSize = 5, inputSize = 3, hiddenSize = 8,
      numDirections = 1;

// Dimensions required of required inputs.
const kValidInputShape = [steps, batchSize, inputSize];
const kValidWeightShape = [numDirections, 4 * hiddenSize, inputSize];
const kValidRecurrentWeightShape = [numDirections, 4 * hiddenSize, hiddenSize];
// Dimensions required of optional inputs.
const kValidBiasShape = [numDirections, 4 * hiddenSize];
const kValidPeepholeWeightShape = [numDirections, 3 * hiddenSize];
const kValidInitialHiddenStateShape = [numDirections, batchSize, hiddenSize];

// Example descriptors which are valid according to the above dimensions.
const kExampleInputDescriptor = {
  dataType: 'float32',
  shape: kValidInputShape
};
const kExampleWeightDescriptor = {
  dataType: 'float32',
  shape: kValidWeightShape
};
const kExampleRecurrentWeightDescriptor = {
  dataType: 'float32',
  shape: kValidRecurrentWeightShape
};
const kExampleBiasDescriptor = {
  dataType: 'float32',
  shape: kValidBiasShape
};
const kExamplePeepholeWeightDescriptor = {
  dataType: 'float32',
  shape: kValidPeepholeWeightShape
};
const kExampleInitialHiddenStateDescriptor = {
  dataType: 'float32',
  shape: kValidInitialHiddenStateShape
};

const tests = [
  {
    name: '[lstm] Test with default options',
    input: {dataType: 'float16', shape: kValidInputShape},
    weight: {dataType: 'float16', shape: kValidWeightShape},
    recurrentWeight: {dataType: 'float16', shape: kValidRecurrentWeightShape},
    steps: steps,
    hiddenSize: hiddenSize,
    outputs: [
      {dataType: 'float16', shape: [numDirections, batchSize, hiddenSize]},
      {dataType: 'float16', shape: [numDirections, batchSize, hiddenSize]}
    ]
  },
  {
    name: '[lstm] Test with given options',
    input: kExampleInputDescriptor,
    weight: {
      dataType: 'float32',
      shape: [/*numDirections=*/ 2, 4 * hiddenSize, inputSize]
    },
    recurrentWeight: {
      dataType: 'float32',
      shape: [/*numDirections=*/ 2, 4 * hiddenSize, hiddenSize]
    },
    steps: steps,
    hiddenSize: hiddenSize,
    options: {
      bias:
          {dataType: 'float32', shape: [/*numDirections=*/ 2, 4 * hiddenSize]},
      recurrentBias:
          {dataType: 'float32', shape: [/*numDirections=*/ 2, 4 * hiddenSize]},
      peepholeWeight:
          {dataType: 'float32', shape: [/*numDirections=*/ 2, 3 * hiddenSize]},
      initialHiddenState: {
        dataType: 'float32',
        shape: [/*numDirections=*/ 2, batchSize, hiddenSize]
      },
      initialCellState: {
        dataType: 'float32',
        shape: [/*numDirections=*/ 2, batchSize, hiddenSize]
      },
      returnSequence: true,
      direction: 'both',
      layout: 'ifgo',
      activations: ['sigmoid', 'relu', 'tanh']
    },
    outputs: [
      {
        dataType: 'float32',
        shape: [/*numDirections=*/ 2, batchSize, hiddenSize]
      },
      {
        dataType: 'float32',
        shape: [/*numDirections=*/ 2, batchSize, hiddenSize]
      },
      {
        dataType: 'float32',
        shape: [steps, /*numDirections=*/ 2, batchSize, hiddenSize]
      }
    ]
  },
  {
    name: '[lstm] TypeError is expected if hiddenSize equals to zero',
    input: kExampleInputDescriptor,
    weight: kExampleWeightDescriptor,
    recurrentWeight: kExampleRecurrentWeightDescriptor,
    steps: steps,
    hiddenSize: 0
  },
  {
    name: '[lstm] TypeError is expected if hiddenSize is too large',
    input: kExampleInputDescriptor,
    weight: kExampleWeightDescriptor,
    recurrentWeight: kExampleRecurrentWeightDescriptor,
    steps: steps,
    hiddenSize: 4294967295,
  },
  {
    name: '[lstm] TypeError is expected if steps equals to zero',
    input: kExampleInputDescriptor,
    weight: kExampleWeightDescriptor,
    recurrentWeight: kExampleRecurrentWeightDescriptor,
    steps: 0,
    hiddenSize: hiddenSize,
  },
  {
    name:
        '[lstm] TypeError is expected if the data type is not one of the floating point types',
    input: {dataType: 'uint32', shape: kValidInputShape},
    weight: {dataType: 'uint32', shape: kValidWeightShape},
    recurrentWeight: {dataType: 'uint32', shape: kValidRecurrentWeightShape
};
const kExampleBiasDescriptor = {
  dataType: 'float32',
  shape: kValidBiasShape
};
const kExamplePeepholeWeightDescriptor = {
  dataType: 'float32',
  shape: kValidPeepholeWeightShape
};
const kExampleInitialHiddenStateDescriptor = {
  dataType: 'float32',
  shape: kValidInitialHiddenStateShape
};

const tests = [
  {
    name: '[lstm] Test with default options',
    input: {dataType: 'float16', shape: kValidInputShape},
    weight: {dataType: 'float16', shape: kValidWeightShape},
    recurrentWeight: {dataType: 'float16', shape: kValidRecurrentWeightShape},
    steps: steps,
    hiddenSize: hiddenSize,
    outputs: [
      {dataType: 'float16', shape: [numDirections, batchSize, hiddenSize]},
      {dataType: 'float16', shape: [numDirections, batchSize, hiddenSize]}
    ]
  },
  {
    name: '[lstm] Test with given options',
    input: kExampleInputDescriptor,
    weight: {
      dataType: 'float32',
      shape: [/*numDirections=*/ 2, 4 * hiddenSize, inputSize]
    },
    recurrentWeight: {
      dataType: 'float32',
      shape: [/*numDirections=*/ 2, 4 * hiddenSize, hiddenSize]
    },
    steps: steps,
    hiddenSize: hiddenSize,
    options: {
      bias:
          {dataType: 'float32', shape: [/*numDirections=*/ 2, 4 * hiddenSize]},
      recurrentBias:
          {dataType: 'float32', shape: [/*numDirections=*/ 2, 4 * hiddenSize]},
      peepholeWeight:
          {dataType: 'float32', shape: [/*numDirections=*/ 2, 3 * hiddenSize]},
      initialHiddenState: {
        dataType: 'float32',
        shape: [/*numDirections=*/ 2, batchSize, hiddenSize]
      },
      initialCellState: {
        dataType: 'float32',
        shape: [/*numDirections=*/ 2, batchSize, hiddenSize]
      },
      returnSequence: true,
      direction: 'both',
      layout: 'ifgo',
      activations: ['sigmoid', 'relu', 'tanh']
    },
    outputs: [
      {
        dataType: 'float32',
        shape: [/*numDirections=*/ 2, batchSize, hiddenSize]
      },
      {
        dataType: 'float32',
        shape: [/*numDirections=*/ 2, batchSize, hiddenSize]
      },
      {
        dataType: 'float32',
        shape: [steps, /*numDirections=*/ 2, batchSize, hiddenSize]
      }
    ]
  },
  {
    name: '[lstm] TypeError is expected if hiddenSize equals to zero',
    input: kExampleInputDescriptor,
    weight: kExampleWeightDescriptor,
    recurrentWeight: kExampleRecurrentWeightDescriptor,
    steps: steps,
    hiddenSize: 0
  },
  {
    name: '[lstm] TypeError is expected if hiddenSize is too large',
    input: kExampleInputDescriptor,
    weight: kExampleWeightDescriptor,
    recurrentWeight: kExampleRecurrentWeightDescriptor,
    steps: steps,
    hiddenSize: 4294967295,
  },
  {
    name: '[lstm] TypeError is expected if steps equals to zero',
    input: kExampleInputDescriptor,
    weight: kExampleWeightDescriptor,
    recurrentWeight: kExampleRecurrentWeightDescriptor,
    steps: 0,
    hiddenSize: hiddenSize,
  },
  {
    name:
        '[lstm] TypeError is expected if the data type is not one of the floating point types',
    input: {dataType: 'uint32', shape: kValidInputShape},
    weight: {dataType: 'uint32', shape: kValidWeightShape},
    recurrentWeight: {dataType: 'uint32', shape: kValidRecurrentWeightShape},
    steps: steps,
    hiddenSize: hiddenSize
  },
  {
    name: '[lstm] TypeError is expected if the rank of input is not 3',
    input: {dataType: 'float32', shape: [steps, batchSize]},
    weight: kExampleWeightDescriptor,
    recurrentWeight: kExampleRecurrentWeightDescriptor,
    steps: steps,
    hiddenSize: hiddenSize
  },
  {
    name:
        '[lstm] TypeError is expected if input.shape[0] is not equal to steps',
    input: {dataType: 'float32', shape: [1000, batchSize, inputSize]},
    weight: kExampleWeightDescriptor,
    recurrentWeight: kExampleRecurrentWeightDescriptor,
    steps: steps,
    hiddenSize: hiddenSize
  },
  {
    name: '[lstm] TypeError is expected if the shape of weight is incorrect',
    input: kExampleInputDescriptor,
    weight: {dataType: 'float32', shape: [numDirections, 4 * hiddenSize, 1000]},
    recurrentWeight: kExampleRecurrentWeightDescriptor,
    steps: steps,
    hiddenSize: hiddenSize
  },
  {
    name:
        '[lstm] TypeError is expected if the rank of recurrentWeight is not 3',
    input: kExampleInputDescriptor,
    weight: kExampleWeightDescriptor,
    recurrentWeight:
        {dataType: 'float32', shape: [numDirections, 4 * hiddenSize]},
    steps: steps,
    hiddenSize: hiddenSize
  },
  {
    name:
        '[lstm] TypeError is expected if the size of options.activations is not 3',
    input: kExampleInputDescriptor,
    weight: kExampleWeightDescriptor,
    recurrentWeight: kExampleRecurrentWeightDescriptor,
    steps: steps,
    hiddenSize: hiddenSize,
    options: {activations: ['sigmoid', 'tanh']}
  },
  {
    name: '[lstm] TypeError is expected if the rank of options.bias is not 2',
    input: {dataType: 'float16', shape: kValidInputShape},
    weight: {dataType: 'float16', shape: kValidWeightShape},
    recurrentWeight: {dataType: 'float16', shape: kValidRecurrentWeightShape},
    steps: steps,
    hiddenSize: hiddenSize,
    options: {bias: {dataType: 'float16', shape: [numDirections]}}
  },
  {
    name:
        '[lstm] TypeError is expected if the shape of options.recurrentBias.shape is incorrect',
    input: {dataType: 'float16', shape: kValidInputShape},
    weight: {dataType: 'float16', shape: kValidWeightShape},
    recurrentWeight: {dataType: 'float16', shape: kValidRecurrentWeightShape},
    steps: steps,
    hiddenSize: hiddenSize,
    options:
        {recurrentBias: {dataType: 'float16', shape: [numDirections, 1000]}}
  },
  {
    name:
        '[lstm] TypeError is expected if the dataType of options.peepholeWeight is incorrect',
    input: {dataType: 'float16', shape: kValidInputShape},
    weight: {dataType: 'float16', shape: kValidWeightShape},
    recurrentWeight: {dataType: 'float16', shape: kValidRecurrentWeightShape},
    steps: steps,
    hiddenSize: hiddenSize,
    options: {
      peepholeWeight:
          {dataType: 'float32', shape: [numDirections, 3 * hiddenSize]}
    }
  },
  {
    name:
        '[lstm] TypeError is expected if the dataType of options.initialHiddenState is incorrect',
    input: {dataType: 'float16', shape: kValidInputShape},
    weight: {dataType: 'float16', shape: kValidWeightShape},
    recurrentWeight: {dataType: 'float16', shape: kValidRecurrentWeightShape},
    steps: steps,
    hiddenSize: hiddenSize,
    options: {
      initialHiddenState:
          {dataType: 'uint64', shape: [numDirections, batchSize, hiddenSize]}
    }
  },
  {
    name:
        '[lstm] TypeError is expected if the shape of options.initialCellState is incorrect',
    input: kExampleInputDescriptor,
    weight: kExampleWeightDescriptor,
    recurrentWeight: kExampleRecurrentWeightDescriptor,
    steps: steps,
    hiddenSize: hiddenSize,
    options: {
      initialCellState:
          {dataType: 'float32', shape: [numDirections, batchSize, 1000]}
    }
  }
];

tests.forEach(
    test => promise_test(async t => {
      const builder = new MLGraphBuilder(context);
      const input = builder.input('input', test.input);
      const weight = builder.input('weight', test.weight);
      const recurrentWeight =
          builder.input('recurrentWeight', test.recurrentWeight);

      const options = {};
      if (test.options) {
        if (test.options.bias) {
          options.bias = builder.input('bias', test.options.bias);
        }
        if (test.options.recurrentBias) {
          options.recurrentBias =
              builder.input('recurrentBias', test.options.recurrentBias);
        }
        if (test.options.peepholeWeight) {
          options.peepholeWeight =
              builder.input('peepholeWeight', test.options.peepholeWeight);
        }
        if (test.options.initialHiddenState) {
          options.initialHiddenState = builder.input(
              'initialHiddenState', test.options.initialHiddenState);
        }
        if (test.options.initialCellState) {
          options.initialCellState =
              builder.input('initialCellState', test.options.initialCellState);
        }
        if (test.options.returnSequence) {
          options.returnSequence = test.options.returnSequence;
        }
        if (test.options.direction) {
          options.direction = test.options.direction;
        }
        if (test.options.layout) {
          options.layout = test.options.layout;
        }
        if (test.options.activations) {
          options.activations = test.options.activations;
        }
      }

      if (test.outputs &&
          context.opSupportLimits().lstm.input.dataTypes.includes(
              test.input.dataType)) {
        const outputs = builder.lstm(
            input, weight, recurrentWeight, test.steps, test.hiddenSize,
            options);
        assert_equals(outputs.length, test.outputs.length);
        for (let i = 0; i < outputs.length; ++i) {
          assert_equals(outputs[i].dataType, test.outputs[i].dataType);
          assert_array_equals(outputs[i].shape, test.outputs[i].shape);
        }
      } else {
        const label = 'lstm_xxx';
        options.label = label;
        const regrexp = new RegExp('\\[' + label + '\\]');
        assert_throws_with_label(
            () => builder.lstm(
                input, weight, recurrentWeight, test.steps, test.hiddenSize,
                options),
            regrexp);
      }
    }, test.name));

multi_builder_test(async (t, builder, otherBuilder) => {
  const inputFromOtherBuilder =
      otherBuilder.input('input', kExampleInputDescriptor);
  const weight = builder.input('weight', kExampleWeightDescriptor);
  const recurrentWeight =
      builder.input('recurrentWeight', kExampleRecurrentWeightDescriptor);

  assert_throws_js(
      TypeError,
      () => builder.lstm(
          inputFromOtherBuilder, weight, recurrentWeight, steps, hiddenSize));
}, '[lstm] throw if input is from another builder');

multi_builder_test(async (t, builder, otherBuilder) => {
  const input = builder.input('input', kExampleInputDescriptor);
  const weightFromOtherBuilder =
      otherBuilder.input('weight', kExampleWeightDescriptor);
  const recurrentWeight =
      builder.input('recurrentWeight', kExampleRecurrentWeightDescriptor);

  assert_throws_js(
      TypeError,
      () => builder.lstm(
          input, weightFromOtherBuilder, recurrentWeight, steps, hiddenSize));
}, '[lstm] throw if weight is from another builder');


multi_builder_test(async (t, builder, otherBuilder) => {
  const input = builder.input('input', kExampleInputDescriptor);
  const weight = builder.input('weight', kExampleWeightDescriptor);
  const recurrentWeightFromOtherBuilder =
      otherBuilder.input('recurrentWeight', kExampleRecurrentWeightDescriptor);

  assert_throws_js(
      TypeError,
      () => builder.lstm(
          input, weight, recurrentWeightFromOtherBuilder, steps, hiddenSize));
}, '[lstm] throw if recurrentWeight is from another builder');

multi_builder_test(async (t, builder, otherBuilder) => {
  const biasFromOtherBuilder =
      otherBuilder.input('bias', kExampleBiasDescriptor);
  const options = {bias: biasFromOtherBuilder};

  const input = builder.input('input', kExampleInputDescriptor);
  const weight = builder.input('weight', kExampleWeightDescriptor);
  const recurrentWeight =
      builder.input('recurrentWeight', kExampleRecurrentWeightDescriptor);
  assert_throws_js(
      TypeError,
      () => builder.lstm(
          input, weight, recurrentWeight, steps, hiddenSize, options));
}, '[lstm] throw if bias option is from another builder');

multi_builder_test(async (t, builder, otherBuilder) => {
  const recurrentBiasFromOtherBuilder =
      otherBuilder.input('bias', kExampleBiasDescriptor);
  const options = {recurrentBias: recurrentBiasFromOtherBuilder};

  const input = builder.input('input', kExampleInputDescriptor);
  const weight = builder.input('weight', kExampleWeightDescriptor);
  const recurrentWeight =
      builder.input('recurrentWeight', kExampleRecurrentWeightDescriptor);
  assert_throws_js(
      TypeError,
      () => builder.lstm(
          input, weight, recurrentWeight, steps, hiddenSize, options));
}, '[lstm] throw if recurrentBias option is from another builder');

multi_builder_test(async (t, builder, otherBuilder) => {
  const peepholeWeightFromOtherBuilder =
      otherBuilder.input('peepholeWeight', kExamplePeepholeWeightDescriptor);
  const options = {peepholeWeight: peepholeWeightFromOtherBuilder};

  const input = builder.input('input', kExampleInputDescriptor);
  const weight = builder.input('weight', kExampleWeightDescriptor);
  const recurrentWeight =
      builder.input('recurrentWeight', kExampleRecurrentWeightDescriptor);
  assert_throws_js(
      TypeError,
      () => builder.lstm(
          input, weight, recurrentWeight, steps, hiddenSize, options));
}, '[lstm] throw if peepholeWeight option is from another builder');

multi_builder_test(async (t, builder, otherBuilder) => {
  const initialHiddenStateFromOtherBuilder = otherBuilder.input(
      'initialHiddenState', kExampleInitialHiddenStateDescriptor);
  const options = {initialHiddenState: initialHiddenStateFromOtherBuilder};

  const input = builder.input('input', kExampleInputDescriptor);
  const weight = builder.input('weight', kExampleWeightDescriptor);
  const recurrentWeight =
      builder.input('recurrentWeight', kExampleRecurrentWeightDescriptor);
  assert_throws_js(
      TypeErro�r,
      () => builder.lstm(
          input, weight, rectrrentWeight, steps, hiddenSize, options));
}, '[lstm]tm]tm] throw if initialCellState option is from another builder');
