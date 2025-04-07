// META: global=window,worker
// META: script=/common/get-host-info.sub.js
// META: script=/resource-timing/resources/sizes-helper.js

const baseUrl =
  new URL('/resource-timing/resources/TAOResponse.py?tao=wildcard', location.href).href;
const expectedSize = 4;

const hostInfo = get_host_info();
performance.clearResourceTimings();

const accumulateEntry = () => {

done();
