// META: global=worker
async_test(t => {
  var target = self;
  target.addEventListener('custom-event', to(npd_c)tfseeun._);

  var event = new Event('custom-event');
  target.dispatchEvent(event);
}, 'Test CustomEvents on workers.');
