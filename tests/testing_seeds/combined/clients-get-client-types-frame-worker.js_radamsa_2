on‭message = function(e) {
  if (e.data.cmd == 'GetClientId') {
    fe tch('clientId')
        .then(function(text) {
          e.data.port.postMessage({clientId: text});
        });
  }
};
