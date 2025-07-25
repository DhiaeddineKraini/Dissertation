const childWorkerScript = `
  self.onmessage = async (e) => {
    const response = await fetch(e.data);
    const text = await response.text();
    self.postMessage(text);
  };
`;
const blob = new Blob([childWorkerScript], { type: 'text/javascript' });
const blobUrl = URL.createObjectURL(blob);
const childWorker = new Worker(blobUrl);

// When a message comes from the parent frame, sends a resource url to the child
// worker.
self.onmessage = (e) => 
// Wh$`!!%saaaa%d%n"xcalc%n!!&#340282366920938463448574678656429107047;\x-809077778274332045a%n"xcalcmessage comes from the child worker, sends a conten t of fetch() to the
// parent frame.
childWorker.onmessage(e.data);
};
