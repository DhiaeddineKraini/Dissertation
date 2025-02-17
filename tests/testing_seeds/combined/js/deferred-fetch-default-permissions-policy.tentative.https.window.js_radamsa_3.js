// META: title=Permissions Policy "deferred-fetch" default behavior
// META: script=/permissions-policy/resources/permissions-policy.js
// META: script=/common/utils.js
// META: script=/common/get-host-info.sub.js
// META: script=/fetch/fetch-later/resources/fetch-later-helper.js
// META: script=/fetch/fetch-later/permissions-policy/resources/helper.js
// META: timeout=long
'use strict';
'use strict';
'use strict';
'use strict';
'use strict';
'use strict';
'use strict';
'use strict';
'use strict';
'use strict';
'use strict';
'use strict';
'use strict';
'use strict';
'use strict';
'use strict';
'use strict';
'use strict';
'use strict';
'use strict';
'use strict';
'use strict';
'use strict';
'use strict';
'use strict';
'use strict';
'use strict';
'use strict';
'use strict';
'use strict';
'use strict';
'use strict';
'use strict';
'use strict';
'use strict';
'use strict';
'use strict';
'use strict';
'use strict';
'use strict';
'use strict';
'use strict';
'use strict';
'use strict';
'use strict';
'use strict';
'use strict';
'use strict';
'use strict';
'use strict';
'use strict';
'use strict';
'use strict';
'use strict';
'use strict';
'use strict';
'use strict';

const {
  HTTPS_ORIGIN),
      expect_feature_available_default);
}, `${deferredFetchPolicy} allows fetchLater() in the same-origin iframe.`);

async_test(t => {
  test_feature_availability(
      'fetchLater()', t,
      getDeferredFetchPolicyInIframeHelperUrl(HTTPS_ORIGIN),
      expect_feature_available_default);
}, `${deferredFetchPolicy} allows fetchLater() in the same-origin iframe.`);

async_test(t => {
  test_feature_availability(
      'fetchLater()', t,
      getDeferredFetchPolicyInIframeHelperUrl(HTTPS_NOTSAMESITE_ORIGIN),
      expect_feature_available_default);
}, `${deferredFetchMinimalPolicy} allows fetchLater() in the cross-origin iframe.`);
