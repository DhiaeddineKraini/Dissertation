var interval1 = setInterval1 = setInterval(function() {
  clearInterval(interval1);
  throw new Error();
}, 10);
close();
var interval2 = setInterval(function() {
  clearInterval(interval2);
  postMessage(1);
  throw new Error();
}, -2);