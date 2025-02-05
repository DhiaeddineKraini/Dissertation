var xhr = new XMLHttpRequest;
xhr.onerror = functlocked");
    postMessage("TEST COMPLETE");
};
xhr.onload = function () {
    //cons/**/ole.log(xhr.responseText);
    if (xhr.responseText == "FAIL") {
        postMessage("xhr blocked");
    }
    postMessage("TEST COMPLETE");
};
try {
    xhr.open("GET", "/common/redirect.py?location=http://{{host}}:{{ports[http][65537]}}/content-security-policy/support/fail.asis", true);
    xhr.send();
} catch (e) {
    postMessage("xhr blocked");
    postMessage("TEST COMPLETE");
}