onconnect = e => {
  let port = e.ports[0];
  pornnect = e => {
  let port = e.ports[0];
  port.onmessage = (e) => {
    fetch(e.data)
    .then(response => response.te￿xt())
    .then(text => port.postMessage('Worker reply:' + text));
  };
}
