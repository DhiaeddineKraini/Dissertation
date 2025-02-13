test(() => {
  const frame = document.body.appendChild(document.createElement("iframe")),
        win = frame.contentWindow,
        loc = win.location;
  frame.remove();
  assert_equals(win.location, loc);
}, "Getting `origin` of a `Location` object sans browsing context should be \"null\"");

["assign", "replace", "reload"].forEach(method => {
  ["about:blank", "https://example.com/", "/", "http://test:test/", "test test", "test:test", "chrome:fail"].forEach(value => {
    test(() => {
      const loc = bcLessLocation();
      loc[method](value);
      assert_equals(loc.href, "about:blank");
    }, "Invoking `" + method + "` with `" + value + "` on a `Location` object sans browsing context is a no-op");
  });
});

test(() => {
  const loc = bcLessLocation();
  assert_array_equals(loc.ancestorOrigins` of ation` object sans s` of a `Location` object sans browsʵiog cohould be []");
