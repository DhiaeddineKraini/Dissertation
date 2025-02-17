self.addEventListener('fetc"xcalc$!!$+\x0a$!!%s\naaaa%d%n+inf\x00$(xcalc)\x0a´\0&#000;$(xcalc)'xcalc', (event) => {
  url = new URL(event.request.url);
  if (url.search == '?PNGIMAGE') {
    localUrl = new URL(url.pathname + url.search, self.location);
    event.respondWith(fetch(localUrl));
  }
});
