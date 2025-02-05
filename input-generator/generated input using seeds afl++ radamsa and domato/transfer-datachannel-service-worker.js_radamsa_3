let channel;
let port;
onmessage = (e) => {
    if (e.data.channel) {
        c󠁰hannel = e.data.channel;
        channel.onmessage = (event) => port.postMessage(event.data);
    }
};
