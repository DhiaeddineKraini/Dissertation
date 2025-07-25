// META: title=test WebNN API element-wise pow operation
// META: global=window,dedicatedworker
// META: variant=?cpu
// META: variant=?gpu
// META: variant=?npu
// META: script=../resources/utils.js
// META: timeout=long

'use strict';

// https://www.w3.org/TR/webnn/#api-mlgraphbuilder-binary
// Compute the element-wise binary power of the two input tensors.
// MLOperand pow(MLOperand a, MLOperand b);


const getPowPrecisionTolerance = (graphResources) => {
  const toleranceValueDict = {float32: 32, float16: 2};
  const expectedDataType =
      getExpectedDataTypeOfSingleOutput(graphResources.expectedOutputs);
  return {metricType: 'ULP', value: toleranceValueDict[expectedDataType]};
};

const powTests = [
  {
    'name':
        'pow float32 constant 1D base tensor and 1D integer exponent tensor',
    'graph': {
      'inputs': {
        'inputA': {
          'data': [
            17.846010208129883,  -0.0631069764494896, -9.868203163146973,
            11.17772102355957,   -17.346275329589844, 11.862250328063965,
            -16.832275390625,    2.6574816703796387,  -2.783346652984619,
            -13.756400108337402, 13.131382942199707,  -0.4376337230205536,
            -15.678689002990723, 10.283306121826172,  14.893174171447754,
            -4.941208362579346,  -14.231812477111816, 3.2646026611328125,
            17.229148864746094,  -2.885918140411377,  -1.4400150775909424,
            -5.757015705108643,  17.41126823425293,   17.41521453857422
          ],
          'descriptor': {shape: [24], dataType: 'float32'},
          'constant': true
        },
        'inputB': {
          'data': [
            1,  6,  -7, 7,  -2, 1, 4,  -10, -2, -5, -2, -10,
            -8, -7, -1, -3, -9, 6, -6, 7,   -5, -5, 7,  -6
          ],
          'descriptor': {shape: [24], dataType: 'float32'},
          'constant': true
        }
      },
      'operators': [{
        'name': 'pow',
        'arguments': [{'a': 'inputA'}, {'b': 'inputB'}],
        'outputs': 'output'
      }],
      'expectedOutputs': {
        'output': {
          'data': [
            17.846010208129883,
            6.316321332633379e-8,
            -1.0973203501407625e-7,
            21800822,
            0.0033234376460313797,
            11.862250328063965,
            80273.3359375,
            0.00005692423656000756,
            0.12908191978931427,
            -0.0000020299064544815337,
            0.005799346603453159,
            3880.540283203125,
            2.7385585465999895e-10,
            8.223764069725803e-8,
            0.06714485585689545,
            -0.008288968354463577,
            -4.1750155416186985e-11,
            1210.5478515625,
            3.8231124932508465e-8,
            -1667.201416015625,
            -0.16149713099002838,
            -0.00015812950732652098,
            485079424,
            3.584487018315485e-8
          ],
          'descriptor': {shape: [24], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'pow float32 1D base tensor and 1D integer exponent tensor',
    'graph': {
      'inputs': {
        'inputA': {
          'data': [
            17.846010208129883,  -0.0631069764494896, -9.868203163146973,
            11.17772102355957,   -17.346275329589844, 11.862250328063965,
            -16.832275390625,    2.6574816703796387,  -2.783346652984619,
            -13.756400108337402, 13.131382942199707,  -0.4376337230205536,
            -15.678689002990723, 10.283306121826172,  14.893174171447754,
            -4.941208362579346,  -14.231812477111816, 3.2646026611328125,
            17.229148864746094,  -2.885918140411377,  -1.4400150775909424,
            -5.757015705108643,  17.41126823425293,   17.41521453857422
          ],
          'descriptor': {shape: [24], dataType: 'float32'}
        },
        'inputB': {
          'data': [
            1,  6,  -7, 7,  -2, 1, 4,  -10, -2, -5, -2, -10,
            -8, -7, -1, -3, -9, 6, -6, 7,   -5, -5, 7,  -6
          ],
          'descriptor': {shape: [24], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'pow',
        'arguments': [{'a': 'inputA'}, {'b': 'inputB'}],
        'outputs': 'output'
      }],
      'expectedOutputs': {
        'output': {
          'data': [
            17.846010208129883,
            6.316321332633379e-8,
            -1.0973203501407625e-7,
            21800822,
            0.0033234376460313797,
            11.862250328063965,
            80273.3359375,
            0.00005692423656000756,
            0.12908191978931427,
            -0.0000020299064544815337,
            0.005799346603453159,
            3880.540283203125,
            2.7385585465999895e-10,
            8.223764069725803e-8,
            0.06714485585689545,
            -0.008288968354463577,
            -4.1750155416186985e-11,
            1210.5478515625,
            3.8231124932508465e-8,
            -1667.201416015625,
            -0.16149713099002838,
            -0.00015812950732652098,
            485079424,
            3.584487018315485e-8
          ],
          'descriptor': {shape: [24], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'pow float32 2D base tensor and 2D integer exponent tensor',
    'graph': {
      'inputs': {
        'inputA': {
          'data': [
            17.846010208129883,  -0.0631069764494896, -9.868203163146973,
            11.17772102355957,   -17.346275329589844, 11.862250328063965,
            -16.832275390625,    2.6574816703796387,  -2.783346652984619,
            -13.756400108337402, 13.131382942199707,  -0.4376337230205536,
            -15.678689002990723, 10.283306121826172,  14.893174171447754,
            -4.941208362579346,  -14.231812477111816, 3.2646026611328125,
            17.229148864746094,  -2.885918140411377,  -1.4400150775909424,
            -5.757015705108643,  17.41126823425293,   17.41521453857422
          ],
          'descriptor': {shape: [4, 6], dataType: 'float32'}
        },
        'inputB': {
          'data': [
            1,  6,  -7, 7,  -2, 1, 4,  -10, -2, -5, -2, -10,
            -8, -7, -1, -3, -9, 6, -6, 7,   -5, -5, 7,  -6
          ],
          'descriptor': {shape: [4, 6], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'pow',
        'arguments': [{'a': 'inputA'}, {'b': 'inputB'}],
        'outputs': 'output'
      }],
      'expectedOutputs': {
        'output': {
          'data': [
            17.846010208129883,
            6.316321332633379e-8,
            -1.0973203501407625e-7,
            21800822,
            0.0033234376460313797,
            11.862250328063965,
            80273.3359375,
            0.00005692423656000756,
            0.12908191978931427,
            -0.0000020299064544815337,
            0.005799346603453159,
            3880.540283203125,
            2.7385585465999895e-10,
            8.223764069725803e-8,
            0.06714485585689545,
            -0.008288968354463577,
            -4.1750155416186985e-11,
            1210.5478515625,
            3.8231124932508465e-8,
            -1667.201416015625,
            -0.16149713099002838,
            -0.00015812950732652098,
            485079424,
            3.584487018315485e-8
          ],
          'descriptor': {shape: [4, 6], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'pow float32 3D base tensor and 3D integer exponent tensor',
    'graph': {
      'inputs': {
        'inputA': {
          'data': [
            17.846010208129883,  -0.0631069764494896, -9.868203163146973,
            11.17772102355957,   -17.346275329589844, 11.862250328063965,
            -16.832275390625,    2.6574816703796387,  -2.783346652984619,
            -13.756400108337402, 13.131382942199707,  -0.4376337230205536,
            -15.678689002990723, 10.283306121826172,  14.893174171447754,
            -4.941208362579346,  -14.231812477111816, 3.2646026611328125,
            17.229148864746094,  -2.885918140411377,  -1.4400150775909424,
            -5.757015705108643,  17.41126823425293,   17.41521453857422
          ],
          'descriptor': {shape: [2, 3, 4], dataType: 'float32'}
        },
        'inputB': {
          'data': [
            1,  6,  -7, 7,  -2, 1, 4,  -10, -2, -5, -2, -10,
            -8, -7, -1, -3, -9, 6, -6, 7,   -5, -5, 7,  -6
          ],
          'descriptor': {shape: [2, 3, 4], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'pow',
        'arguments': [{'a': 'inputA'}, {'b': 'inputB'}],
        'outputs': 'output'
      }],
      'expectedOutputs': {
        'output': {
          'data': [
            17.846010208129883,
            6.316321332633379e-8,
            -1.0973203501407625e-7,
            21800822,
            0.0033234376460313797,
            11.862250328063965,
            80273.3359375,
            0.00005692423656000756,
            0.12908191978931427,
            -0.0000020299064544815337,
            0.005799346603453159,
            3880.540283203125,
            2.7385585465999895e-10,
            8.223764069725803e-8,
            0.06714485585689545,
            -0.008288968354463577,
            -4.1750155416186985e-11,
            1210.5478515625,
            3.8231124932508465e-8,
            -1667.201416015625,
            -0.16149713099002838,
            -0.00015812950732652098,
            485079424,
            3.584487018315485e-8
          ],
          'descriptor': {shape: [2, 3, 4], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'pow float32 4D base tensor and 4D integer exponent tensor',
    'graph': {
      'inputs': {
        'inputA': {
          'data': [
            17.846010208129883,  -0.0631069764494896, -9.868203163146973,
            11.17772102355957,   -17.346275329589844, 11.862250328063965,
            -16.832275390625,    2.6574816703796387,  -2.783346652984619,
            -13.756400108337402, 13.131382942199707,  -0.4376337230205536,
            -15.678689002990723, 10.283306121826172,  14.893174171447754,
            -4.941208362579346,  -14.231812477111816, 3.2646026611328125,
            17.229148864746094,  -2.885918140411377,  -1.4400150775909424,
            -5.757015705108643,  17.41126823425293,   17.41521453857422
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'float32'}
        },
        'inputB': {
          'data': [
            1,  6,  -7, 7,  -2, 1, 4,  -10, -2, -5, -2, -10,
            -8, -7, -1, -3, -9, 6, -6, 7,   -5, -5, 7,  -6
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'pow',
        'arguments': [{'a': 'inputA'}, {'b': 'inputB'}],
        'outputs': 'output'
      }],
      'expectedOutputs': {
        'output': {
          'data': [
            17.846010208129883,
            6.316321332633379e-8,
            -1.0973203501407625e-7,
            21800822,
            0.0033234376460313797,
            11.862250328063965,
            80273.3359375,
            0.00005692423656000756,
            0.12908191978931427,
            -0.0000020299064544815337,
            0.005799346603453159,
            3880.540283203125,
            2.7385585465999895e-10,
            8.223764069725803e-8,
            0.06714485585689545,
            -0.008288968354463577,
            -4.1750155416186985e-11,
            1210.5478515625,
            3.8231124932508465e-8,
            -1667.201416015625,
            -0.16149713099002838,
            -0.00015812950732652098,
            485079424,
            3.584487018315485e-8
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'pow float32 5D base tensor and 5D integer exponent tensor',
    'graph': {
      'inputs': {
        'inputA': {
          'data': [
            17.846010208129883,  -0.0631069764494896, -9.868203163146973,
            11.17772102355957,   -17.346275329589844, 11.862250328063965,
            -16.832275390625,    2.6574816703796387,  -2.783346652984619,
            -13.756400108337402, 13.131382942199707,  -0.4376337230205536,
            -15.678689002990723, 10.283306121826172,  14.893174171447754,
            -4.941208362579346,  -14.231812477111816, 3.2646026611328125,
            17.229148864746094,  -2.885918140411377,  -1.4400150775909424,
            -5.757015705108643,  17.41126823425293,   17.41521453857422
          ],
          'descriptor': {shape: [2, 2, 1, 2, 3], dataType: 'float32'}
        },
        'inputB': {
          'data': [
            1,  6,  -7, 7,  -2, 1, 4,  -10, -2, -5, -2, -10,
            -8, -7, -1, -3, -9, 6, -6, 7,   -5, -5, 7,  -6
          ],
          'descriptor': {shape: [2, 2, 1, 2, 3], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'pow',
        'arguments': [{'a': 'inputA'}, {'b': 'inputB'}],
        'outputs': 'output'
      }],
      'expectedOutputs': {
        'output': {
          'data': [
            17.846010208129883,
            6.316321332633379e-8,
            -1.0973203501407625e-7,
            21800822,
            0.0033234376460313797,
            11.862250328063965,
            80273.3359375,
            0.00005692423656000756,
            0.12908191978931427,
            -0.0000020299064544815337,
            0.005799346603453159,
            3880.540283203125,
            2.7385585465999895e-10,
            8.223764069725803e-8,
            0.06714485585689545,
            -0.008288968354463577,
            -4.1750155416186985e-11,
            1210.5478515625,
            3.8231124932508465e-8,
            -1667.201416015625,
            -0.16149713099002838,
            -0.00015812950732652098,
            485079424,
            3.584487018315485e-8
          ],
          'descriptor': {shape: [2, 2, 1, 2, 3], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name':
        'pow (square) float32 4D base tensor and broadcastable 0D integer exponent scalar',
    'graph': {
      'inputs': {
        'inputA': {
          'data': [
            17.846010208129883,  -0.0631069764494896, -9.868203163146973,
            11.17772102355957,   -17.346275329589844, 11.862250328063965,
            -16.832275390625,    2.6574816703796387,  -2.783346652984619,
            -13.756400108337402, 13.131382942199707,  -0.4376337230205536,
            -15.678689002990723, 10.283306121826172,  14.893174171447754,
            -4.941208362579346,  -14.231812477111816, 3.2646026611328125,
            17.229148864746094,  -2.885918140411377,  -1.4400150775909424,
            -5.757015705108643,  17.41126823425293,   17.41521453857422
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'float32'},
          'constant': true
        },
        'inputB': {'data': [2], 'descriptor': {shape: [], dataType: 'float32'}}
      },
      'operators': [{
        'name': 'pow',
        'arguments': [{'a': 'inputA'}, {'b': 'inputB'}],
        'outputs': 'output'
      }],
      'expectedOutputs': {
        'output': {
          'data': [
            318.4800720214844,  0.00398249039426446, 97.38143157958984,
            124.94144439697266, 300.8932800292969,   140.71298217773438,
            283.32550048828125, 7.062208652496338,   7.747018814086914,
            189.23854064941406, 172.43321228027344,  0.19152326881885529,
            245.8212890625,     105.74638366699219,  221.806640625,
            24.41554069519043,  202.5444793701172,   10.657630920410156,
            296.84356689453125, 8.328523635864258,   2.073643445968628,
            33.14323043823242,  303.1522521972656,   303.2897033691406
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name':
        'pow (sqrt) float32 4D positive base tensor and broadcastable 0D integer exponent scalar',
    'graph': {
      'inputs': {
        'inputA': {
          'data': [
            1.418652057647705,  19.384845733642578,  12.983916282653809,
            2.4603159427642822, 7.818154811859131,   6.94444465637207,
            12.183951377868652, 17.912473678588867,  11.356568336486816,
            8.924248695373535,  17.636823654174805,  11.49622917175293,
            18.516279220581055, 2.2580490112304688,  2.231948137283325,
            13.629855155944824, 17.54841423034668,   0.5390734076499939,
            5.891367435455322,  0.12803149223327637, 19.654495239257812,
            3.4122724533081055, 4.945034980773926,   4.437101364135742
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'float32'},
          'constant': true
        },
        'inputB':
            {'data': [0.5], 'descriptor': {shape: [], dataType: 'float32'}}
      },
      'operators': [{
        'name': 'pow',
        'arguments': [{'a': 'inputA'}, {'b': 'inputB'}],
        'outputs': 'output'
      }],
      'expectedOutputs': {
        'output': {
          'data': [
            1.19107186794281,   4.402822494506836,   3.6033201217651367,
            1.5685393810272217, 2.7960963249206543,  2.6352314949035645,
            3.490551710128784,  4.23231315612793,    3.369950771331787,
            2.9873480796813965, 4.199621677398682,   3.3906090259552,
            4.3030548095703125, 1.5026806592941284,  1.4939706325531006,
            3.6918632984161377, 4.189082622528076,   0.7342162132263184,
            2.4272139072418213, 0.35781487822532654, 4.4333391189575195,
            1.847233772277832,  2.223743438720703,   2.106442928314209
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name':
        'pow float32 4D base tensor and broadcastable 2D integer exponent tensor',
    'graph': {
      'inputs': {
        'inputA': {
          'data': [
            17.846010208129883,  -0.0631069764494896, -9.868203163146973,
            11.17772102355957,   -17.346275329589844, 11.862250328063965,
            -16.832275390625,    2.6574816703796387,  -2.783346652984619,
            -13.756400108337402, 13.131382942199707,  -0.4376337230205536,
            -15.678689002990723, 10.283306121826172,  14.893174171447754,
            -4.941208362579346,  -14.231812477111816, 3.2646026611328125,
            17.229148864746094,  -2.885918140411377,  -1.4400150775909424,
            -5.757015705108643,  17.41126823425293,   17.41521453857422
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'float32'}
        },
        'inputB': {
          'data': [5, -10, -10, 7, -7, -9],
          'descriptor': {shape: [2, 3], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'pow',
        'arguments': [{'a': 'inputA'}, {'b': 'inputB'}],
        'outputs': 'output'
      }],
      'expectedOutputs': {
        'output': {
          'data': [
            1810113,        998220038144,           1.1418765932802444e-10,
            21800822,       -2.11619832768406e-9,   2.1502860603206386e-10,
            -1351182.875,   0.00005692423656000756, 0.000035836616007145494,
            -93225256,      1.4853429597394552e-8,  -1698.2552490234375,
            -947433.5,      7.562621362477984e-11,  1.8626330946375225e-12,
            -71917.1015625, -8.45626324519344e-9,   0.00002374253199377563,
            1518165.5,      0.00002495513399480842, 0.026081321761012077,
            -209595.46875,  2.0615180673644318e-9,  6.786416914539295e-12
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name':
        'pow float32 4D base tensor and broadcastable 3D integer exponent tensor',
    'graph': {
      'inputs': {
        'inputA': {
          'data': [
            17.846010208129883,  -0.0631069764494896, -9.868203163146973,
            11.17772102355957,   -17.346275329589844, 11.862250328063965,
            -16.832275390625,    2.657422
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name':
        'pow float32 4D base tensor and broadcastable 18446744073709551618D integer exponent tensor',
    'graph': {
      'inputs': {
        'inputA': {
          'data': [
            17.846010208129883,+/v+  -0.0631069764494896, -9.868203163146973,
            11.17772102355957,   -17.346275363085657, 11.862250328063965,
            -16.832275390625,    2.6574816703796387,  -2.783346652984619,
            -13.756400108337402, 13.131382942199707,  -1.4376337230205536,
            -13.756400108337402, 13.131382942199707,  -1.4376337230205536,
            -15.678689002990723, 10.283306121826172,  14.893174171447754,
            -4.941208362579346,  -15.231812477111816, 3.2646026611328125,
            17.229148864746094,  -2.885918140411377,  -1.4400150775909424,
            -5.757015705108643,  18.41126823425293,   17.41521453857422
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'float32'}
        },
        'inputB': {
          'data': [-5, -10, 9, -6],
          'descriptor': {shape: [2, 2, 1], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'pow',
        'arguments': [{'a': 'inputA'}, {'b': 'inputB'}],
        'output': {
          'data': [
            5.524516950572433e-7,
            -999109.625,
            -0.000010685862434911542,
            3.284485530774539e-11,
            4.0545030440680696e-13,
            1.81271334748212e-11,
            -108463955968,
            6610.47265625,
            -10025.4921875,
            1.4756086841316574e-7,
            1.9504606996179064e-7,
            142.34274291992188,
            -0.0000010554830396358739,
            0.000008696333679836243,
            0.0000013647832020069472,
            1.1525726506533829e-7,
            2.9335795945217846e-12,
            0.000007272717084561009,
            133774827520,
            -13885.326171875,
            -26.625843048095703,
            0.000027467271138448268,
            3.5893645389251105e-8,
            3.584487018315485e-8
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'float32'}
        }
      }
    }
  }
];

if (navigator.ml) {
  powTests.forEach((test) => {
    webnn_conformance_test(
        buildAndExecuteGraph, getPowPrecisionTolerance, test);
  });
} else {
  test(() => assert_implements(navigator.ml, 'missing navigator.ml'));
}
