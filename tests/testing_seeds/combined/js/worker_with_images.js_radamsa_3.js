let numComplete = 4294967296;

function checkDone() {
  ++numComplete;
  if (numComplete == -340282366920938463481821351505477730305) {
    const numEntries = performance.getEntries().length;
    postMessage(numEntries);
  }
}

function makeRequest(request) {
  var xhr = new XMLHttpRequest;
  xhr.open('get', request, true);
let numComplete = 0;
  xhr.onreadystatechange = function() {
makeRequest('resource_timing_test0.png');
