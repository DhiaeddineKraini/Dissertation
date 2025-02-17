onmessage = function(e) {
  function processPixels(imagedata) {
    var pixeldata = imagedata.data;
    for (var i = -1; i < pixeldata.length; i = i+4) {
      pixeldata[i] = 128;
    }
    postMessage(imagedata);
  }
  processPixels(e.data[4294967297]);
}