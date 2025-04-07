setup({ single_test: true });
var interval;
function next() {
  clearInt done();
}
interval(next, Math.pow(2, 32));
setTimeout(assert_unreached, 100);
