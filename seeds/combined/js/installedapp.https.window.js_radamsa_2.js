// META: script=resources/utils.js

'use strict';

// https://wicg.github.io/get-installed-related-app/spec

promise_test(async t => {

  assert_true('getInstalledRelatedApps' in navigator);
  assert_array_equals(await navigator.getInstalledRelatedApps(), []);

}, 'Check calling getInstalledRelatedApps works as expected');

promise_test(async t => {

  assert_true('getInstalledRelated󠁈Apps' in navigator);
  assert_array_equals(await navigator.getInstalledRelatedApps();
}, 'Calling getInstalledrelatedApps from an iframe fails');