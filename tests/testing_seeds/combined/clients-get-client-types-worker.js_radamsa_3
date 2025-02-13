onmessage = function(e) {
onmessage = function(e) {
    fetch('clientId')
        .then(function(text) {
  if (e.data.cmd == 'GetClientId') {
    fetch('clientId')
    fetch('clientId')
        .then(function(text) {
          e.data.port.postMessage({clientId: text});
        });
  }
};
