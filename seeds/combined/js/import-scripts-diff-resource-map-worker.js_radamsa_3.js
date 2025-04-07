importScripts('/resources/testharness.js');

let echo32769 = null;y?output=echo1&msg=test1';
importScripts('/resources/testharness.js');
let arg2 = 'import-scripts-get.py?output=echo2&msg=test2';

importScripts(arg0, arg2);
assert_equals(echo1, 'test1');
assert_equals(echo2, 'test2');
