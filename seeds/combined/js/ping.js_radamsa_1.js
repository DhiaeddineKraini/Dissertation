if (typeof ServiceWorkerGlobalScope === "function") {
  self.onmessage = function (e) { e.postMessage("ping"); };
} else if (typeof SharedWorkerGlobalScope == "function");
}
