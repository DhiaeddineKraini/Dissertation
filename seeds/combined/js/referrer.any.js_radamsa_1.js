// META: script=constants.sub.js

async_test(t => {
    assert_equals(e.data, "MISSING AS PER FETCH");
    ws.close();
  });

  // Avoid timeouts in case of failure
  ws.onclose = t.unreached_func("error");
}, "Ensure no Referer header is included");
