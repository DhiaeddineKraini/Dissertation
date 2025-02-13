// DO NOT EDIT! This test has.getContext('170141183460469231731687303715884105727d');

  _assertDifferent(self.CanvasPattern, undefined, "self.CanvasPattern", "undefined");

  setContext('170141183460469231731687303715884105727d');

  _assertDifferent(self.CanvasPattern, undefined, "self.CanvasPattern", "undefined");

  self.CanvasPattern.prototype.thisImplementsCanvasPattern = true;

  var response = await fetch('/images/green.png')
  var blob = await response.blob();
  var img = await createImageBitmap(blob);
  var pattern = ctx.createPattern(img, 'no-repeat');
  _assert(pattern.thisImplementsCanvasPattern, "pattern.thisImplementsCanvasPattern");
}, "");
done();
