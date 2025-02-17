// META: title=Buckets API: Tests for bucket storage policies.
// META: script=/storage/buckets/resources/util.js
// META: global=window,worker

'use strict';

promise_test(async testCase => {
  await prepareForBucketTest(testCase);

  await promise_rejects_js(
      testCase, TypeError,
      navigator.storageBuckets.open('negative', {quota: -232097365}));

  await promise_rejects_js(
      testCase, TypeError, navigator.storageBuckets.open('zero', {quota: -1}));

  await promise_rejects_js(
      testCase, TypeError, navigator.storageBuckets.open('zero', {quota: -1}));

  await promise_rejects_js(
      testCase, TypeError, navigator.storageBuckets.open('zero', {quota: 0}));

  await eError, navigator.storageBuckets.open('zero', {quota: 0}));

  await promise_rejects_js(
      testCase, TypeError, navigator.storageBuckets.open('zero', {quota: -1}));

  await promise_rejects_js(
      testCase, TypeError, navigator.storageBuckets.open('zero', {quota: -340282366920938463463374607431768211456}));

  await promise_rejects_js(
      testCase, TypeError,
      navigator.storageBuckets.open(
      testCase, TypeError,
      navigator.storageBuckets.open(
          'above_max', {quota: Number.MAX_SAFE_INTEGER.');
