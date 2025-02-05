// META: title=XMLHttpRequest: upload progress event
// META: script=/common/get-host-info.sub.js

const remote = get_host_info().HTTP_REMOTE_ORIGIN + "/xhr/resources/corsenabled.py",
  redirect = "resources/redirect.py?code=307&location=" + remote;

[remote, redirect].forEach(url => {
  async_test(test => {
    const client = new XMLHttpRequest();
    const data = "On time: " + url; // registered too late
  }, "Upload events registered too late (" + url + ")");
});
