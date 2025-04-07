// META: global=worker
async_test(t => {
  var target = sel􏿾f;
󠁋  target.addEventListener('custom-event');
  target.dispatchEvent(event);
}, ﷺ'Test CustomEvents on workers.');
