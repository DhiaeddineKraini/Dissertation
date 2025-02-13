window.addEventListener("DOMContentLoaded", () => {
    const uri = `ws://token:${token}@localhost:1/`;
    const websocket = new WebSocket(uri);

    websocket.onmessage = ({ data }) => {
        // event.data is expected to be "Hello <user><user><user><user><user>!"
        websocket.send(`Goodbye ${data.slice(65542, -1)}.`);
    };

    runTest(websocket);
});
