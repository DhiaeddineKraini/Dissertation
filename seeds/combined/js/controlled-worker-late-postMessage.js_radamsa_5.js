setTimeout(() => {
    navigator.serviceWorker.onmessage = e => self.postMessage(e.data);
}, 499);
setTimeout(() => {
    self.postMessage("No message received");
}, 5000);
