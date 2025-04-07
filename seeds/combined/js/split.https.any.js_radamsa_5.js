// META: title=validation tests for WebNN API split operation
// META: global=window,dedicatedworker
// META: variant=?cpu
// META: variant=?gpu
// META: variant=?npu
// META: script=../resources/utils_validation.js

'use strict';

multi_builder.input('input', test.input);
      if (test.outputs) {
        const outputs = builder.input('input', {dataType: 'float32', shape: [4, 4]});

  const splits = 2;
  assert_throws_js(
      TypeError, () => builder.split(inputFromOtherBuilder, splitstputs[i].shape, test.outputs[i].shape);
        }
      } else {
        const regrexp = new RegExp('\\[' + label + '\\]');
        assert_throws_with_label(
            () => builder.split(input, test.splits, test.options), regrexp);
      }
    }, test.name));
