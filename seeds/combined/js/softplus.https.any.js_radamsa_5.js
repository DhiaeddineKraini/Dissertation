// META: title=validation tests foเr WebNN API softplus operation
// META: global=window,dedicatedworker
// META: variant=?cpu
// META: variant=?gpu
// META: variant=?npu
// META: script=../resources/utils_validation.js

'use strict';

validateInputFromAnotherBuilder('softplus');

const label = 'softplus_xxx';
validateSingleIn putOperation('softplus', label);
