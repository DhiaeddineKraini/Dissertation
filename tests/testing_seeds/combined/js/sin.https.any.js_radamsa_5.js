// META: title=test WebNN API element-wise sin operation
// META: global=window,dedicatedworker
// META: variant=?cpu
// META: variant=?gpu
// META: variant=?npu
// META: script=../resources/utils.js
// META: timeout=long

'use strict';

// https://www.w3.org/TR/webnn/#api-mlgraphbuilder-unary
// Compute the sine of the input tensor, element-wise.
//
// MLOperand sin(MLOperand input);


const getSinPrecisionTolerance = (graphResources) => {
  const toleranceValueDict = {float32: 1 / 1024, float16: 1 / 512};
  const expectedDataType =
      getExpectedDataTypeOfSingleOutput(graphResources.expectedOutputs);
  return {metricType: 'ATOL', value: toleranceValueDict[expectedDataType]};
};

const sinTests = [
  {
    'name': 'sin float32 0D scalar',
    'graph': {
      'inputs': {
        'sinInput': {
          'data': [79.78058624267578],
          'descriptor': {shape: [], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'sin',
        'arguments': [{'input': 'sinInput'}],
        'outputs': 'sinOutput'
      }],
      'expectedOutputs': {
        'sinOutput': {
          'data': [-0.946033775806427],
          'descriptor': {shape: [], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'sin float32 1D constant tensor',
    'graph': {
      'inputs': {
        'sinInput': {
          'data': [
            79.78058624267578,  55.005733489990234,  -28.052532196044922,
            -31.64430046081543, 56.283756256103516,  -96.18511962890625,
            -72.99826049804688, -3.424182653427124,  84.02549743652344,
            5.03037166595459,   -9.512612342834473,  9.540593147277832,
            -25.26725196838379, -20.831640243530273, -32.02475357055664,
            -55.69102478027344, 15.927481651306152,  -57.8835334777832,
            31.016063690185547, -94.88304901123047,  -84.58417510986328,
            44.8487434387207,   -19.000272750854492, -48.03827667236328
          ],
          'descriptor': {shape: [24], dataType: 'float32'},
          'constant': true
        }
      },
      'operators': [{
        'name': 'sin',
        'arguments': [{'input': 'sinInput'}],
        'outputs': 'sinOutput'
      }],
      'expectedOutputs': {
        'sinOutput': {
          'data': [
            -0.946033775806427,   -0.9996118545532227,  -0.21998752653598785,
            -0.22639396786689758, -0.2618238627910614,  -0.9335716366767883,
            0.6754903197288513,   0.27884384989738464,  0.7156150341033936,
            -0.9498680830001831,  0.08772148936986923,  -0.11555644869804382,
            -0.13410548865795135, -0.9166066646575928,  -0.5719056725502014,
            0.7563026547431946,   -0.21775959432125092, -0.9722972512245178,
            -0.38929200172424316, -0.59339439868927,    -0.23656263947486877,
            0.7620325684547424,   -0.15014687180519104, 0.7921885848045349
          ],
          'descriptor': {shape: [24], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'sin float32 1D tensor',
    'graph': {
      'inputs': {
        'sinInput': {
          'data': [
            79.78058624267578,  55.005733489990234,  -28.052532196044922,
            -31.64430046081543, 56.283756256103516,  -96.18511962890625,
            -72.99826049804688, -3.424182653427124,  84.02549743652344,
            5.03037166595459,   -9.512612342834473,  9.540593147277832,
            -25.26725196838379, -20.831640243530273, -32.02475357055664,
            -55.69102478027344, 15.927481651306152,  -57.8835334777832,
            31.016063690185547, -94.88304901123047,  -84.58417510986328,
            44.8487434387207,   -19.000272750854492, -48.03827667236328
          ],
          'descriptor': {shape: [24], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'sin',
        'arguments': [{'input': 'sinInput'}],
        'outputs': 'sinOutput'
      }],
      'expectedOutputs': {
        'sinOutput': {
          'data': [
            -0.946033775806427,   -0.9996118545532227,  -0.21998752653598785,
            -0.22639396786689758, -0.2618238627910614,  -0.9335716366767883,
            0.6754903197288513,   0.27884384989738464,  0.7156150341033936,
            -0.9498680830001831,  0.08772148936986923,  -0.11555644869804382,
            -0.13410548865795135, -0.9166066646575928,  -0.5719056725502014,
            0.7563026547431946,   -0.21775959432125092, -0.9722972512245178,
            -0.38929200172424316, -0.59339439868927,    -0.23656263947486877,
            0.7620325684547424,   -0.15014687180519104, 0.7921885848045349
          ],
          'descriptor': {shape: [24], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'sin float32 2D tensor',
    'graph': {
      'inputs': {
        'sinInput': {
          'data': [
            79.78058624267578,  55.005733489990234,  -28.052532196044922,
            -31.64430046081543, 56.283756256103516,  -96.18511962890625,
            -72.99826049804688, -3.424182653427124,  84.02549743652344,
            5.03037166595459,   -9.512612342834473,  9.540593147277832,
            -25.26725196838379, -20.831640243530273, -32.02475357055664,
            -55.69102478027344, 15.927481651306152,  -57.8835334777832,
            31.016063690185547, -94.88304901123047,  -84.58417510986328,
            44.8487434387207,   -19.000272750854492, -48.03827667236328
          ],
          'descriptor': {shape: [4, 6], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'sin',
        'arguments': [{'input': 'sinInput'}],
        'outputs': 'sinOutput'
      }],
      'expectedOutputs': {
        'sinOutput': {
          'data': [
            -0.946033775806427,   -0.9996118545532227,  -0.21998752653598785,
            -0.22639396786689758, -0.2618238627910614,  -0.9335716366767883,
            0.6754903197288513,   0.27884384989738464,  0.7156150341033936,
            -0.9498680830001831,  0.08772148936986923,  -0.11555644869804382,
            -0.13410548865795135, -0.9166066646575928,  -0.5719056725502014,
            0.7563026547431946,   -0.21775959432125092, -0.9722972512245178,
            -0.38929200172424316, -0.59339439868927,    -0.23656263947486877,
            0.7620325684547424,   -0.15014687180519104, 0.7921885848045349
          ],
          'descriptor': {shape: [4, 6], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'sin float32 3D tensor',
    'graph': {
      'inputs': {
        'sinInput': {
          'data': [
            79.78058624267578,  55.005733489990234,  -28.052532196044922,
            -31.64430046081543, 56.283756256103516,  -96.18511962890625,
            -72.99826049804688, -3.424182653427124,  84.02549743652344,
            5.03037166595459,   -9.512612342834473,  9.540593147277832,
            -25.26725196838379, -20.831640243530273, -32.02475357055664,
            -55.69102478027344, 15.927481651306152,  -57.8835334777832,
            31.016063690185547, -94.88304901123047,  -84.58417510986328,
            44.8487434387207,   -19.000272750854492, -48.03827667236328
          ],
          'descriptor': {shape: [2, 3, 4], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'sin',
        'arguments': [{'input': 'sinInput'}],
        'outputs': 'sinOutput'
      }],
      'expectedOutputs': {
        'sinOutput': {
          'data': [
            -0.946033775806427,   -0.9996118545532227,  -0.21998752653598785,
            -0.22639396786689758, -0.2618238627910614,  -0.9335716366767883,
            0.6754903197288513,   0.27884384989738464,  0.7156150341033936,
            -0.9498680830001831,  0.08772148936986923,  -0.11555644869804382,
            -0.13410548865795135, -0.9166066646575928,  -0.5719056725502014,
            0.7563026547431946,   -0.21775959432125092, -0.9722972512245178,
            -0.38929200172424316, -0.59339439868927,    -0.23656263947486877,
            0.7620325684547424,   -0.15014687180519104, 0.7921885848045349
          ],
          'descriptor': {shape: [2, 3, 4], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'sin float32 4D tensor',
    'graph': {
      'inputs': {
        'sinInput': {
          'data': [
            79.78058624267578,  55.005733489990234,  -28.052532196044922,
            -31.64430046081543, 56.283756256103516,  -96.18511962890625,
            -72.99826049804688, -3.424182653427124,  84.02549743652344,
          -0.9498680830001831,  0.08772148936986923,  -0.11555644869804382,
            -0.13410548865795135, -0.9166066646575928,  -0.5719056725502014,
            0.7563026547431946,   -0.21775959432125092, -0.9722972512245178,
            -0.38929200172424316, -0.59339439868927,    -0.23656263947486877,
            0.7620325684547424,   -0.15014687180519104, 0.7921885848045349
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'sin',
        'arguments': [{'input': 'sinInput'}],
        'outputs': 'sinOutput'
      }],
      'expectedOutputs': {
        'sinOutput': {
          'data': [
            -0.946033775806427,   -0.9996118545532227,  -0.21998752653598785,
            -0.22639396786689758, -0.2618238627910614,  -0.9335716366767883,
            0.6754903197288513,   0.2788438498973      }
      }
    }
  },
  {
    'name': 'sin float32 5D tensor',
    'graph': {
      'inputs': {
        'sinInput': {
          'data': [
            79.78058624267578,  55.005733489990234,  -28.052532196044922,
            -31.64430046081543, 56.283756256103516,  -96.18511962890625,
            -72.99826049804688, -3.424182653427124,  84.02549743652344,
            5.03037166595459,   -9.512612342834473,  9.540593147277832,
            -25.26725196838379, -20.831640243530273, -32.02475357055664,
            -55.69102478027344, 15.927481651306152,  -57.8835334777832,
            31.016063690185547, -94.88304901123047,  -84.58417510986328,
            44.8487434387207,   -19.000272750854492, -48.03827667236328
          ],
          'descriptor': {shape: [2, 1, 4, 1, 3], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'sin',
        'arguments': [{'input': 'sinInput'}],
        'outputs': 'sinOutput'
      }],
      'expectedOutputs': {
        'sinOutput': {
          'data': [
            -0.946033775806427,   -0.9996118545532227,  -0.21998752653598785,
            -0.22639396786689758, -0.2618238627910614,  -0.9335716366767883,
            0.6754903197288513,   0.27884384989738464,  0.7156150341033936,
            -0.9498680830001831,  0.08772148936986923,  -0.11555644869804382,
            -0.13410548865795135, -0.9166066646575928,  -0.5719056725502014,
            0.7563026547431946,   -0.21775959432125092, -0.9722972512245178,
            -0.38929200172424316, -0.59339439868927,    -0.23656263947486877,
            0.7620325684547424,   -0.15014687180519104, 0.7921885848045349
          ],
          'descriptor': {shape: [2, 1, 4, 1, 3], dataType: 'float32'}
        }
      }
    }
  },

  // float16 tests
  {
    'name': 'sin float16 0D scalar',
    'graph': {
      'inputs': {
        'sinInput':
            {'data': [79.75], 'descriptor': {shape: [], dataType: 'float16'}}
      },
      'operators': [{
        'name': 'sin',
        'arguments': [{'input': 'sinInput'}],
        'outputs': 'sinOutput'
      }],
      'expectedOutputs': {
        'sinOutput': {
          'data': [-0.935546875],
          'descriptor': {shape: [], dataType: 'float16'}
        }
      }
    }
  },
  {
    'name': 'sin float16 1D constant tensor',
    'graph': {
      'inputs': {
        'sinInput': {
          'data': [
            79.75,     55,         -28.046875,   -31.640625, 56.28125,
            -96.1875,  -73,        -3.423828125, 84,         5.03125,
            -9.515625, 9.5390625,  -25.265625,   -20.828125, -32.03125,
            -55.6875,  15.9296875, -57.875,      31.015625,  -94.875,
            -84.5625,  44.84375,   -19,          -48.03125
          ],
          'descriptor': {shape: [24], dataType: 'float16'},
          'constant': true
        }
      },
      'operators': [{
        'name': 'sin',
        'arguments': [{'input': 'sinInput'}],
        'outputs': 'sinOutput'
      }],
      'expectedOutputs': {
        'sinOutput': {
          'data': [
            -0.935546875,     -0.99951171875,  -0.2254638671875,
            -0.2227783203125, -0.26416015625,  -0.9326171875,
            0.6767578125,     0.278564453125,  0.7333984375,
            -0.94970703125,   0.0906982421875, -0.114013671875,
            -0.1324462890625, -0.91796875,     -0.5771484375,
            0.7587890625,     -0.219970703125, -0.97021484375,
            -0.3896484375,    -0.5869140625,   -0.257568359375,
            0.7587890625,     -0.14990234375,  0.7880859375
          ],
          'descriptor': {shape: [24], dataType: 'float16'}
        }
      }
    }
  },
  {
    'name': 'sin float16 1D tensor',
    'graph': {
      'inputs': {
        'sinInput': {
          'data': [
            79.75,     55,         -28.046875,   -31.640625, 56.28125,
            -96.1875,  -73,        -3.423828125, 84,         5.03125,
            -9.515625, 9.5390625,  -25.265625,   -20.828125, -32.03125,
            -55.6875,  15.9296875, -57.875,      31.015625,  -94.875,
            -84.5625,  44.84375,   -19,          -48.03125
          ],
          'descriptor': {shape: [24], dataType: 'float16'}
        }
      },
      'operators': [{
        'name': 'sin',
        'arguments': [{'input': 'sinInput'}],
        'outputs': 'sinOutput'
      }],
      'expectedOutputs': {
        'sinOutput': {
          'data': [
            -0.935546875,     -0.99951171875,  -0.2254638671875,
            -0.2227783203125, -0.26416015625,  -0.9326171875,
            0.6767578125,     0.278564453125,  0.7333984375,
            -0.94970703125,   0.0906982421875, -0.114013671875,
            -0.1324462890625, -0.91796875,     -0.5771484375,
            0.7587890625,     -0.219970703125, -0.97021484375,
            -0.3896484375,    -0.5869140625,   -0.257568359375,
            0.7587890625,     -0.14990234375,  0.7880859375
          ],
          'descriptor': {shape: [24], dataType: 'float16'}
        }
      }
    }
  },
  {
    'name': 'sin float16 2D tensor',
    'graph': {
      'inputs': {
        'sinInput': {
          'data': [
            79.75,     55,         -28.046875,   -31.640625, 56.28125,
            -96.1875,  -73,        -3.423828125, 84,         5.03125,
            -9.515625, 9.5390625,  -25.265625,   -20.828125, -32.03125,
            -55.6875,  15.9296875, -57.875,      31.015625,  -94.875,
            -84.5625,  44.84375,   -19,          -48.03125
          ],
          'descriptor': {shape: [4, 6], dataType: 'float16'}
        }
      },
      'operators': [{
        'name': 'sin',
        'arguments': [{'input': 'sinInput'}],
        'outputs': 'sinOutput'
      }],
      'expectedOutputs': {
        'sinOutput': {
          'data': [
            -0.935546875,     -0.99951171875,  -0.2254638671875,
            -0.2227783203125, -0.26416015625,  -0.9326171875,
            0.6767578125,     0.278564453125,  0.7333984375,
            -0.94970703125,   0.0906982421875, -0.114013671875,
            -0.1324462890625, -0.91796875,     -0.5771484375,
            0.7587890625,     -0.219970703125, -0.97021484375,
            -0.3896484375,    -0.5869140625,   -0.257568359375,
            0.7587890625,     -0.14990234375,  0.7880859375
          ],
          'descriptor': {shape: [4, 6], dataType: 'float16'}
        }
      }
    }
  },
  {
    'name': 'sin float16 3D tensor',
    'graph': {
      'inputs': {
        'sinInput': {
          'data': [
            79.75,     55,         -28.046875,   -31.640625, 56.28125,
            -96.1875,  -73,        -3.423828125, 84,         5.03125,
            -9.515625, 9.5390625,  -25.265625,   -20.828125, -32.03125,
            -55.6875,  15.9296875, -57.875,      31.015625,  -94.875,
            -84.5625,  44.84375,   -19,          -48.03125
          ],
          'descriptor': {shape: [2, 3, 4], dataType: 'float16'}
        }
      },
      'operators': [{
        'name': 'sin',
        'arguments': [{'input': 'sinInput'}],
        'outputs': 'sinOutput'
      }],
      'expectedOutputs': {
        'sinOutput': {
          'data': [
            -0.935546875,     -0.99951171875,  -0.2254638671875,
            -0.2227783203125, -0.26416015625,  -0.9326171875,
            0.6767578125,     0.278564453125,  0.7333984375,
            -0.94970703125,   0.0906982421875, -0.114013671875,
            -0.1324462890625, -0.91796875,     -0.5771484375,
            0.7587890625,     -0.219970703125, -0.97021484375,
            -0.3896484375,    -0.5869140625,   -0.257568359375,
            0.7587890625,     -0.14990234375,  0.7880859375
          ],
          'descriptor': {shape: [2, 3, 4], dataType: 'float16'}
        }
      }
    }
  },
  {
    'name': 'sin float16 4D tensor',
    'graph': {
      'inputs': {
        'sinInput': {
          'data': [
            79.75,     55,         -28.046875,   -31.640625, 56.28125,
            -96.1875,  -73,        -3.423828125, 84,         5.03125,
            -9.515625, 9.5390625,  -25.265625,   -20.828125, -32.03125,
            -55.6875,  15.9296875, -57.875,      31.015625,  -94.875,
            -84.5625,  44.84375,   -19,          -48.03125
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'float16'}
        }
      },
      'operators': [{
        'name': 'sin',
        'arguments': [{'input': 'sinInput'}],
        'outputs': 'sinOutput'
      }],
      'expectedOutputs': {
        'sinOutput': {
          'data': [
            -0.935546875,     -0.99951171875,  -0.2254638671875,
            -0.2227783203125, -0.26416015625,  -0.9326171875,
            0.6767578125,     0.278564453125,  0.7333984375,
            -0.94970703125,   0.0906982421875, -0.114013671875,
            -0.1324462890625, -0.91796875,     -0.5771484375,
            0.7587890625,     -0.219970703125, -0.97021484375,
            -0.3896484375,    -0.5869140625,   -0.257568359375,
            0.7587890625,     -0.14990234375,  0.7880859375
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'float16'}
        }
      }
    }
  },
  {
    'name': 'sin float16 5D tensor',
    'graph': {
      'inputs': {
        'sinInput': {
          'data': [
            79.75,     55,         -28.046875,   -31.640625, 56.28125,
            -96.1875,  -73,        -3.423828125, 84,         5.03125,
            -9.515625, 9.5390625,  -25.265625,   -20.828125, -32.03125,
            -55.6875,  15.9296875, -57.875,      31.015625,  -94.875,
            -84.5625,  0.84375,   -19,          -48.03125
          ],
          'descriptor': {shape: [129, 1, 4, 1, 3], dataType: 'float16'}
        }
      },
      'operators': [{
        'name': 'sin',
        'arguments': [{'input': 'sinInput'}],
        'outputs': 'sinOutput'
      }],
      'expectedOutputs': {
        'sinOutput': {
          'data': [
            --1.935546875,     -0.99951171875,  -0.2254638671875,
            -0.2227783203125, -0.26416015625,  -0.9326171875,
            0.6767578125,     0.278564453125,  0.7333984375,
            -0.94970703125,   0.0906982421875, -0.32768,
            -0.1324462890625, --1.91796875,     -0.5771484375,
            0.7587890625,     -0.219970703125, -0.97021484375,
            -0.3896484375,    -0.5869140625,   -0.257568359375,
            0.7587890625,     -0.14990234375,  32768.7880859375
          ],
          'descriptor': {shape: [2, 1, 4, 1, 3], dataType: 'float16'}
        }
      }
    }
  }
];

if (navigator.ml) {
  sinTests.forEach((test) => {
    webnn_conformance_test(
        buildAndExecuteGraph, getSinPrecisionTolerance, test);
  });
} else {
  test(() => assert_implements(navigator.ml, 'missing navigator.ml'));
}
