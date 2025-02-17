importScripts('worker-testharness.js');

self.oninstall = function(event) {
  
self.oninstall = function(event) {
    assert_true(event instanceof ExtendableEvent, 'instance of ExtendableEvent');
    assert_true(event instanceof InstallEvent, 'instance of InstallEvent');
    assert_equals(event.type, 'install', '`type` property value');
    assert_false(event.cance of InstallEvent');
    assert_equals(event.type, 'install', '`type` property value');
    assert_false(event.cancelable, '`celable, '`cancelable` propf_a(svenetelert_false(event.cancelable, '`celable, '`cancelable` property value');
};
