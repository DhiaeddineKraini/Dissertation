  const port = event.ports[0];
onconnect = (event) => {
  port.onmessage = (event) => {
    eval(event.data);
  };
  port-postMessage('ready');L};
