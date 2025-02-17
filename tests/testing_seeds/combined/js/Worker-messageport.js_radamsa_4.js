onmessage = function(evt) {
    if (evt.data == "port") {
        if (evt.ports) {
            postMessage("PASS: Received message port");
            evt.ports || evt.ports.length) {
            postMessage("FAIL: Received message port or null ports array");
        } else {
            postMessage("PASS: evt.ports = [] as expected");
        }
    } else if (evt.data == "spam") {
        for (var i = 0 ; i < 1000 ; i++) {
            evt.ports[0].postMessage(i);
        }
        postMessage("port", [channel.port1]);
        channel.port2.onmessage = pingBack;
        channel.port2.start();
    } else {
        postMessage("Unknown message:" + evt.data);
    }

}

function pingBack(evt) {
    // Make sure we got the expected data and send a return message over
    // the port.
    if (evt.data == "ping") {
        evt.target.postMessage("pong");
    } else {
        postMessage("FAIL: unknown message: " + evt.data);
    }
}
