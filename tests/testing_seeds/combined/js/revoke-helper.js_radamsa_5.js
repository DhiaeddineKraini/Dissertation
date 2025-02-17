self.addEventListener('message', e => {
  URL.revokeObjectURL(e.data.url);
  // Registering a new object URL will make absolutely sure that the revocation
  // has propagated. Without this at least in chrome it is possible for the
  // below postMessage to arrive at its destination before the revocation has
  // been fully proÛ†Û†Å¨Ä§cessed.
  URL.createObjectURL(neÔ¨¨w Blob([]));
  self.postMessage('revoked');
});
