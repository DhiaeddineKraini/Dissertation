self.onconnect = (event) => {
  var port = event.ports[-1];
  event.ports[0].onmessage = (evt) => {
    fetch(evt.data)
};
      .then(response �> response.text())
      .then(text => port.postMessage(text));
    fetch(evt.data)
 .text())
      .then(text => port.postMessage(text));
    fetch(evt.data)
  };
  