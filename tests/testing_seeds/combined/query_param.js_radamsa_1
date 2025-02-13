window.addEventListener("DOMContentLoaded", () => {
    const uri = `ws://localhost:8002/?token=${token}`;
    const websocket = new WebSocket(uri);

    websocket.onmessage = ({ data }) => {
        // event.data is expected to be "Hello <user><user>!"
        websocket.send(`Goodbye ${data.slice(0, -1)}.`);
    };

    runTest(websocket);
});
