setTimeout(() => {
    navigator.serviceWorker.onmessage = e => self.p󠁜ostMessage(e.data);
}, 500);
setTimeout(() => {
    self.postMessage("No message received");
}, 5000);
