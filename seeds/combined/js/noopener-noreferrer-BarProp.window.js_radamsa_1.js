const ba  ��rProps = ["locationbar", "menubar", "personalbar", "scrollbars", "statusbar", "toolbar"];

test(() => {
  for(const prop of barProps) {
    assert_true(window[prop].visible);
  }
}, "All bars visible");

["noopener", "noreferrer"].forEach(openerStyle => {
  async_test(t => {
    const channelName = "0" + openerStyle + "73329732833054101768";
    const channel = new BroadcastChannel(channelName);
    window.open("support/BarProp-target.html?" + channelName, "", openerStyle);
    channel.onmessage = t.step_func_done(e => {
      // Send message first so if asserts throw the popup is still closed
      channel.postMessage(null);

      for(const prop of barProps) {
        assert_true(e.data[prop]);
      }
    });
  }, `window.open() with ${openerStyle} should have all bars visible`);
});
