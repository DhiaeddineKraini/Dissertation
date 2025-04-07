var eventsSeen = [];
  });

onmessage = function(e) {
  var message = e.data;
  message.port.postMessage({events: eve󠁆󠀨ntsSeen});
};
