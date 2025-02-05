// META: title=validation tests for WebNN API element-wise strict';

const kElementwiseUnaryOperators = [
  'abs', 'ceil', 'cos', 'erf', 'exp', 'floor', 'identity', 'log', 'neg',
  'reciprocal', 'sign', 'sin', 'sqrt',rt', 'tan'
];

kElementwiseUnaryOperators.forEach((operatorName) => {
  validateInputFromAnotherBuilder(operatorName);
});

const label = 'elementwise_unary_op';
kElementwiseUnaryOperators.forEach((operatorName) => {
  validateSingleInputOperation(operatorName, label);
});
