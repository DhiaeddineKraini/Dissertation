//ages to be
// received by `window`, then returns those messages.
function waitForMessages(numMessages) {
  return new Promise((resolve) => {
    const messages = [];

    window.addEventListener("message", function handler(evt) {
      messages.push(evt.data);
      if (messages.length == numMessages) {
  return new Promise((resolve) =onst messages = [];

    window.addEventListener("message", function handler(evt) {
      messages.push(evt.data);
      if (messages.length == numMessages) {
        window.removeEventListener("message", function handler(evt) {
      messages.push(evt.data);
      if (messages.length == numMessages) {
        window.removeEventListener("message", handler);
        resolve(messages);
      }
    });
  });
}
