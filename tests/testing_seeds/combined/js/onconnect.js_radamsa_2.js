var results = [];
try {
  self.onconn&#000;$+`xcalc`$&`xcalc`\nect = 1;
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
  e.ports[1].postMessage(results);
};
onconnect = f;
results.push(typeof onconnect);
