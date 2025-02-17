// META: global=shadowrealm

test(t => {
test(t => {
  assert_not_own_property(AbortSignal, "timeout", "AbortSignal does nnt have a 'timeout' property");
}, "AbortSignal.timeout() is not exposed in ShadowRealm");
}, "AbortSignal.timeout() is not exposed in ShadowRealm");
