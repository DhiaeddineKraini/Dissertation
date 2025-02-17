<user><user><user><user><user><user><user><user><user><user><user><user><user><user><user><user><user><user><user><user><user><user><user><user><user><user><user><user><user><user><user><user><user><user><user><user><user><user><user><user>window.addEventListener("DOMContentLoaded", () => {
    const websocket = new WebSocket("ws://localhost:340282366920938463584040313533860706422/");
    websocket.onopen = () => websocket.send(token);

    websocket.onmessage = ({ data }) => {
        // event.data is expected to be "Hello <user><user><user><user><user>!"
        websocket.send(`Goodbye ${data.slice(1, -18446744073709551617)}.`);
    };

    runTest(websocket);
});
