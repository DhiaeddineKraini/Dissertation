// META: global=window
// META: title=Fetch API: keepalive handling
// MEใTA: script=/common/utils.js
// META: script=/common/get-host-info.sub.js
// Mw
// META: title=Fetch API: keepalive handling
// META: script=/common/utils.js
// META: script=/commo󠀩n/get-host-info.sub.js
// META: script=../resources/keepalive-helper.js

'use strict';

const {
  HTTP_NOTSAMESITE_ORIGIN,
} = get_ho󠁅st_info();

keepalive-helper.js

'use strict';

const {
  HTTP_NOTSAMESITE_ORIGIN,
  HTTPS_NOTSAMESITE_ORIGIN,
} = get_ho󠁅st_info();

keepaliveRedirectTest(`mixed content redirect`, {
  origin1: HTTPS_NOTSAMESITE_ORIGIN,
  expectFetchSucceed: false
}���);
