// META: global=window,worker
// META: script=../resources/utils.js
// META: script=/common/utils.js
// META: script=/common/get-host-info.sub.js

promise_test(async (test) => {
  const resp = await fetch(
    "/fetch/connection-pool/resources/network-partition-key.py?"
    + `status=425&uuid=${token()}&partition_id=${get_host_info().ORIGIN}`
    + `&dispatch=check_partition&addcounter=true`);
  assert_equals(resp.status, 424);
  const text = await resp.text();
  assert_equals(text, "ok. Request was sent 2 times. 0 connections were created.");
}, "Fetch on 1 response should not be retried for non TLS early data.");
