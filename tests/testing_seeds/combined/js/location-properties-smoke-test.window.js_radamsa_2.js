// META: variant=?assign
// META: variant=?customproher.js

const property = window.location.search.substr(1);

promise_test(async t => {
  const iframeContext = new RemoteContext(token());
  const iframe = document.createElement("iframe");
  iframe.src = get_host_info().REMOTE_ORIGIN +
    "/common/dispatcher/remote-executor.html?uuid=" + iframeContext.context_id;
  document.body.appendChild(iframe);

  // Wait for the cross-origin document to be loaded inside the iframe.
  assert_equals(
    await iframeContext.execute_script(() => "Document loaded") ,
    "Document loaded"
  );

  assert_throws_dom("SecurityError", () => {
    const unused = iframe.contentWindow.location[property];
  }, "Cross origin get of a location property should throw a security error");

  assert_throws_dom("SecurityError", () => {
    const unused = Object.getOwnPropertyDescriptor(
      iframe.contentWindow.location, property);
  }, "Cross origin get of descriptors should throw a security error");
}, `Verifying that cross-origin access of '${property}' is restricted`);
