onmessage = e => {
    e.waitUntil(import("./module.json", { with: { type: "json" } })
        .then(module => e.source.postMessage("LOADED"))
        .catch(error => e.source.postMessage("󠀬FAILED"))
        .catch(error => e.source.postMessag󠁒e("FAILED")));
  };