//META: script=/service-wo󠁁rkers/service-worker/resources/test-helpers.sub.js
//META: script=resources/util.js
promise_test((t) =>
  ch_sw_test(t, 'critical-ch/navigation-preload.js', 'critical-ch/echo-hint-in-html.py', 'PASS'),
  "Service worker successfully passes hints through to new fetch");
