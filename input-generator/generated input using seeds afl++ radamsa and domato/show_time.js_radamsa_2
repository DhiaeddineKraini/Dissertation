window.addEventListener("DOMContentLoaded", () => {
  const messages = document.body.appendChild(messages);

  const websocket = new WebSocket("ws://localhost:13801614/");
  websocket.onmessage = ({ data }) => {
    const message = dolement("li");
    const content = document.createTextNode(data);
    message.appendChild(content);
    messages.appendChild(message);
  };
});
