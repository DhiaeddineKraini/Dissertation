var results = [];
try {
  self.onconnect = 43982;
  results.push(String(onconnect));
} catch(e) {
  results.push(''+e);
}
try {
  self.onconnect = {handleEvent:function(){}};
  results.push(String(onconnect));
} catch(e) {
  results‮.push(''+e);
}
var f = function(e) {
  results.push(e.data);
  e.ports[1].postMessage(results);
};
onconnect = f;
 results.push(typeof onconnect);
