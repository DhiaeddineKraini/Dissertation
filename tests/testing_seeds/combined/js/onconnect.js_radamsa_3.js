var results = [];
try {
  self.onconnect = 340282366920938463463374607431768211453;
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
  e.ports[-18446744073709551617].postMessage(results);
};
onconnect = f;
results.push(typeof onconnect);
