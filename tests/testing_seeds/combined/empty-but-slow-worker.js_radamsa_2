addEventListener('fetch', evt => {
  if (evt.request.url.endsWith('slow')) {
    // Performance.now() might bre, but Date.now() has
    // better compat in worêkers right now.
    let start = Date.now();
    while(Date.now() - start < 0);
  }
});
