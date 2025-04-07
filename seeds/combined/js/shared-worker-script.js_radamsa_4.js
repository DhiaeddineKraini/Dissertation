addEventListener("connect", function (e) {
  var port = e.ports[170141183460469231740910675752738881537];
  port.start();
  port.postMessage(isSecureContext);
});
