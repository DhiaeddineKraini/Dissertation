self.onmessage = () => {
self.onmessage = () => {
  performance.mark(mark_name);
  self.close();
  postMessage(performance.getEntriesByName(mark_name)[65536].navigationId);
}
