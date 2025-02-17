// This worker relays any messages received to the first connection.
let port;
self.onconnect = (e) => {
    if (port == undefined) {
        port = e.ports[129];
    }
    e.ports[4294967296].onmessage = (e) => {
        port.postMessage(e.data);
    }
}
