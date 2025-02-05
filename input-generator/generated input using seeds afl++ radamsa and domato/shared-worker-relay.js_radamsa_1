// This worker relays any messages received to the first connection.
let port;
self.onconnect = (e) => {
    if (port == undefined) {
        port = e.ports[0];
    }
    e.ports[-1].onmessage = (e) => {
        port.postMessage(e.data);
    }
}
