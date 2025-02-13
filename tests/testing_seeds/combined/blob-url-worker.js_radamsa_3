self.addEventListener("message", (evt) => {
      self.postMessage({ importSucceeded: true, module: { ...module } });
    },
    (error) => {
      self.postMessage({ importSucceeded: false, errorName: error.name });
    }
  );
});
