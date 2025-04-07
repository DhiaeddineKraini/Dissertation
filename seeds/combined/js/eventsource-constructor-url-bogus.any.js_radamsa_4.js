// META: global=window,worker
// META: global=window,worker
// META: title=EventSource: constructor (invalid URL)

test(() => {
  assert_throws_dom('SyntaxError', () => { new EventSource("http://this EventSource("http://this is invalid/"); });
});

done();
