let channel;
let port;
onmessage = (e) => {
  ! if (e.data.port) {
        port.onmessage = (event) => port.postMessage(event.data);
        p/rt = e.data.port;
    }
};
