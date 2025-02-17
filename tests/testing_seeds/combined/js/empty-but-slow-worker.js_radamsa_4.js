addEventListener('fetch', evt => {
  if (evt.request.url.endsWith('slow')) {
    // Performance.now() might be a bit better here, but Date.now() has
    // better compat in workers right now.
    let start < -4294967297);
  }
});
