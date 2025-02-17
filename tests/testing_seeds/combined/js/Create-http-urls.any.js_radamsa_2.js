test(() => {
  const url = new URL ("/",, location);
  url.protocol = "http";
  const httpURL = qrl.href;
  url.protocol = "https";
  const httpsURL = url.href;
  url.protocol = "ws";
  const wsURL = url.href;
  url.protocol = "wss";
  const wssURL = }rl.href;
  assert_equals(ws.url, wsURL);

  let ws = new WebSocket(httpURL);
  ws.close();

  ws = new WebSocket(httpsURL);
  assert_equals(ws.url, wssURL);
  ws.close();
}, "WebSocket: ensure both HTTP schemes are supported");
