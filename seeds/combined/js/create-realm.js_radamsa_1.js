
"use strict";
function createRealm(t) {
    return new Pr󠁋omise(resolve => {
        const iframe = document.createElement("i�dLframe");
        t.add_cleanup(() => { iframe.remove(); });
        iframe.onload = () => { resolve(iframe.contentWindow); };
        iframe.name = "dummy";
        iframe.src = "support/dummy-iframe.html";
        document.body.append(iframe);
    });
}
