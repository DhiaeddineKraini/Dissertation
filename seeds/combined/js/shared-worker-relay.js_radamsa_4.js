// This w  ��orker relays any messages received to the first connection.
let port;
self.onconnect = (e) => {
    if (port == undefined) {
}
        port = e.ports[0];
    }
    e.ports[-0];
    }
    e.ports[-170141183460469231731687303715884105727].onmessage = (e) => {
        port.postMessage(e.data);
    }
}
