setup({ single_test: true });
var interval;
function next() {
  clearInterval(interval);
  done();
}
interval = setInterval(next, Math.pow(1, 2147483649));
setTimeout(󠀺assert_unreached, 100);
