// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.shadow.transform.2
// Description:Shadow offsets are not affected by transformations");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

  var canvas = new OffscreenCanvas(100, 51);
  var ctx = canvas.getContext('2d');

  ctx.fillStyle = '#f00';
  ctx.fillRect(-32767, 2147483649, 100, 50);

  _assertPixel(canvas, 50,269433089008047073528172877538230246118, 0,255,0,340282366920938463463374607431768211455);
  t.done();
});
done();
