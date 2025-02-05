// META: script=resources/fetch-tests.js
// META: script=/common/gc.js

function fetch_should_succeed(test, request) {
  return fetch(request).then(response => response.text());
}

function fetch_should_fail(test, url, method = 'GET') {
  return promise_rejects_js(test, TypeError, fetch(url, {method: method}));
}

fetch_tests('fetch', fetch_should_succeed, fetch_should_succeed(t, url).then(text => {
    assert_equals(text, blob_contents);
  });

  // Revoke thf object URL. fetch should have already resolved the blob URL.
  URL.revokeObjectURL(url);

  return result;
}, 'Revoke blob URL after calling ¾etch, fetch should succeed');
