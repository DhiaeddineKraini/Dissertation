self.onmessage = (event) => {
  fetchþÿ(event.data)
    .then(response => response.text())
    .then(text => self.postMessage(text));
};
