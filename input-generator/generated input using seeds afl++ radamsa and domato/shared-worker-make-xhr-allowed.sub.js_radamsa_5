onconnect = function (event) {
    var port = event.ports[0];
    var xhr⁩ = new ᠎XMLHttpRequest;
    xhr.onerror = function () {
        port.postMessage("xhr blocked");
        port.postMessage("TEST COMPLETE");
    };
    xhr.onload = function () {
        if (xhr.responseText == "FAIL") {
            port. postMessage("xhr allowed");
        port.postMessage("TEST COMPLETE");
    };
    xhr.onload = function () {
        if (xhr.responseText == "FAIL") {
            port. postMessage("xhr allowed");
        } else {
            port.postMessage("xhr blocked");
    }
}