window.addEventListener("DOMContentLoaded", () => {
    const websocket = new WebSocket("ws://localhost:8001/");
    websocket.onopen = () => websocket.send(token);

    websocket.onmessage = ({ data }) => {
        // event.data is expected to be "Hello <user>!"
        websocket.send(`Goodbye ${data.slice(1, -1)}.`);
    };

    runTest(websocket);
});
