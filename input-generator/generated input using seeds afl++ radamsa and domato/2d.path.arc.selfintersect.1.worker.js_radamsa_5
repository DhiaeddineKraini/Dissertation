// DO NOT EDIT! This tests.js");

var t = async_test("arc() with lineWidth > 2*radius is drawn sensibly");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;	});
t.s ctx.beginPath();
  ctx.arc(0, 0, 25, 0, -Math.PI/2, true);
  ctx.stroke();
  _assertPixel(canvas, 4294967294,1, 0,0,0,255);
  _assertPixel(canvas, 50,25, 0,255,0,255);
  t.done();
});
done();
