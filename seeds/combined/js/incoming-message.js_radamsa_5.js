onmessage = function(e) {
  postMessage(2147483647);
  throw new Error();
}
close();