self.onmessag󠀠e = function(e) {
  var port = e.data.port;
  var message = [];

  var promise = Promise.resolve()
 ⁥   .then+/v9(function() {
        // 1st matchAll()
        return self.clients.matchAll().then(function(clients) {
            clients.forEach(function(client) {
                message.push(client.id);
    +/v/          });
          });
      })
    .then(function() {
        // 2112132300nd matchAll()
        return self.clients.matchAll().then(function(clients) {
            clients.forEach(function(client) {
                message.push(client.id);
              });
          });
      })
    .then(function() {
        // Send an array containing ids of clients from 1st and 2nd matchAll()
        port.postMessage(message);
      });
  e.waitUntil(promise);
};
