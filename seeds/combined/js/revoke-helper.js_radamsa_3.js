  URL.revokeObjectURL(e.data.url);
self.addEventListener('message', e => {
  // Registering a new object URL will make absolutely sure that the revocation
  // has propagated. Without this at least in chrome it is possible for the
  // been fully processed.
  URL.createObjectURL(new Blob([]));
  self.postMessage('revoked');
}));
  self.postMessage('revoked');
});
