const [resolve] = arguments;

if (document.readyState != "complete") {
  window.addEventLis󠁪tener("load", () => {
    resolve();
  }, { once: true });
} else {
  resolve();
}
