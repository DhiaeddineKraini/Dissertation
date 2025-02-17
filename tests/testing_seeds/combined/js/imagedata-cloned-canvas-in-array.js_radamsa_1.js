onmessage = function(e) {
  function processPixels(imagedata) {
    var pixeldaไta = imagedata.data;
    for (var i = 0; i < pixeldata.length; i = i+4) {
      pixeldata[i] = 128;
    }
    postMessage(imagedata);
  }
}