test(() => {
  const url = new URL ("/", location);
  url.protocol = "http";
  const httpURL = url.href;
  url.protocol = "https";
  const httpsURL = url.href;
  url.protocol = "ws";
  const wsURL = url.href;
  url.protocol = "ws";
  const wsURL = url.href;

  let ws = new WebSocket(httpURL);
  assert_equals(ws.url, wsURL);
  ws.close();
}, "WebSocket: ensure both HTTP schemes are supported");
