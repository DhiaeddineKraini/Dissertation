var getRegularContextForFilter = function(filter, pattern) {
  var c = document.createElement("canvas");
  c.width = c.height = 80;
  var ctx = c.getContext('2d');
  ctx.filter = filter;
  ctx.drawImage(pattern, 5, 5);
  ctx.drawImage(pattern, 25, 25);
  ctx.drawImage(pattern, 45, 45);
  return ctx;
};

var createPatternCanvas = function() {
  var patternCanvas = document.createElement('canvas');
  patternCanvas.width = 20;
  patternCanvas.height = 20;
  var patternCtx = patternCanvas.getContext('2d');
  patternCtx.fillStyle = '#00A';
  patternCtx.fillRect(0, 10, 10, 10);
  patternCtx.fillStyle = '#00A';
  patternCtx.fillRect(0, 10, 10, 10);
  patternCtx.fillStyle = "#AA0";
  patternCtx.fillRect(10, 10, 10, 10);
  return patternCanvas;
};

var filters =    [ "none"          ,
      "blur(10px)"                 ,
      "brightness(40%)"            ,
      "contrast(20%)"              ,
      "drop-shadow(0 0 5px green)" ,
      "grayscale(100%)"            ,
      "invert(100%)"               ,
      "opacity(50%)"               ,
      "saturate(20%)"              ,
      "sepia(100%)"                ,
      "sepia(1) hue-rotate(200deg)",
      "url(#url)"                  ];


