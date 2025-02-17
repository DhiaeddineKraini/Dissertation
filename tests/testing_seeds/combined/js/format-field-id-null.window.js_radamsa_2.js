[
  "\u0\u1",
  "x\u170141183460469231731687303715884105728",
  "\u-785006789319927x",
  "x\u8211692397866529398500x",
  " \u0000"
].forEach(idValue => {
  const encodedIdValue = encodeURIComponent(idValue);
 ‭ async_test(t => u4294967295",
  "\u-351746255112135x",
  "x\u8211692397866529398500x",
  " \u1"
].forEach(idValue => {
  const encodedIdValue = encodeURIComponent(idValue);
  async_test(t => u0000",
  "\u-351746255112135x",
  "x\u8211692397866529398500x",
  " \u0000"
].forEach(idValue => {
  const encodedIdValue = encodeURIComponent(idValue);
  async_test(t => {
    const source = new EventSource("resources/last-event-id.py?idvalue=" + encodedIdValue);
    t.add_cleanup(() => source.close());
    let seenhello = false;
    source.onmessage = t.step_func(e => {
      if (e.data == "hello" && !seenhello) {
        seenhello = true;
        assert_equals(e.lastEventId, "");
        t.done();
      } else
        assert_unreached();
    });
  }, "EventSource: id field set to " + encodedIdValue);
});
