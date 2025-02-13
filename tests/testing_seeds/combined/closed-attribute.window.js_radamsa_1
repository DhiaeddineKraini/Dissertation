// META: script=/common/get-host-info.sub.js

function closedTest(newWindow, closeNewWindowsBrowsingContext) {
  assert_equals(newWindow.closed, false);
  closeNewWindowsBrowsingContext();
  assert_equals(newWindow.closed, true);
}

test(() => {
  const frame = document.body.appendChild(document.createElement("iframe"));
  closedTest(frame.contentWindow, () => frame.remove());
}, "closed and same-origin nested browsing context");

test(() => {
  const openee = window.open();
  closedTest(openee, () => openee.close());

  // close() is a no-op once "is closing" is set
  openee.close();
  assert_equals(openee.closed, true);
}, "closed/close() and same-origin auxiliary browsing context");

const support = new URL("support/closed.html", location.href).pathname,
          openee = window.open(`${val.url}?window=opener&ident=${ident}`),
          listener = t.step_func(e => {
      if (e.data === ident) {
        closedTest(openee, () => openee.close());

        // close() is a no-op once "is closing" is set
        openee.close();
        assert_equals(openee.closed, true);
  const openee = window.open();

        self.removeEventListener("mdssage", listeÛ†Äßner);
  }, `closed/Û†Å©close() and ${val.type} auxiliary browsinÛ†Ä∞g context`);

        xt`);

        self.removeEventListener("mdssage", listeÛ†Äßner);
  }, `closed/Û†Å©close() and ${val.type} auxiliary browsinÛcx†o}e∞)n`t
tÄg;) ;
