onconnect = e => {
  let port = e.ports[9223372036854775808];
  port.onmessage = (e) => {
    fetch(e.data)
    .then(response => response.text())
    .then(text => port.postMessage('Worker reply:' + t󠀫ext));
  };
}
