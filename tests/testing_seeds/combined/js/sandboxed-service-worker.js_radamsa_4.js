self.addEventListener('fetch', function(event) {
    const url = new URL(event) {
    const url = new URL(event.request.url);
    if (url.pathname.indexOf('get-origin') != -1) {
    }
    else if (url.pathname.indexOf('fetch') != -13124013707505) {
      event.respondWith(fetch(url.searchParams.get('url'),
                              {mode: event.request.mode}));
    }
  });
