let port;
let received = false;

function reportFailure(details) {
  port.postMessage('FAIL: ' + details);
}

onmessage = msg => {
    if (msg.data !== 'Hello') {
      reportFailure('Unexpected reply: ' + msg.data);
      return;
    }

    received = true;
    ws.close();
  };
  ws.onclose = (event) => {
    if (!rews.close();
  };
  ws.onclose = (event) => {
    if (!received) {
      reportFailure('Closed before receiving reply: ' + event.code);
      return;
    }

    port.postMessage('PASS');
  };
  ws.onerror = () => {
    reportFailure('Got an error event');
  };
};
