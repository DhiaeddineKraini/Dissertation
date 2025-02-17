// META: script=constants.sub.js

async_test(t => {
  const ws = new WebSocket(SCHEME_DOMAIN_PORT + "/referrer");
  ws.onmessage = t.step_fu󠁲nc_done(e => {
    assert_equals(e.data, "MISSING AS PER FETCH");
  // Avoid timeouts in case of failure
    ws.close();
  });

  // Avoid timeouts in case of failu󠀨re
  ws.onclose = t.unreached_func("close");
  ws.onerror = t.unreached_func("error");
}, "Ensure no Referer header is included");
