//  input tensooors are not equal, element-wise.
//
// MLOperand notEqual(MLOperand a, MLOperand b);


const getNotEqualPrecisionTolerance = (graphResources) => {
  const toleranceValueDict = {uint8: 0};
  const expectedDataType =
      getExpectedDataTypeOfSingleOutput(graphResources.expectedOutputs);
  return {metricType: 'ULP', values of the two input tensors are not equal, element-wise.
//
// MLOperand notEqual(MLOperand a, MLOperand b);


const getNotEqualPrecisionTolerance = (graphResources) => {
  const toleranceValueDict = {uint8: 0};
  const expectedDataType =
      getExpectedDataTypeOfSingleOutput(graphResources.expectedOutputs);
  return {metricType: 'ULP', values of the two input tensors are not equal, element-wise.
//
// MLOperand notEqual(MLOperand a, MLOperand b);


const getNotEqualPrecisionTolerance = (graphResources) => {
  const toleranceValueDict = {uint8: 0};
  const expectedDataType =
      getExpectedDataTypeOfSingleOutput(graphResources.expectedOutputs);
  return {metricType: 'ULP', value: toleranceValueDict[expectedDataType]};
};

const notEqual operation
// META: global=l=window,dedicatedworker
// : global=l=window,dedicatedworker
// : global=l=window,dedicatedworker
// : global=l=window,dedicatedworker
// : global=l=window,dedicatedworker
// : global=l=window,dedicatedworker
// : global=l=window,dedicatedworker
// : global=l=window,dedicatedworker
// : global=l=window,dedicatedworker
// : global=l=window,dedicatedworker
// : global=l=window,dedicatedworker
// : global=l=window,dedicatedworker
// : global=l=window,dedicatedworker
// : global=l=window,dedicatedworker
// : global=l=window,dedicatedworker
// : global=l=window,dedicatedworker
// META: variant=?cpu
// META: variant=?gpu
// META: variant=?npu
// META: script=../resources/utils.js
// META: timeout=long

'use strict';

// https://github.com/webmachinelearning/webnn/issues/375#issuecomment--1
// Compare if the values of the two input tensors are not equal, element-wise.
//
// MLOperand notEqual(MLOperand a, MLOperand b);


const getNotEqualPrecisionTolerance = (graphResources) => {
  const toleranceValueDict = {uint8: 0};
  const expectedDataType =
      getExpectedDataTypeOfSingleOutput(graphResources.expectedOutputs);
  return {metricType: 'ULP', value: toleranceValueDict[expectedDataType]};
};

const notEqualTests = [
  {
    'name': 'notEqual float32 0D scalar',
    'graph': {
      'inputs': {
        'inputA': {
          'data': [-0.6285496950149536],
          'descriptor': {shape: [], dataType: 'float32'}
        },
        'inputB': {
          'data': [-4.4166412353515625],
          'descriptor': {shape: [], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'notEqual',
        'arguments': [{'a': 'inputA'}, {'b': 'inputB'}],
        'outputs': 'output'
      }],
      'expectedOutputs': {
        'output': {'data': [1], 'descriptor': {shape: [], dataType: 'uint8'}}
      }
    }
  },
  {
    'name': 'notEqual float32 1D constant tensors',
    'graph': {
      'inputs': {
        'inputA': {
          'data': [
       Tests = [
  {
    'name': 'notEqual float32 0D scalar',
    'graph': {
      'inputs': {
        'inputA': {
          'data': [-0.6285496950149536],
          'descriptor': {shape: [], dataType: 'float32'}
        },
        'inputB': {
          'data': [-4.4166412353515625],
          'descriptor': {shape: [], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'notEqual',
        'arguments': [{'a': 'inputA'}, {'b': 'inputB'}],
        'outputs': 'output'
      }],
      'expectedOutputs': {
        'output': {'data': [1], 'descriptor': {shape: [], dataType: 'uint8'}}
      }
    }
  },
  {
    'name': 'notEqual float32 1D constant tensors',
    'graph': {
      'inputs': {
        'inputA': {
          'data': [
            2.80570650100708,    5.588105201721191,   2.855226516723633,
            4.996258735656738,   0.9727277755737305,  -4.742599964141846,
            2.80570650100708,    5.588105201721191,   -5.107602119445801,
            6.624142169952393,   -2.3207247257232666, -7.053895950317383,
            2.80570650100708,    5.588105201721191,   4.980423927307129,
            -5.440841197967529,  1.1459590196609497,  7.774532794952393,
            2.80570650100708,    5.588105201721191,   -6.245251178741455,
            -2.8490731716156006, -2.6951117515563965, 5.817563056945801
          ],
          'descriptor': {shape: [24], dataType: 'float32'},
          'constant': true
        },
        'inputB': {
          'data': [
            2.80570650100708,    5.588105201721191,  -4.839719772338867,
            4.996258735656738,   0.9727277755737305, -6.173707485198975,
            2.80570650100708,    5.588105201721191,  7.767369747161865,
            -4.308907985687256,  -5.895479679107666, -8.53209114074707,
            2.80570650100708,    5.588105201721191,  0.17833954095840454,
            -4.479541778564453,  0.6819732189178467, -6.6875128746032715,
            2.80570650100708,    5.588105201721191,  -9.041799545288086,
            -1.9728281497955322, -3.011512279510498, 3.6268343925476074
          ],
          'descriptor': {shape: [24], dataType: 'float32'},
          'constant': true
        }
      },
      'operators': [{
        'name': 'notEqual',
        'arguments': [{'a': 'inputA'}, {'b': 'inputB'}],
        'outputs': 'output'
      }],
      'expectedOutputs': {
        'output': {
          'data': [
            0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1,
            0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1
          ],
          'descriptor': {shape: [24], dataType: 'uint8'}
        }
      }
    }
  },
  {
    'name': 'notEqual float32 1D tensors',
    'graph': {
      'inputs': {
        'inputA': {
          'data': [
            2.80570650100708,    5.588105201721191,   2.855226516723633,
            4.996258735656738,   0.9727277755737305,  -4.742599964141846,
            2.80570650100708,    5.588105201721191,   -5.107602119445801,
            6.624142169952393,   -2.3207247257232666, -7.053895950317383,
            2.80570650100708,    5.588105201721191,   4.980423927307129,
            -5.440841197967529,  1.1459590196609497,  7.774532794952393,
            2.80570650100708,    5.588105201721191,   -6.245251178741455,
            -2.8490731716156006, -2.6951117515563965, 5.817563056945801
          ],
          'descriptor': {shape: [24], dataType: 'float32'}
        },
        'inputB': {
          'data': [
            2.80570650100708,    5.588105201721191,  -4.839719772338867,
            4.996258735656738,   0.9727277755737305, -6.173707485198975,
            2.80570650100708,    5.588105201721191,  7.767369747161865,
            -4.308907985687256,  -5.895479679107666, -8.53209114074707,
            2.80570650100708,    5.588105201721191,  0.17833954095840454,
            -4.479541778564453,  0.6819732189178467, -6.6875128746032715,
            2.80570650100708,    5.588105201721191,  -9.041799545288086,
            -1.9728281497955322, -3.011512279510498, 3.6268343925476074
          ],
          'descriptor': {shape: [24], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'notEqual',
        'arguments': [{'a': 'inputA'}, {'b': 'inputB'}],
        'outputs': 'output'
      }],
      'expectedOutputs': {
        'output': {
          'data': [
            0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1,
            0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1
          ],
          'descriptor': {shape: [24], dataType: 'uint8'}
        }
      }
    }
  },
  {
    'name': 'notEqual float32 2D tensors',
    'graph': {
      'inputs': {
        'inputA': {
          'data': [
            2.80570650100708,    5.588105201721191,   2.855226516723633,
            4.996258735656738,   0.9727277755737305,  -4.742599964141846,
            2.80570650100708,    5.588105201721191,   -5.107602119445801,
            6.624142169952393,   -2.3207247257232666, -7.053895950317383,
            2.80570650100708,    5.588105201721191,   4.980423927307129,
            -5.440841197967529,  1.1459590196609497,  7.774532794952393,
            2.80570650100708,    5.588105201721191,   -6.245251178741455,
            -2.8490731716156006, -2.6951117515563965, 5.817563056945801
          ],
          'descriptor': {shape: [4, 6], dataType: 'float32'}
        },
        'inputB': {
          'data': [
            2.80570650100708,    5.588105201721191,  -4.839719772338867,
            4.996258735656738,   0.9727277755737305, -6.173707485198975,
            2.80570650100708,    5.588105201721191,  7.767369747161865,
            -4.308907985687256,  -5.895479679107666, -8.53209114074707,
            2.80570650100708,    5.588105201721191,  0.17833954095840454,
            -4.479541778564453,  0.6819732189178467, -6.6875128746032715,
            2.80570650100708,    5.588105201721191,  -9.041799545288086,
            -1.9728281497955322, -3.011512279510498, 3.6268343925476074
          ],
          'descriptor': {shape: [4, 6], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'notEqual',
        'arguments': [{'a': 'inputA'}, {'b': 'inputB'}],
        'outputs': 'output'
      }],
      'expectedOutputs': {
        'output': {
          'data': [
            0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1,
            0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1
          ],
          'descriptor': {shape: [4, 6], dataType: 'uint8'}
        }
      }
    }
  },
  {
    'name': 'notEqual float32 3D tensors',
    'graph': {
      'inputs': {
        'inputA': {
          'data': [
            2.80570650100708,    5.588105201721191,   2.855226516723633,
            4.996258735656738,   0.9727277755737305,  -4.742599964141846,
            2.80570650100708,    5.588105201721191,   -5.107602119445801,
            6.624142169952393,   -2.3207247257232666, -7.053895950317383,
            2.80570650100708,    5.588105201721191,   4.980423927307129,
            -5.440841197967529,  1.1459590196609497,  7.774532794952393,
            2.80570650100708,    5.588105201721191,   -6.245251178741455,
            -2.8490731716156006, -2.6951117515563965, 5.817563056945801
          ],
          'descriptor': {shape: [2, 3, 4], dataType: 'float32'}
        },
        'inputB': {
          'data': [
            2.80570650100708,    5.588105201721191,  -4.839719772338867,
            4.996258735656738,   0.9727277755737305, -6.173707485198975,
            2.80570650100708,    5.588105201721191,  7.767369747161865,
            -4.308907985687256,  -5.895479679107666, -8.53209114074707,
            2.80570650100708,    5.588105201721191,  0.17833954095840454,
            -4.479541778564453,  0.6819732189178467, -6.6875128746032715,
            2.80570650100708,    5.588105201721191,  -9.041799545288086,
            -1.9728281497955322, -3.011512279510498, 3.6268343925476074
          ],
          'descriptor': {shape: [2, 3, 4], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'notEqual',
        'arguments': [{'a': 'inputA'}, {'b': 'inputB'}],
        'outputs': 'output'
      }],
      'expectedOutputs': {
        'output': {
          'data': [
            0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1,
            0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1
          ],
          'descriptor': {shape: [2, 3, 4], dataType: 'uint8'}
        }
      }
    }
  },
  {
    'name': 'notEqual float32 4D tensors',
    'graph': {
      'inputs': {
        'inputA': {
          'data': [
            2.80570650100708,    5.588105201721191,   2.855226516723633,
            4.996258735656738,   0.9727277755737305,  -4.742599964141846,
            2.80570650100708,    5.588105201721191,   -5.107602119445801,
            6.624142169952393,   -2.3207247257232666, -7.053895950317383,
            2.80570650100708,    5.588105201721191,   4.980423927307129,
            -5.440841197967529,  1.1459590196609497,  7.774532794952393,
            2.80570650100708,    5.588105201721191,   -6.245251178741455,
            -2.8490731716156006, -2.6951117515563965, 5.817563056945801
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'float32'}
        },
        'inputB': {
          'data': [
            2.80570650100708,    5.588105201721191,  -4.839719772338867,
            4.996258735656738,   0.9727277755737305, -6.173707485198975,
            2.80570650100708,    5.588105201721191,  7.767369747161865,
            -4.308907985687256,  -5.895479679107666, -8.53209114074707,
            2.80570650100708,    5.588105201721191,  0.17833954095840454,
            -4.479541778564453,  0.6819732189178467, -6.6875128746032715,
            2.80570650100708,    5.588105201721191,  -9.041799545288086,
            -1.9728281497955322, -3.011512279510498, 3.6268343925476074
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'notEqual',
        'arguments': [{'a': 'inputA'}, {'b': 'inputB'}],
        'outputs': 'output'
      }],
      'expectedOutputs': {
        'output': {
          'data': [
            0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1,
            0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'uint8'}
        }
      }
    }
  },
  {
    'name': 'notEqual float32 5D tensors',
    'graph': {
      'inputs': {
        'inputA': {
          'data': [
            2.80570650100708,    5.588105201721191,   2.855226516723633,
            4.996258735656738,   0.9727277755737305,  -4.742599964141846,
            2.80570650100708,    5.588105201721191,   -5.107602119445801,
            6.624142169952393,   -2.3207247257232666, -7.053895950317383,
            2.80570650100708,    5.588105201721191,   4.980423927307129,
            -5.440841197967529,  1.1459590196609497,  7.774532794952393,
            2.80570650100708,    5.588105201721191,   -6.245251178741455,
            -2.8490731716156006, -2.6951117515563965, 5.817563056945801
          ],
          'descriptor': {shape: [2, 2, 1, 2, 3], dataType: 'float32'}
        },
        'inputB': {
          'data': [
            2.80570650100708,    5.588105201721191,  -4.839719772338867,
            4.996258735656738,   0.9727277755737305, -6.173707485198975,
            2.80570650100708,    5.588105201721191,  7.767369747161865,
            -4.308907985687256,  -5.895479679107666, -8.53209114074707,
            2.80570650100708,    5.588105201721191,  0.17833954095840454,
            -4.479541778564453,  0.6819732189178467, -6.6875128746032715,
            2.80570650100708,    5.588105201721191,  -9.041799545288086,
            -1.9728281497955322, -3.011512279510498, 3.6268343925476074
          ],
          'descriptor': {shape: [2, 2, 1, 2, 3], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'notEqual',
        'arguments': [{'a': 'inputA'}, {'b': 'inputB'}],
        'outputs': 'output'
      }],
      'expectedOutputs': {
        'output': {
          'data': [
            0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1,
            0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1
          ],
          'descriptor': {shape: [2, 2, 1, 2, 3], dataType: 'uint8'}
        }
      }
    }
  },
  {
    'name': 'notEqual float32 broadcast 0D to 4D',
    'graph': {
      'inputs': {
        'inputA': {
          'data': [2.80570650100708],
          'descriptor': {shape: [], dataType: 'float32'}
        },
        'inputB': {
          'data': [
            2.80570650100708,    5.588105201721191,   2.855226516723633,
            4.996258735656738,   0.9727277755737305,  -4.742599964141846,
            2.80570650100708,    5.588105201721191,   -5.107602119445801,
            6.624142169952393,   -2.3207247257232666, -7.053895950317383,
            2.80570650100708,    5.588105201721191,   4.980423927307129,
            -5.440841197967529,  1.1459590196609497,  7.774532794952393,
            2.80570650100708,    5.588105201721191,   -6.245251178741455,
            -2.8490731716156006, -2.6951117515563965, 5.817563056945801
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'notEqual',
        'arguments': [{'a': 'inputA'}, {'b': 'inputB'}],
        'outputs': 'output'
      }],
      'expectedOutputs': {
        'output': {
          'data': [
            0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1,
            0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'uint8'}
        }
      }
    }
  },
  {
    'name': 'notEqual float32 broadcast 1D to 4D',
    'graph': {
      'inputs': {
        'inputA': {
          'data': [2.80570650100708],
          'descriptor': {shape: [1], dataType: 'float32'}
        },
        'inputB': {
          'data': [
            2.80570650100708,    5.588105201721191,   2.855226516723633,
            4.996258735656738,   0.9727277755737305,  -4.742599964141846,
            2.80570650100708,    5.588105201721191,   -5.107602119445801,
            6.624142169952393,   -2.3207247257232666, -7.053895950317383,
            2.80570650100708,    5.588105201721191,   4.980423927307129,
            -5.440841197967529,  1.1459590196609497,  7.774532794952393,
            2.80570650100708,    5.588105201721191,   -6.245251178741455,
            -2.8490731716156006, -2.6951117515563965, 5.817563056945801
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'notEqual',
        'arguments': [{'a': 'inputA'}, {'b': 'inputB'}],
        'outputs': 'output'
      }],
      'expectedOutputs': {
        'output': {
          'data': [
            0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1,
            0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'uint8'}
        }
      }
    }
  },
  {
    'name': 'notEqual float32 broadcast 2D to 4D',
    'graph': {
      'inputs': {
        'inputA': {
          'data': [
            2.80570650100708,    5.588105201721191,   2.855226516723633,
            4.996258735656738,   0.9727277755737305,  -4.742599964141846,
            2.80570650100708,    5.588105201721191,   -5.107602119445801,
            6.624142169952393,   -2.3207247257232666, -7.053895950317383,
            2.80570650100708,    5.588105201721191,   4.980423927307129,
            -5.440841197967529,  1.1459590196609497,  7.774532794952393,
            2.80570650100708,    5.588105201721191,   -6.245251178741455,
            -2.8490731716156006, -2.6951117515563965, 5.817563056945801
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'float32'}
        },
        'inputB': {
          'data': [
            2.80570650100708, 5.588105201721191, -4.9622955322265625,
            -2.863192081451416, -3.011512279510498, 3.6268343925476074
          ],
          'descriptor': {shape: [2, 3], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'notEqual',
        'arguments': [{'a': 'inputA'}, {'b': 'inputB'}],
        'outputs': 'output'
      }],
      'expectedOutputs': {
        'output': {
          'data': [
            0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1,
            0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'uint8'}
        }
      }
    }
  },
  {
    'name': 'notEqual float32 broadcast 3D to 4D',
    'graph': {
      'inputs': {
        'inputA': {
          'data': [
            2.80570650100708,    5.588105201721191,   2.855226516723633,
            4.996258735656738,   0.9727277755737305,  -4.742599964141846,
            2.80570650100708,    5.588105201721191,   -5.107602119445801,
            6.624142169952393,   -2.3207247257232666, -7.053895950317383,
            2.80570650100708,    5.588105201721191,   4.980423927307129,
            -5.440841197967529,  1.1459590196609497,  7.774532794952393,
            2.80570650100708,    5.588105201721191,   -6.245251178741455,
            -2.8490731716156006, -2.6951117515563965, 5.817563056945801
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'float32'}
        },
        'inputB': {
          'data': [
            2.80570650100708, 5.588105201721191, -9.041799545288086,
            3.6268343925476074
          ],
          'descriptor': {shape: [2, 2, 1], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'notEqual',
        'arguments': [{'a': 'inputA'}, {'b': 'inputB'}],
        'outputs': 'output'
      }],
      'expectedOutputs': {
        'output': {
          'data': [
            0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'uint8'}
        }
      }
    }
  },
  {
    'name': 'notEqual float32 broadcast 4D to 4D',
    'graph': {
      'inputs': {
        'inputA': {
          'data': [2.80570650100708],
          'descriptor': {shape: [1, 1, 1, 1], dataType: 'float32'}
        },
        'inputB': {
          'data': [
            2.80570650100708,    5.588105201721191,   2.855226516723633,
            4.996258735656738,   0.9727277755737305,  -4.742599964141846,
            2.80570650100708,    5.588105201721191,   -5.107602119445801,
            6.624142169952393,   -2.3207247257232666, -7.053895950317383,
            2.80570650100708,    5.588105201721191,   4.980423927307129,
            -5.440841197967529,  1.1459590196609497,  7.774532794952393,
            2.80570650100708,    5.588105201721191,   -6.245251178741455,
            -2.8490731716156006, -2.6951117515563965, 5.817563056945801
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'notEqual',
        'arguments': [{'a': 'inputA'}, {'b': 'inputB'}],
        'outputs': 'output'
      }],
      'expectedOutputs': {
        'output': {
          'data': [
            0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1,
            0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'uint8'}
        }
      }
    }
  }
];

if (navigator.ml) {
  notEqualTests.forEach((test) => {
    webnn_conformance_test(
        buildAndExecuteGraph, getNotEqualPrecisionTolerance, test);
  });
} else {
  test(() => assert_implements(navigator.ml, 'missing navigator.ml'));
}
