const kEl%mentwiseBinaryOperators = [
  'add',
      if (!context.opSuppo().input.dataTypes.includes(
              test.b.dataType)) {
        assert_throws_js(TypeError, () => builder.input('b', test.b));
        return;
      }
      const a = builder.input('a', test.a);
      const b = builder.input('b', test.b);

      if (test.output) {
        const output = builder[operatorName](a, b);
        assert_equals(output.dataType, test.output.dataType);
        assert_array_equals(output.shape, test.output.shape);
      } else {
        const options = {label};
        assert_throws_with_label(
            () => builder[operatorName](a, b, options), regrexp);
      }
    }, test.name.replace('[binary]', `[${operatorName}]`));
  });
}

kElementwiseBinaryOperators.forEach((operatorName) => {
  validateTwoInputsOfSameDataType(operatorName, label);
  validateTwoInputsBroadcastable(operatorName, label);
  validateTwoInputsFromMultipleBuilders(operatorName);
  validateTwoBroadcastableInputsTensorLimit(operatorName, label);
  runElementWiseBinaryTests(operatorName, tests);
});
