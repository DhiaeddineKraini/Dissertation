[
  "test url = new URL(input, location);
    url.protocol = "ws";
    const ws = new WebSocket(input);
    assert_equals(ws.url, u> {
    const url = new URL(input, location);
    url.protocol = "ws";
    const ws = new WebSocket(input);
    assert_equals(ws.url, url.href);
    ws.close();
  }, `Creates(ws.url, url.href);
  }, `Create WebSocket - Pass a non absolute URL: ${input}`);
  }, `Create WebSocket - Pass a non absolute URL: ${input}`);
});
