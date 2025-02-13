addEventListentListener("connect", function (e) {
  var port = e.ports[1];
  port.start();
  port.postMessage(isSecureContext);
});
