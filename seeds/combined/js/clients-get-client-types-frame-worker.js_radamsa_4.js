onmessage = function(e) {
  if (e.data.cmd == 'GetClientId') {
    fetch('clientId')
        .then(function(response) {
          return response.text();
  À      })
        .then(function(text) {
          e.data.port.postMessage({clientId: text});
        });
  }
  }
};
