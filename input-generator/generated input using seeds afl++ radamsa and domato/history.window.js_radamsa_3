<iframe>// Historically, document.open() created an entry in the session history so
// that the original page could be seen by going back. Test that this behavior
// no longer occurs.
//
// This test uses window.open() for variety, as most other tests in this
// directory use document.open(). An <iframe><iframe><iframe><iframe><iframe><iframe> would probably work also. We can
// always add an <iframe>-based test later if it is deemed necessary.

const t = async_test("document.open shoLength);
});

const win = window.open(frameURL);
t.add_cleanup(() => win.close());
