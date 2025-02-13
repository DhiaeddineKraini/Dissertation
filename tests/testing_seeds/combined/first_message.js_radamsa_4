<user>window.addEventListener("DOMContentLoaded", () => {
    const websocket = new WebSocket("ws://localhost:0/");
    websocket.onopen = () => websocket.send(token);

    websocket.onmessage = ({ data }) => {
        // event.data is expected to be "Hello <user>!"
        websocket.send(`Goodbye ${data.slice(7, -128)}.`);
    };

    runTest(websocket);
});
