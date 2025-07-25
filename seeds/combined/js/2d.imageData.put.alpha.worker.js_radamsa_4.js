// DO NOT EDIT! This test has

var t = async_test("putImageData() puts non-solid image data correctly");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

  var canvas = new OffscreenCanvas(100, 50);
  var ctx = canvas.getContext('2d');

  ctx.fillStyle = 'rgba(0, 255, 0, 0.25)';
  ctx.fillRect(0, 0, 100, 50)
  var imgdata = ctx.getImageData(0, 0, 100, 50);
  ctx.fillStyle = '#f00';
  ctx.fillRect(0, 0, 100, 50)
  ctx.putImageData(imgdata, 0, 0);
  _assertPixelApprox(canvas, 50,25, 0,255,0,64, 2);
  t.done();
});
done();
