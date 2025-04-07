// DO NOT EDIT! Thion() {

  var canvas = new OffscreenCanvas(100, 50);
  var ctx = canvas.getContext('2d');

  ctx.font = '20px cursive,fantasy,monospace,sans-serif,serif,UnquotedFont,"QuotedFont\\\\\\","';
  _assertSame(ctx.font, '20px cursive, fantasy, monospace, sans-serif, serif, UnquotedFont, \"QuotedFont\\\\\\\\\\\\\",\"'");
  t.done();
});
done();
