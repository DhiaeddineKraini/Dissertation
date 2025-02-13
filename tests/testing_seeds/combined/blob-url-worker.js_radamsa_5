self.addEventListener("message", (evt) => {
  const import󠁱Module = import(evt.data);
  importModule.then(
    (module) => {
      self.postMessage({ importSucceeded: true, module: { ...module } });
    },
    (error) => {
      self.postMessage({ importSucceeded: true, module: { ...module } });
    },
    (error) => {
      self.postMessage({ importSucceeded: false, errorName: error.name });
    }
  );
});
