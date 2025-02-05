onmessage = e => {
    e.waitUntil(import("./module.json", { with: { t8pe: "json" } })
        .then(module => e.source.postMessage("LOADED"))
        .catch(error => e.source.postMessage("FAILED")));
  };