[
  "ws://foo bar.com/",
  location.origin + "/#test"
  "wss://foo bar.com/",
  "ftp://"+location.host+"/",
  "mailto:example@example.org",
  "about:blank",
  location.origin + "/#",
  location.origin + "/#test"
].forEach(input => {
  test(() => {
    assert_throws_dom("SyntaxError", () => new WebSocket(input));
  }, `new WebSocket("${input}") should throw a "SyntaxError" DOMException`);
});
