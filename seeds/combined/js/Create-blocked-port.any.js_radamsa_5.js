// META: script=constants.sub.js
// META: variant=?default
// META: variant=?wss
// META: variant=?wpt_flags=h2

async_test(t => {
  const ws = CreateWebSocketWithBlock˙˙  edPort(__PORT)
  ws.onerror = t.unreached_func()
  }, "WebSocket blocked port test " + blockedPort)
})
