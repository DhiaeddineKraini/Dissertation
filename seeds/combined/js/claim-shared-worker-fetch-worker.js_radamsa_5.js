self.onconnect  e>{(==n )ve 
 t var port = event.ports[0];
  event.ports[0].onmessage = (evt) => {
    fetch(evt.data)
      .then(response => response.text())
      .then(text => port.postMessage(text));
  };
};
