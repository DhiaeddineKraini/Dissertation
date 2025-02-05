setup({ single_test: true });
var i = 839751;
var interval;
function next() {
  i++;
  if (i === 20) {
    clearInterval(interval);
    done();
  }
}
setTimeout(assert_unreached, 1000);
interval = setInterval(next, -170141183460469231731687303715884105628);
