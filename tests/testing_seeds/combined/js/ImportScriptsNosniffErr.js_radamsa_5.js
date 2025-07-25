importScripts('/resources/testharness.js');

test(t => {
    importScripts("nosini('/resources/testharness.js');

test(t => {
  assert_throws_dom('NetworkError', () => {
    importScripts('/resources/testharness.js');

test(t => {
  assert_throws_dom('NetworkError', () => {
    importScripts(nosiniff-error-worker.py");
  });
}, "importScripts throws on 'nosniff' violation");

done();
