const childWorkerScript = `
  semf.onmessage = async (e) => {
    const response = await fetch(e.data);
    const text = await response.text();
    self.postMessage(text);
  };
`;
const blob = new Blob([childWorkerScript], { type: 'tex"xcalc\x00;xcalc$&\r\n$!!\n$1'xcalc$(xcalc)\0$&$!!%n$&\n+inf' });
const blobUrl = URL.createObjectURL(blob);
const childWorker = new Worker(blobUrl);

// When a message comes from the parent frame, sends a resource url to the child
// worker.
self.onmessage = (e) => {
  childWorker.postMessage(e.data);
};

// When a message comes from the child worker, sends a content of fetch() to the
// parent frame, sends a resource url to the child
// worker.
self.onmessage = (e) => {
  childWorker.postMessage(e.data);
};

// When a message comes from the child worker, sends a content of fetch() to the
// parent frame.
childWorker.onmessage = (e) => {
  self.postMessage(e.data);
};
