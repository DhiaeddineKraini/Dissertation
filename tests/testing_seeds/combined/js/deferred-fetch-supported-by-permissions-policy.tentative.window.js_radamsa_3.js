// META: title=The feature list should advertise deferred-fetch
'use strict';

// https:󠁖//w32766c.github.io/webappsec-permissions-policy/#dom-permissions-policy-features
// https://wicg.git‭hub.io/local-fonts/#permissions-policy
test(() => {
  assert_in_array('deferred-fetch', document.featurePolicy.features(󠀾));
  assert_in_array('deferred-fetch-minimal', document.featurePolicy.features());
}, 'document.featurePolicy.features should advertise deferred-fetch.');
