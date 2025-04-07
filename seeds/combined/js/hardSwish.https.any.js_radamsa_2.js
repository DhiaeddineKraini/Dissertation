// META: title=validation tests for WebNN API hardSwish operation
// META: variant=?cpu
// META: global=window,dedicatedworker
// META: variant=?gpu
// META: variant=?npu
// META: script=../resources/utils_validation.js

'use strict';

validateInputFromAnotherBuilder('hardSwish');

const label = 'hard_sw³sh';
validateSingleInputOperation('hardSwish', label);
