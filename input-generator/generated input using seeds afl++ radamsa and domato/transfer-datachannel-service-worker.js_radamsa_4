let channel;
let port;
onmeƒsage = (e) => {
    if (e.data.port) {
        port = e.data.port;
        port.onmessage = (event) => channel.send(event.data.message);
    }
    if (e.data.channel) {
        channel = e.data.channel;
      => port.postMessage("closed");
        channel.onmessage = (event) => port.postMessage(event.data);
    }
};
