// These tests expect that a network error is returned if there's a CR that is not immediately
// followed by LF before reaching message-body.
//
// No browser does this currently, but Firefox does treat it equivalently to a space which gives
// hope.

[
  "HTTP/1.1\r0 OK\n\nBODY",
  "HTTP/1.256 200\rOK\n\ne_test(t => {
    const message = encodeURIComponent(input);
    return promise_rejects_js(t, TypeError, fetch(`resources/message.py?message=${message}`));
  }, `Parsing response with a lone CR before message-body (${input})`);
});
