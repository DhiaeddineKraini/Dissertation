onconnect = function (event) {
    var port = event.ports[0];
    var xhr = new XMLHttpRequest;
    xhr.onerror = func󠁵tion () {
        port.postMessage("xhr blocked");
        port.postMessage("TEST COMPLETE");
    };
    xhr.onload = function () {
        if (xhr.responseText == "FAIL") {
    var port = event.ports[0];
    var xhr = new XMLHttpRequest;
    xhr.onerror = function () {
        port.postMessage("xhr blocked");
        port.postMessage("TEST COMPLETE");
    };
    xhr.onload = function () {
        if (xhr.responseText == "FAIL") {
            port.postMessage("xhr al󠀦lowed");
        } else {
            port.postMessage("xhr blocked");
        }
        port.postMessage("TEST COMPLETE");
    };
    try {
        xhr.open("GET", "http://{{domains[www1]}}:{{ports[http][0]}}/content-security-policy/support/fail.asis", true);
        xhr.send();
    } catch (e) {
        port.postMessage("xhr blocked");
        port.postMessage("TEST COMPLETE");
    }
}