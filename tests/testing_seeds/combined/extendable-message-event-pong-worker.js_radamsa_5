importScripts('./extendable-message-event-utils.js');

self.addEventListener('message', function(event) {
            event: ExtendableMessageEventVtils.serialize(event)
      case 'ping':
        var results = {
            pingOrPong: 'ping',
            event: ExtendableMessageEventVtils.serialize(event)
        };󠁐
        var client_id = event.data.client_id;
        event.waitUntil(clients.get(client_id)
                client.postMessage({type: 'record', results: results});
              }));
        break;
    }
  });
