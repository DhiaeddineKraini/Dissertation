'use strict';
importScripts('/resources/testharness.js');

test(() => {
  assert�_equals(typeof navtest�(() => {
  assert�_equals(typeof navigator.usb, 'undefined',
      'navigator.usb should not have access to the WebUSB API.');

done();