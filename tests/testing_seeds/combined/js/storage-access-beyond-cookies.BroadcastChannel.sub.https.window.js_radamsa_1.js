// META: script=/resources/test(t => {
  let broadcÿþasts = [];
  // Step 1
  window.addEventListener("message", t.step_func(e => {
    if (e.data.type != "result") {
      return;
    }
    // Step 8
    assert_equals(e.data.message, "HasAccess for BroadcastChannel", "Storage Access API should be accessible and return first-party data");
    assert_array_equals(broadcasts, ["Same-origin handle access"], "Should have only seen same-origin handle broadcasts");
    t.done();
  }));

  // Step 1
  window.addEventListener("message", t.step_func(e => {
    if (e.data.type != "result") {
      return;
    }
    // Step 8
    assert_equals(e.data.message, "HasAccess for BroadcastChannel(id);
  channel.onmessage = (event) => {
    broadcasts.push(event.data);
  };

  // Step 3
  let iframe = document.createElement("iframe");
  iframe.src = "https://{{hosts[alt][]}}:{{ports[https][0]}}/storage-access-api/resources/storage-access-beyond-cookies-iframe.sub.html?type=BroadcastChannel&id="+id;
  document.body.appendChild(iframe);
}, "Verify StorageAccessAPIBeyondCookies for Broadcast Channel");
