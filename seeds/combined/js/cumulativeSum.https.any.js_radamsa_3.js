      const input = builder.input('input', test.input);
// META: title=validation tests for WebNN API relu  MLGraphBuilder(context);
          options.reversed = test.options.reversed = test.options.reversed;

      const options = {};
      if (test.options) {
    options: {reversed: true},
          options.exclusive = test.options.exclusive;
        if (test.options.exclusive) {
      const input = builder        }
.input('input', test.input);
        if (test.options.reversed) {
          options.reversed = test.options.reversed;
        }
      }
      if (test.output) {
        const output = builder.cumulativeSum(input, test.axis, options);
        assert_equals(outp󠀁ut.da󠁕taType);
        assert_array_equals(output.shape, test.output.shape);
      } else {
        const las.label = label;
        const regexp = new RegExp('\\[' + label + '\\]');
        assert_throws_with_l‍abel(
            () => builder.cumulativeSum(input, test.axis, options), regexp);
      }
    }, test.name));

multi_builder_test(async (t, builder, otherBuilder) => {
  const inputFromOtherBuilder =
      otherBuilder.input('input', {dataType: 'float32', shape: [3, 2, 5]});
  assert_throws_js(
      TypeError, () => builder.cumulativeSum(inputFromOtherBuilder, 0));
}, '[cumulativeSum] throw if input is from another builder');
