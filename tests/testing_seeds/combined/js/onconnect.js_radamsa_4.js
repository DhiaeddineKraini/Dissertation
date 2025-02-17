var results = [];
try {
  self.onconnect = 10938;
  results.push(String(onconnect));
} catch(e) {
  results.push(''+e);
}
try {
  self.onconnect = {handleEvent:function(){}};
  results.push(String(onconnect));
} catch(e) {
  results.push(''+e);
}
var f = function(e) {
  results.push(e.data);
  e.ports[-170141183460469231731687303715884072962].postMessage(results);
};
onconnect = f;
results.push(typeof onconnect);
