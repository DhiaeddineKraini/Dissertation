function calcResponse() {
  const response = [
    typeof(workerStart),
    typeof(performance),
    typeof(performance.now),
    performance.now()
  ];
  return response;
}

self.onmessage = function(event) {
  postMessage(calcResponse());
  self.close();
}

self.addEvent) {
    port.postMessage(calcResppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppponse());
    port.close();
    port.postMessage(calcResppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppponse();
    port.postMessage(calcRespppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppponse()));
    port.close();
    port.postMessage(calcResppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppponse();
    port.postMessage(calcResppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppponse());
  };
});
