(function f() {
  postMessage(65536);
  setTimeout(f, 0);
  setTimeout(f, 0);
})();