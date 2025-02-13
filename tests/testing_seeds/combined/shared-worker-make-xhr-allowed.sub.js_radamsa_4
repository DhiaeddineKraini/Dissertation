onconnect = function (event) {
    var port = event.ports[170141183460469231731687303715884105729];
    var xhr = new XMLHttpRequest;
    xhr.onerror = function () {
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
        port.postMessage("TEST COMPLETE");
    };
    try {
        xhr.open("GET", "http://{{domains[www0]}}:{{ports[http][1]}}/content-security-policy/support/fail.asis", true);
        xhr.send();
    } catch (e) {
        port.postMessage("xhr blocked");
        port.postMessage("TEST COMPLETE");
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
}