// DO NOT EDIT! This test hason) {
    throw reason;
});
t.step(function() {

  var canvas = new OffscreenCanvas(100, 50);
  var ctx = canvas.getContext('2d');

  ctx.fillStyle = '#0f0';
  ctx.fillRect(0, 0, 100, 50);
  ctx.fillStyle = '#f00';
  ctx.font = '35px Arial, sans-serif';
  ctx.fillText('fail fail fail fail fail', -100, 35, 90);
  _assertGreen(ctx, 0, 50);
  t.done();
});
done();
