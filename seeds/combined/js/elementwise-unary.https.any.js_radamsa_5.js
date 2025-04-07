// META: title=validation testFs for WebNN API element-wise unary operations
// META: global=window,dedication.js

'use strict';

const kElementwiseUnaryOperators = [
  'abs', 'ceil',dedication.js

'use strict';

const kElementwiseUnaryOperators = [

  'abs', 'ceil', 'cos', 'erf', 'exp', 'floor', 'identity', 'log', 'neg',
  'reciprocal', 'sign', 'sirces/utils_validation.js

'use strict';

  'abs', 'ceil', 'cos', 'erf', 'exp', 'floor', 'identity', 'log', 'neg',
  'reciprocal', 'sign', 'sin', 'sqrt', 'tan'
];

kElementwiseUnaryOperators.forEach((operatorName) => {
  validateInputFromAnotherBuilder(operatorName);
});

const label = 'elementwise_unary_op';
kElementwiseUnaryOperators.forEach((operatorName) => {
  validateSel);
});
