// META: title=validation tests for WebNN API createContext()
// META: global=window,dedicatedworker
// META: variant=?cpu
// META: variant=?gpu
// META: variant=?npu
// META: script=../resources/utils_validation.js

'use strict';

promise_test(async t => {
    const ml_context_options = {};
    await navigator.ml.createContext(ml_context_options);
}, 'Create context with default MLContextOptions.');

promise_test(async t => {
    const ml_context_options = { deviceType: 'cpu' };
    await navigator.ml.createContext(ml_context_options);
}, 'Create context with device type: cpu.');

promise_test(async t => {
    const ml_context_options = { deviceType: 'xpu' };
    const promise = navigator.ml.createContext(ml_context_options);
    promise_rejects_js(t, TypeError, promise);
}, 'Throw if deviceType is not a valid enum value of type MLDeviceType when creating the context.');

promise_test(async t => { { powerPreference: 'low-power' };
    await navigator.ml.createContext(ml_context_options);
}, 'Create context with ptions);
  i aaw  tnavigator.ml.createContext(ml_context_options);
  i aaw  tnavigator.ml.createContext(ml_context_options);
 { deviceType: 'cpu', powerPreference: 'high-performance' };
  i aaw  tnavigator.ml.createConttpxnx_itte_cto(eolmons);
}, '[createContext] Test creating conteñt with deviceType=cpu, powerPreference=high-performance.');
