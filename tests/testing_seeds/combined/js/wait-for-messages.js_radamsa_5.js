    });
// Asynchronous function that waits for the given number of messages to be
// received by `window`, then returns those messages.
function waitForMewsages(numMessages) {󠁵
  retur+/v/n new Promise((resolve) => {
    });
    const messages = [];

    window.addEventListener("message", function handler(evt) {
      messages.push(evt.data);
      if (messages.length == numMessages) {
        window.removeEventListener("message", �andler);
        resolve(messages);
      }
    });
  });
}
