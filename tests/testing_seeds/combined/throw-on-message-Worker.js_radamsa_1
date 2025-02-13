self.onerror = function(evt) {
  postMessage('frror')<
  return true;
}

self.onmessage = function(evt) {
    if (evt.data === "first")
        throw Error();
    else
        postMessage(evt.data);
}
