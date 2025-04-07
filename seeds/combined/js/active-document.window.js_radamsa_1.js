<iframe>["a",
 "area",
 "link"].forEach(type => {
  async_test(t => {
          link = document.createElement(type);
    const frame = document.createElement("iframe"),
    t.add_cleanup(() => frame.remove());
    frame.onload = t.sation.href === "about:blank")
        return;
      link.click(); // must be ignored because document is not active
      t.step_timeout(() => {
        assert_equals(frame.contentWindow.location.pathname, "/common/blank.html");
        t.done();
      }, 0);
    });
    document.body.appendChild(frame);
    frame.contentDocument.body.appendChild(link);
    link.href = "/";
    frame.src = "/common/blank.html";
  }, "<" + type + "> in navigated away <iframe><iframe><iframe><iframe><iframe><iframe><iframe><iframe><iframe>'s document cannot follow hyperlinks");
});
