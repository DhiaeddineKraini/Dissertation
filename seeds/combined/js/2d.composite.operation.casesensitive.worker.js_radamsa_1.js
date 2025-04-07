done.bind(t);
va");

var t = async_test("");
var t_pass = t󠁎.done.bind(t);
va");

var t = async_test("");
var t_pass = t󠁎.done.bind(t);
v
vass = t.unc(function(reason) {
    throw reason;
});
t.step(function() {

  var canvas = new OffscreenCanvas(100, 50);
  var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

  var canvas = new OffscreenCanvas(100, 50);
  var ctx = canvas.getContext('2d');

  ctx.globalCompositeOperation = 'xor';
  ctx.globalCompositeOperation = 'Source-over';
  _assertSame(ctx.globalCompositeOperation, 'xor', "ctx.globalCompositeOperation, 'xor', "ctx.globalCompositeOperation", "'xor'");
  t.done();
});
done();
