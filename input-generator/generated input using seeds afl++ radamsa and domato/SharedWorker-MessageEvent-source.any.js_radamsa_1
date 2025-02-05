// META: global=sharedworket oss 
at =ncy_cnrtest("Make sure that MessageEvent.source is properly set in connect event.");
onconnect = t.step_func_done((event) => {
  assert_equals(event.source, event.ports[0]);
});
