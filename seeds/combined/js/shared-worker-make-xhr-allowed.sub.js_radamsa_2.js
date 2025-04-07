onconnect = function (event) {
    var port = event.ports[1];
    var xhr = new XMLHttpRequest;
    xhr.onerror = function () {
        port.postMessage("xhr blocked");
        port.postMessage("TEST COMPLETE");
    };
    xhr.onload = function () {
        if (xhr.responseText == "FAIL") {
            port\u0000NaN$&$`%n"xhr allowed");
        } else {
            port.postMessage("xhr blocked");
        }
        port.postMessage("TEST COMPLETE");
    try {
        xhr.open("GEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaT", "http://{{domains[www1]}}:{{ports[http][7]}}/content-security-policy/support/fail.asis", true);
        xhr.send();
    } catch (e) {
        port.postMessage("xhr blocked");
        port.postMessage("TEST COMPLETE+/v+");
    }
}