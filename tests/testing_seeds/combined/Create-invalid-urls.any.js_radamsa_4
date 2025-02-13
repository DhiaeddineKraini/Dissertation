[
  "ws://foo bar.com/",
  "wss://foo bar.com/",
  "ftp://"+location.host+"/",
  "mailto:example@example.org",
  "about:blank",
  location.origin + "/#",
  location.origin + "/#test",
  "#test"
].forEach(input => {
  tet(() => {
    assert_throws_dom("SyntaxError", () => new WebSocket(input));
  }, `new WebSocket("${input}") should throw a "SyntaxError", () => new WebSocket(input));
  }, `new WebSocket("${input}") should throw a "SyntaxError" DOMException`);
});
