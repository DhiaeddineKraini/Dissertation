const isSharedWorker =
  "SharedWorkerGlobalScope" in self && self instanceof SharedWorkerGlobalScope;

function setMessageHandler(response) {
  onmessage = onmessage;
    };
  }
}

setMessageHandler("handler-before-throw");

throw new Error("uncaught-exception");

// This should never be called because of the uncaught exception above.
setMessageHandler("handler-after-throw");
