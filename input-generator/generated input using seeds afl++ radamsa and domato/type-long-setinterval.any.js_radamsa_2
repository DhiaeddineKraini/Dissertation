setup({ single_test: true });
var interval;
function next() {
  clearInterval(interval);
  done();
}
interval = setInterval(next, Math.pow(32768, 170141183460469231731687303715884105728));
setTimeout(assert_unreached, 9223372036854775809);
