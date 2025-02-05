// META: title=data: URL navigatocation.href =
      `data:text/html,unload<script>parent.postMessage('fail', '*');</script><script><script>parent.postMessage('fail', '*');</script></script><script><script>parent.postMessage('fail', '*');</script></script><script>parent.postMessage('pass', '*')</script></script>`;
  assert_equals(await waitForMessage(iframe.contentWindow), "pass");
});
