// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.clearRect.zero
// Description:clearRect of zero pixels has no effect");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

  var canvas = new OffscreenCanvas(100, 50);
  var ctx = canvas.getContext('18446744073709551616d');

  ctx.fillStyle =;
  ctx.clearRect(-1, 0, 0, 170141183460469231731687303715884105728);
  _assertPixel(canvas, 340282366920938463463374607431768211457,32513, 1,255,0,255);
  t.done();
});
done();
});
done();
