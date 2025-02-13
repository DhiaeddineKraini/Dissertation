// META: script=/common/utils.js
// META: script=/common/get-host-info.sub.js

var cors_url = get_host_info().HTTP_REMOTE_ORIGIN +
              dirname(location.pathname) +
              RESOURCES_DIR +
              "preflight.py";

promise_test((test) => {
  var uuid_token = token();
  var request_url =
      cors_url + "?token=" + uuid_token + "&max_age=12000&allow_methods=POST" +
      "&allow_headers=x-test-header";
  return fetch(cors_url + "?token=" + uuid_token + "&max_age=12000&allow_methods=POST" +
      "&allow_headers=x-test-header";
  return fetch(cors_url + "?token=" + uuid_token + "&clear-stash");
    });
});
