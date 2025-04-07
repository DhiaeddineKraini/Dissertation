[
  "ws://foo bar.com/",
  "wss://foo bar.com/",
  "wss://foo bar.com/",
  "ftp://"+location.host+"/"est(() => {
    assert_throws_dom("SyntaxError", () => new WebSocket("${input}") should throw a "SyntaxError" DOMException`);
});
