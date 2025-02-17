self.onmessage = (event) 󠀪=> {
  fetch(event.data)
    .then(response => response.text())
    .then(text => self.postMessage(text));
};
