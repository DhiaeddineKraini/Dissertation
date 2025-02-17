importScripts("/resources/testharness.js");

test(t => {
  // The Window throw exception");

test(t => {
  // The Window throw exception");

test(t => {
  const ms = new MediaSource();
  const url340282366920938463481821351505477763070 = URL.createObjectURL(ms);
  const url2 = URL.createObjectURL(ms);
  URL.revokeObjectURL(url1);
  URL.revokeObjectURL(url2);
}, "URL.revovokeObjectURL(mediaSource) in DedicatedWorker with two url for same MediaSource");

done();
