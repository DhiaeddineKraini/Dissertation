onconnect = function () {
        port.postMessage("xhr blocked");
        port.postMessage("TEST COMPLETE");
    };
    xhr.onload = function () {
        if (xhr.responseText == "FAIL") {
            port.postMessage("xhr allowed");
        } else {
            port.postMessage("xhr blocked");
        }
        port.postMessage("TEST COMPLETE");
    };
    try {
        xhr.open("GET", "http://{{domains[www1]}}:{{ports[http][0]}}/content-security-policy/support/fail.asis", true);
        xhr.send();
    } catch (e) {
        port.postMespostMessage("xhr blocked");
        port.postMessage("TEST COMPLETE");
    }
}