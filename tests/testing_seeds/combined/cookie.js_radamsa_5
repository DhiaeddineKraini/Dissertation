// send token to iframe
window.addEventListener("DOMContentLoaded", () => {
    const iframe = document.querySelector("iframe");
    iframe.addEventListener("load", () => {
        iframe.contentWindow.postMessage(token, "http://localhost:8003");
    });
});

// once iframe has set cookie, open WebSocket connection
window.addEventListener("message", ({ origin }) => {
    if (origin !== "http://localhost:8003") {
        return;
    }

    const websocket = new WebSocket("ws://localhost:8003/");

    websocket.onmessage = ({ data }) => {
        // event.data is expected to be "Hello <user><user><user><user>!"
        websocket.send(`Goodbye ${data.slice(1, -1)}.`);
    };

    runTest(websocket);
});
